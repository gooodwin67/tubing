// npx vite --host
// npm install vite-plugin-top-level-await --save-dev

// npm run build 
// npm run deploy 

import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';


import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import RAPIER, { RayColliderHit } from '@dimforge/rapier3d-compat';


import { OrbitControls } from "three/addons/controls/OrbitControls";

import { detectCollisionCubes } from "./functions/detectColisions";
import { detectCollisionCubeAndArray } from "./functions/detectColisions";
import { detectDevice } from "./functions/detectColisions";



await RAPIER.init();
const world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));

const isMobile = detectDevice();



const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdceef6);
scene.fog = new THREE.Fog(scene.background, 1, 300);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 50, 0);
scene.add(hemiLight);

const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
// scene.add(hemiLightHelper);

const dirLight = new THREE.DirectionalLight(0xffffff, 3);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(- 1, 1.75, 1);
//dirLight.position.multiplyScalar(10);
scene.add(dirLight);

dirLight.castShadow = true;

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const d = 50;

dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = - d;

dirLight.shadow.camera.far = 3500;
dirLight.shadow.bias = - 0.0001;

const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
scene.add(dirLightHelper);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 4, -10);


let stats = new Stats();
document.body.appendChild(stats.dom);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
/*/////////////////////////////////////////////////////*/

// let controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.target.set(0, 0, 0);
/*/////////////////////////////////////////////////////*/

const ambientLight = new THREE.AmbientLight(0xaaaaaa, 4); // soft white light
//scene.add(ambientLight);


/*/////////////////////////////////////////////////////*/




let plane;

let player;
let playerBody;
let playerCollider;

let ground;
let groundBody;



let dynamicBodies = [];

let mouse = new THREE.Vector3;
let raycaster = new THREE.Raycaster;

let dataLoaded = false;

let groundsMas = [];


let allObjCollision = [];


let targetCube;








const gltfLoader = new GLTFLoader();
const url = 'models/map.glb';
gltfLoader.load(url, (gltf) => {
  const root = gltf.scene;

  root.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  let gr = root.children.find((value, index, array) => value.name == "ground")
  const groundBox = new THREE.Box3().setFromObject(gr);
  const groundSize = groundBox.getSize(new THREE.Vector3());

  root.traverse((el) => {

    if (el.name == 'player') {

      player = el.clone();
      player.userData.mass = 1;
      player.userData.playerStart = false;
      player.userData.playerBraking = false;
      player.userData.hTransition = 0;
      player.userData.hSpeed = 10;
      player.userData.maxHSpeed = 0.08;
      player.userData.stepSpeed = 2;
      player.userData.maxSpeed = 16;

      player.userData.resetHAngle = false;

      player.userData.right = false;
      player.userData.left = false;

      player.userData.onGround = false;

      addPhysicsToObject(player)
      scene.add(player);

      dirLight.position.set(player.position.x, player.position.y, player.position.z);
      dirLight.position.multiplyScalar(2);

      const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
      targetCube = new THREE.Mesh(geometry, material);
      targetCube.position.set(player.position.x, player.position.y, player.position.z + 5)
      targetCube.userData.hPos = 0;

      scene.add(targetCube);


    }
    else if (el.name.includes('ground')) {
      const box = new THREE.Box3().setFromObject(el);
      const size = box.getSize(new THREE.Vector3());
      let groundBlock = el.clone();
      //groundBlock.position.z = size.z / 2;
      groundBlock.userData.mass = 0;
      addPhysicsToObject(groundBlock);
      allObjCollision.push(groundBlock);
      scene.add(groundBlock);
    }
    else if (el.name.includes('wall')) {
      const box = new THREE.Box3().setFromObject(el);
      const size = box.getSize(new THREE.Vector3());
      let wallBlock = el.clone();
      wallBlock.userData.mass = 1;
      addPhysicsToObject(wallBlock);
      allObjCollision.push(wallBlock);
      scene.add(wallBlock);
    }
    else if (el.name.includes('area')) {
      let areaBlock = el.clone();
      scene.add(areaBlock);
    }
    // else if (el.name.includes('snowblock')) {
    //   const box = new THREE.Box3().setFromObject(el);
    //   const size = box.getSize(new THREE.Vector3());
    //   for (var i = 0; i < Math.floor(groundSize.z / size.z); i++) {
    //     let snowBlock = el.clone();
    //     snowBlock.position.z = size.z * i + size.z / 2;
    //     scene.add(snowBlock);
    //   }

    // }


  })

  dataLoaded = true;

  function texture(url, scalex, scaley) {
    var map = new THREE.TextureLoader().load('Textures/' + url);
    map.repeat.set(scalex, scaley);
    map.wrapS = THREE.RepeatWrapping;
    map.wrapT = THREE.RepeatWrapping;
    return map;
  }


  // construct the ground

  var ground2 = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 60),
    new THREE.MeshStandardMaterial({
      color: 'white', depthWrite: false,
      map: texture('snow-5-2.jpg', 4, 12),
      // normalMap: texture('normal.jpg', 10, 10),
      normalScale: new THREE.Vector2(0.5, 0.5),
    })
  );
  ground2.position.y = allObjCollision[1].position.y + 0.3;
  ground2.position.x = allObjCollision[1].position.x;
  ground2.position.z = allObjCollision[1].position.z;
  ground2.rotation.x = -Math.PI / 2;
  ground2.receiveShadow = true;
  //scene.add(ground2);

});


const raycaster1 = new THREE.Raycaster();
const direction1 = new THREE.Vector3(0, -1, 0); // Направление вниз



function animate() {

  if (dataLoaded) {

    camera.lookAt(new THREE.Vector3(camera.position.x, player.position.y, player.position.z));
    camera.position.y = player.position.y + 5;
    camera.position.z = player.position.z - 7;

    //dirLight.position.set(player.position.x + 2, player.position.y + 100, player.position.z + 50);


    targetCube.position.set(player.position.x, player.position.y, player.position.z + 5)


    playerMove();

    world.step();




    for (let i = 0, n = dynamicBodies.length; i < n; i++) {
      dynamicBodies[i][0].position.copy(dynamicBodies[i][1].translation())
      dynamicBodies[i][0].quaternion.copy(dynamicBodies[i][1].rotation())
    }





  }




  stats.update();
  renderer.render(scene, camera);

}
renderer.setAnimationLoop(animate);

document.addEventListener('touchend', onTouchEnd);
document.addEventListener('touchstart', onTouchMove);
document.addEventListener('touchmove', onTouchMove);
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

function playerMove() {




  // if (playerBody.linvel().z > 1) {
  //   playerBody.setLinvel({ x: player.userData.hTransition / 5, y: playerBody.linvel().y, z: playerBody.linvel().z }, true);
  // }
  // else {
  //   player.userData.hTransition = 0;
  // }

  // if (player.userData.playerBraking) {
  //   playerCollider.setFriction(3);
  // }
  // else {
  //   playerCollider.setFriction(0);
  // }

  // const direction = {
  //   x: targetCube.position.x - playerBody.translation().x,
  //   y: targetCube.position.y - playerBody.translation().y,
  //   z: targetCube.position.z - playerBody.translation().z
  // };
  targetCube.position.x += player.userData.hTransition;
  const direction = new THREE.Vector3().subVectors(playerBody.translation(), targetCube.position).normalize();


  playerBody.setLinvel({
    x: direction.x * -player.userData.hSpeed,
    y: playerBody.linvel().y,
    z: playerBody.linvel().z
  });

  raycaster1.set(player.position, direction1);
  const intersects = raycaster1.intersectObjects(allObjCollision);
  if (intersects.length > 0) {
    if (intersects[0].distance < 0.4) player.userData.onGround = true;
    else player.userData.onGround = false;
  }


  if (player.userData.left && player.userData.onGround) {
    if (player.userData.hTransition < 5) player.userData.hTransition += player.userData.maxHSpeed;
  }
  if (player.userData.right && player.userData.onGround) {
    if (player.userData.hTransition > -5) player.userData.hTransition -= player.userData.maxHSpeed;
  }

  if (player.userData.resetHAngle) {
    if (!player.userData.left && !player.userData.right) {
      if (player.userData.hTransition < -player.userData.maxHSpeed) {
        player.userData.hTransition += player.userData.maxHSpeed;
      }
      else if (player.userData.hTransition > player.userData.maxHSpeed) {
        player.userData.hTransition -= player.userData.maxHSpeed;
      }
      else {
        player.userData.hTransition = 0;
      }

    }
  }






}


function onTouchMove(e) {



  if (player.userData.onGround) {


    e = e.changedTouches[0];

    var rect = renderer.domElement.getBoundingClientRect();

    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = - ((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    if (mouse.y > 0) {
      if (playerBody.linvel().z < player.userData.maxSpeed && playerBody.linvel().y < 5 && playerBody.linvel().y > -5) {
        playerBody.applyImpulse({ x: 0.0, y: 0.0, z: player.userData.stepSpeed }, true);
      }
    }
    else {
      if (mouse.x > 0) {
        player.userData.left = false
        player.userData.right = true
      }
      else {
        player.userData.right = false
        player.userData.left = true
      }
    }


    // plane.geometry.computeBoundingBox();
    // var box1 = plane.geometry.boundingBox.clone();
    // box1.applyMatrix4(plane.matrixWorld);

    // intersects = raycaster.ray.intersectBox(box1, new THREE.Vector3());




    // if (intersects) targetPosition = new THREE.Vector3(intersects.x * 2, player.position.y, player.position.z);

  }
}

function onTouchEnd(e) {
  player.userData.right = false;
  player.userData.left = false;
}

function onKeyDown(event) {
  switch (event.code) {
    case 'KeyW':


      if (playerBody.linvel().z < player.userData.maxSpeed && playerBody.linvel().y < 5 && playerBody.linvel().y > -5) {
        playerBody.applyImpulse({ x: 0.0, y: 0.0, z: player.userData.stepSpeed }, true);
      }
      player.userData.playerStart = true;

      break;
    case 'KeyS':
      //playerBody.applyImpulse({ x: 0.0, y: 0.0, z: -player.userData.stepSpeed / 2 }, true);
      player.userData.playerBraking = true;


      break;
    case 'KeyA':


      player.userData.left = true

      break;
    case 'KeyD':


      player.userData.right = true

      break;
  }
}
function onKeyUp(event) {
  switch (event.code) {
    case 'KeyW':
      break;
    case 'KeyS':
      if (playerBody.linvel().y < 0.1) {
        player.userData.playerBraking = false;
      }
      break;
    case 'KeyA':

      player.userData.left = false;

      break;
    case 'KeyD':

      player.userData.right = false;

      break;
  }
}


function addPhysicsToObject(obj) {
  let body;
  let shape;

  const originalRotation = obj.rotation.clone();
  obj.rotation.set(0, 0, 0);
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  obj.rotation.copy(originalRotation);


  if (obj.name.includes('player')) {

    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true, false, false).setLinearDamping(0))
    shape = RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2).setMass(obj.userData.mass).setRestitution(0).setFriction(0);
    playerBody = body;
    playerCollider = shape;
    // shape.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    playerCollider = world.createCollider(shape, body)
    dynamicBodies.push([obj, body, obj.id])
    // const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.set(obj.position.x, obj.position.y, obj.position.z)
    // cube.rotation.copy(originalRotation);
    // scene.add(cube);

    // camera.position.x = player.position.x;
    // camera.position.y = player.position.y + 5;
    // camera.position.z = player.position.z;
    // camera.lookAt(player.position)
  }
  else if (obj.name.includes('ground')) {
    body = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true))
    shape = RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 3, size.z / 2).setMass(obj.userData.mass).setRestitution(0).setFriction(0);
    world.createCollider(shape, body)
    groundBody = body;
    dynamicBodies.push([obj, body, obj.id])
  }
  if (obj.name.includes('wall')) {
    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true).setLinearDamping(0))
    shape = RAPIER.ColliderDesc.cuboid(size.x / 4, size.y / 4, size.z / 4).setMass(obj.userData.mass * 20).setRestitution(0).setFriction(4);

    world.createCollider(shape, body)
    dynamicBodies.push([obj, body, obj.id])

    const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.4 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(obj.position.x, obj.position.y, obj.position.z)
    cube.rotation.copy(originalRotation);
    //scene.add(cube);
  }






  // if (obj.children.length > 0) {
  //   dynamicBodies.push([obj.children[0], body, id])
  //   //dynamicBodies.push([obj.children[1], body, id + 100])
  // }
  // else {
  //   dynamicBodies.push([obj, body, id])
  // }

}





/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/

// player.mixer = new THREE.AnimationMixer(player);
//   player.mixers = [];
//   player.allAnimations = [];
//   player.mixers.push(player.mixer);
//   player.clock = new THREE.Clock();
//   player.animations = gltf.animations;


//   player.allAnimations.push(player.userData.playerRotate = player.mixer.clipAction(player.animations[0]));
//   //player.userData.playerRotate.timeScale = 1;

//   //player.userData.playerRotate.play();

// if (player.mixers.length > 0) {

//   player.mixers[0].update(player.clock.getDelta());

// }

/*///////////////////////////////////////////////////////////////////////////////////////////////////////*/