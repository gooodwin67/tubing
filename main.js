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

import { getParticleSystem } from "./getParticleSystem.js";

var startButton = document.getElementById('startButton');
startButton.addEventListener('click', initAllData);



let world;

let plane;

let levelItems = [];

let player;
let playerBody;
let playerCollider;

let playerParticleSystem;

let soundSlide;
let soundJump;
let soundAround;
let soundMusic;

let ground;
let groundBody;

let dynamicBodies = [];

let mouse = new THREE.Vector3;
let raycaster = new THREE.Raycaster;

let dataLoaded = false;

let groundsMas = [];

let allObjCollision = [];

let targetCube;

let isMobile = detectDevice();

let clock = new THREE.Clock();
let delta = 0;
let interval = 1 / 60;

const raycaster1 = new THREE.Raycaster();
const direction1 = new THREE.Vector3(0, -1, 0); // Направление вниз

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdceef6);
scene.fog = new THREE.Fog(scene.background, 1, 300);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 100, 0);

scene.add(hemiLight);

const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
//scene.add(hemiLightHelper);

const dirLight = new THREE.DirectionalLight(0xffffff, 3);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(0, 1, 0);
dirLight.position.multiplyScalar(10);

dirLight.castShadow = true;
scene.add(dirLight);



dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const d = 500;

dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = - d;

dirLight.shadow.camera.far = 350;
dirLight.shadow.bias = - 0.001;

const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
scene.add(dirLightHelper);

const ambientLight = new THREE.AmbientLight(0xaaaaaa, 1); // soft white light
//scene.add(ambientLight);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 4, -10);

let stats = new Stats();
document.body.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

async function init() {

  await RAPIER.init();
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));

  isMobile = detectDevice();

  document.body.addEventListener("touchstart", function () {
    this.requestFullscreen().then(() => {
      screen.orientation.lock("landscape");
    })

  }, false);


  // let controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = true;
  // controls.target.set(0, 0, 0);


  const gltfLoader = new GLTFLoader();
  const url = 'public/models/map-menu.glb';
  await gltfLoader.loadAsync(url).then((gltf) => {
    const root = gltf.scene;

    root.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // let gr = root.children.find((value, index, array) => value.name == "ground")
    // const groundBox = new THREE.Box3().setFromObject(gr);
    // const groundSize = groundBox.getSize(new THREE.Vector3());

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
        player.userData.flying = false;

        addPhysicsToObject(player)
        scene.add(player);


        // const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 });
        // targetCube = new THREE.Mesh(geometry, material);
        // targetCube.position.set(player.position.x, player.position.y, player.position.z + 5)
        // targetCube.userData.hPos = 0;

        // scene.add(targetCube);


      }
      else if (el.name == 'arrow_area') {

        targetCube = el.clone();
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
      else if (el.name.includes('selectlevel')) {
        let areaBlock = el.clone();
        scene.add(areaBlock);
        levelItems.push(el);
      }

    })

  });

  dataLoaded = true;


}

async function loadMenu(level) {
  const gltfLoader = new GLTFLoader();
  const url = 'public/models/map' + level + '.glb';
  await gltfLoader.loadAsync(url).then((gltf) => {
    const root = gltf.scene;

    root.traverse(function (child) {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    // let gr = root.children.find((value, index, array) => value.name == "ground")
    // const groundBox = new THREE.Box3().setFromObject(gr);
    // const groundSize = groundBox.getSize(new THREE.Vector3());

    root.traverse((el) => {

      if (el.name.includes('ground')) {
        const box = new THREE.Box3().setFromObject(el);
        const size = box.getSize(new THREE.Vector3());
        let groundBlock = el.clone();

        //groundBlock.position.z = size.z / 2;
        groundBlock.userData.mass = 0;
        groundBlock.name = el.name;
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

    })

  });
}

// async function loadAudio() {
//   const listener = new THREE.AudioListener();
//   player.add(listener);


//   const audioLoader = new THREE.AudioLoader();
//   await audioLoader.loadAsync('public/audio/slide.mp3').then((buffer) => {
//     soundSlide = new THREE.PositionalAudio(listener);
//     soundSlide.setBuffer(buffer);
//     soundSlide.setLoop(true);
//     soundSlide.setRefDistance(40);
//     soundSlide.setVolume(1);
//     player.add(soundSlide);
//   });

//   await audioLoader.loadAsync('public/audio/jump.mp3').then((buffer) => {
//     soundJump = new THREE.PositionalAudio(listener);
//     soundJump.setBuffer(buffer);
//     soundJump.setLoop(false);
//     soundJump.setRefDistance(40);
//     soundJump.setVolume(0.4);
//     player.add(soundJump);
//   });

//   await audioLoader.loadAsync('public/audio/around.mp3').then((buffer) => {
//     soundAround = new THREE.PositionalAudio(listener);
//     soundAround.setBuffer(buffer);
//     soundAround.setLoop(true);
//     soundAround.setRefDistance(40);
//     soundAround.setVolume(1);
//     player.add(soundAround);
//   });

//   // await audioLoader.loadAsync('assets/audio/music.mp3').then((buffer) => {
//   //   soundMusic = new THREE.PositionalAudio(listener);
//   //   soundMusic.setBuffer(buffer);
//   //   soundMusic.setLoop(true);
//   //   soundMusic.setRefDistance(40);
//   //   soundMusic.setVolume(0.4);
//   //   player.add(soundMusic);
//   // });

// }

async function initAllData() {
  await init()
  //await loadAudio()

  //loadMenu();

  var overlay = document.getElementById('overlay');
  overlay.remove();

  //soundAround.play();

  // playerParticleSystem = getParticleSystem({
  //   camera: camera,
  //   emitter: camera,
  //   parent: scene,
  //   rate: 350,
  //   texture: "smoke.png",
  //   maxSize: 1,
  //   radius: 1,
  //   maxLife: 20.7,
  //   color: new THREE.Color(0xffffff),
  // });



}



function animate() {

  if (dataLoaded) {
    // if (playerBody.linvel().z > 3 && player.userData.onGround) {
    //   if (!soundSlide.isPlaying) soundSlide.play();
    // }
    // else {
    //   if (soundSlide.isPlaying) soundSlide.stop()
    // }


    if (isMobile) {
      camera.lookAt(new THREE.Vector3(camera.position.x, player.position.y, player.position.z + 5));
      //camera.position.x = player.position.x;
      camera.position.y = player.position.y + 5;
      camera.position.z = player.position.z - 3;
    }
    else {
      camera.lookAt(new THREE.Vector3(camera.position.x, player.position.y, player.position.z + 5));

      camera.position.y = player.position.y + 4;
      camera.position.z = player.position.z - 4;
    }



    targetCube.position.set(player.position.x, player.position.y, player.position.z + 5)


    playerMove();

    world.step();

    for (let i = 0, n = dynamicBodies.length; i < n; i++) {
      dynamicBodies[i][0].position.copy(dynamicBodies[i][1].translation())
      dynamicBodies[i][0].quaternion.copy(dynamicBodies[i][1].rotation())
    }


  }

  stats.update();

}

renderer.setAnimationLoop(() => {
  delta += clock.getDelta();
  if (delta > interval) {
    animate()
    renderer.render(scene, camera);
    delta = delta % interval;
  }

});


document.addEventListener('touchend', onTouchEnd);
document.addEventListener('touchstart', onTouchMove);
document.addEventListener('touchmove', onTouchMove);
window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);

document.addEventListener('mousedown', onDocumentMouseDown, false);

function playerMove() {

  targetCube.position.x += player.userData.hTransition;
  const direction = new THREE.Vector3().subVectors(playerBody.translation(), targetCube.position).normalize();
  targetCube.lookAt(player.position.x, player.position.y, player.position.z)

  playerBody.setRotation({ w: targetCube.quaternion.w, x: playerBody.rotation().x, y: targetCube.quaternion.y, z: playerBody.rotation().z });

  playerBody.setLinvel({
    x: direction.x * -player.userData.hSpeed,
    y: playerBody.linvel().y,
    z: playerBody.linvel().z
  });

  raycaster1.set(player.position, direction1);
  const intersects = raycaster1.intersectObjects(allObjCollision);
  if (intersects.length > 0) {
    if (intersects[0].distance < 0.4) {
      player.userData.flying = false;
      if (!player.userData.onGround && !player.userData.flying) {
        // soundJump.play();

      }
      player.userData.onGround = true;
    }
    else {
      player.userData.onGround = false;
      player.userData.flying = true;
    }
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

  // playerParticleSystem.update(0.16);


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
  }
}


function onDocumentMouseDown(e) {
  e.preventDefault();
  var rect = renderer.domElement.getBoundingClientRect();

  mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = - ((e.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  levelItems.forEach((item) => {
    item.geometry.computeBoundingBox();
    var box1 = item.geometry.boundingBox.clone();
    box1.applyMatrix4(item.matrixWorld);

    let intersects = raycaster.ray.intersectBox(box1, new THREE.Vector3());


    if (intersects) {




      loadMenu(item.name.slice(-1));


    }
  })


}

function onTouchEnd(e) {
  player.userData.right = false;
  player.userData.left = false;
}

function onKeyDown(event) {
  switch (event.code) {
    case 'KeyW':
    case 'ArrowUp':
      if (playerBody.linvel().z < player.userData.maxSpeed && playerBody.linvel().y < 5 && playerBody.linvel().y > -5) {
        playerBody.applyImpulse({ x: 0.0, y: 0.0, z: player.userData.stepSpeed }, true);
      }
      player.userData.playerStart = true;
      break;
    case 'KeyS':
    case 'ArrowDown':
      //playerBody.applyImpulse({ x: 0.0, y: 0.0, z: -player.userData.stepSpeed / 2 }, true);
      player.userData.playerBraking = true;
      break;
    case 'KeyA':
    case 'ArrowLeft':
      player.userData.left = true
      break;
    case 'KeyD':
    case 'ArrowRight':
      player.userData.right = true
      break;
  }
}
function onKeyUp(event) {
  switch (event.code) {
    case 'KeyW':
    case 'ArrowUp':
      break;
    case 'KeyS':
    case 'ArrowDown':
      if (playerBody.linvel().y < 0.1) {
        player.userData.playerBraking = false;
      }
      break;
    case 'KeyA':
    case 'ArrowLeft':
      player.userData.left = false;

      break;
    case 'KeyD':
    case 'ArrowRight':
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

    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true, true, false).setLinearDamping(0).setAngularDamping(2.0))
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

  }
  else if (obj.name.includes('ground')) {
    body = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true))
    shape = RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2).setMass(obj.userData.mass).setRestitution(0).setFriction(0);
    world.createCollider(shape, body)
    groundBody = body;
    dynamicBodies.push([obj, body, obj.id])
  }
  if (obj.name.includes('wall')) {
    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true).setLinearDamping(0))
    shape = RAPIER.ColliderDesc.cuboid(size.x / 3, size.y / 2, size.z / 3).setMass(obj.userData.mass * 20).setRestitution(0).setFriction(4);

    world.createCollider(shape, body)
    dynamicBodies.push([obj, body, obj.id])

    // const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.4 });
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.set(obj.position.x, obj.position.y, obj.position.z)
    // cube.rotation.copy(originalRotation);
    //scene.add(cube);
  }



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