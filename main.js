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

let mainLoadScreen = document.querySelector('.main_load');
let mainMenuScreen = document.querySelector('.main_menu');
let selectLevelScreen = document.querySelector('.select_level');
let selectTubeScreen = document.querySelector('.select_tube');
let finishScreen = document.querySelector('.finish_window');

let allOverlies = document.querySelectorAll('body>.overlay');
console.log(allOverlies)

let startButton = document.querySelector('.startButton');
let levelsBlock = document.querySelectorAll('.load_level_wrap>div');
let tubesBlock = document.querySelectorAll('.load_tubes_wrap>div');



let currentTimeBlock = document.querySelector('.current_time');
let bestTimeBlock = document.querySelector('.best_time');

let finishAgainButton = document.querySelector('.finish_again');
let finishInMenuButton = document.querySelector('.finish_in_menu');

let speedBlock = document.querySelector('.speed_block>.speed');

levelsBlock.forEach((child, index) => {
  child.addEventListener('click', async () => {
    currentLevel = index + 1;
    hiddenBlock(mainLoadScreen);
    await initAllData(false, true)
    hiddenBlock(selectTubeScreen);
    isMobile = detectDevice();

    if (isMobile) {
      document.body.requestFullscreen().then(() => {
        screen.orientation.lock("landscape");
      })
    }

  });
});

tubesBlock.forEach((child, index) => {
  child.addEventListener('click', () => {
    tubenum = index;
    hiddenBlock(0);
    dataLoaded = true;
  });
});


// startButton.addEventListener('click', () => {
//   mainMenuScreen.classList.add("hidden_block");
//   selectLevelScreen.classList.remove("hidden_block");
// });

function hiddenBlock(block) {
  allOverlies.forEach((el) => {
    el.classList.add('hidden_block')
  })
  if (block != 0) block.classList.remove('hidden_block')
}

finishAgainButton.addEventListener('click', async () => {
  hiddenBlock(mainLoadScreen);
  await resetAllMap();
  await initAllData(true, true);
  hiddenBlock(0);
  dataLoaded = true;
});

finishInMenuButton.addEventListener('click', async () => {
  hiddenBlock(mainLoadScreen);
  await resetAllMap();
  await init();
});




// document.body.addEventListener("touchstart", function () {
//   document.body.requestFullscreen().then(() => {
//     screen.orientation.lock("landscape");
//   })

// }, false);


let world;

let plane;

let levelItems = [];

let currentLevel = 0;

let player;
let playerBody;
let playerCollider;

let tubesMas = [];
let tube;
let tubenum = 0;

let chooseTubeNow = false;

let selectTubeWall;

let finishBlock;
let playerIsFinish;

const tubesChars = [
  {
    hSpeed: 10,
    maxHSpeed: 0.08,
    stepSpeed: 1,
    maxSpeed: 26,
    resetHAngle: false
  },
  {
    hSpeed: 14,
    maxHSpeed: 0.12,
    stepSpeed: 10,
    maxSpeed: 80,
    resetHAngle: false
  },
  {
    hSpeed: 25,
    maxHSpeed: 0.14,
    stepSpeed: 3,
    maxSpeed: 30,
    resetHAngle: true
  }
]



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
let levelLoaded = false;
let menuLoaded = false;

let groundsMas = [];

let allObjCollision = [];

let targetCube;

let isMobile = detectDevice();

let clock = new THREE.Clock();
let timer = new THREE.Clock();
let delta = 0;
let interval = 1 / 60;

let bestTime = 0;
let currentTime = 0;

const raycaster1 = new THREE.Raycaster();
const direction1 = new THREE.Vector3(0, -1, 0); // Направление вниз

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdceef6);
scene.fog = new THREE.Fog(scene.background, 1, 300);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 100, 0);



const hemiLightHelper = new THREE.HemisphereLightHelper(hemiLight, 10);
//scene.add(hemiLightHelper);

const dirLight = new THREE.DirectionalLight(0xffffff, 3);
//dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(1, 2, 0.2);
dirLight.position.multiplyScalar(120);

dirLight.castShadow = true;




dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const d = 1000;

dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = - d;

dirLight.shadow.camera.far = 3500;
dirLight.shadow.bias = - 0.001;

const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
//scene.add(dirLightHelper);

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





async function loadMenu() {

  timer = new THREE.Clock();

  scene.add(dirLight);
  scene.add(hemiLight);



  currentTime = 0;

  await RAPIER.init();
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));


  // let controls = new OrbitControls(camera, renderer.domElement);
  // controls.enableDamping = true;
  // controls.target.set(0, 0, 0);


  const gltfLoader = new GLTFLoader();
  const url = 'models/map-menu.glb';
  await gltfLoader.loadAsync(url).then((gltf) => {
    const root = gltf.scene;




    root.traverse((el) => {

      if (el.name == 'player') {

        player = el.clone();
        player.castShadow = true;
        player.receiveShadow = true;
        player.material.transparent = true;
        player.material.opacity = 0.4;
        player.userData.mass = 1;
        player.userData.playerStart = false;
        player.userData.playerBraking = false;
        player.userData.hTransition = 0;
        player.userData.currentSpeed = 0;
        // player.userData.hSpeed = 10;
        // player.userData.maxHSpeed = 0.08;
        // player.userData.stepSpeed = 2;
        // player.userData.maxSpeed = 16;

        // player.userData.resetHAngle = false;

        player.userData.right = false;
        player.userData.left = false;

        player.userData.onGround = false;
        player.userData.flying = false;

        player.userData.origPosition = player.position;

        addPhysicsToObject(player)
        scene.add(player);

      }
      else if (el.name.includes('player-tube')) {
        var playerTtube = el.clone();
        playerTtube.userData.startPosition = new THREE.Vector3(playerTtube.position.x, playerTtube.position.y, playerTtube.position.z);
        tubesMas[el.name.slice(-1) - 1] = playerTtube;
        scene.add(playerTtube);
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

        groundBlock.receiveShadow = true;

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
        wallBlock.castShadow = true;
        wallBlock.receiveShadow = true;
        wallBlock.userData.mass = 1;
        addPhysicsToObject(wallBlock);
        allObjCollision.push(wallBlock);
        scene.add(wallBlock);
      }
      else if (el.name.includes('area')) {
        let areaBlock = el.clone();
        areaBlock.castShadow = true;
        scene.add(areaBlock);
      }

    })

  });

  menuLoaded = true;

}





async function loadLevel() {

  playerIsFinish = false;

  const gltfLoader = new GLTFLoader();
  const url = 'models/map' + currentLevel + '.glb';
  await gltfLoader.loadAsync(url).then((gltf) => {
    const root = gltf.scene;

    // let gr = root.children.find((value, index, array) => value.name == "ground")
    // const groundBox = new THREE.Box3().setFromObject(gr);
    // const groundSize = groundBox.getSize(new THREE.Vector3());

    root.traverse((el) => {

      if (el.name.includes('ground')) {
        const box = new THREE.Box3().setFromObject(el);
        const size = box.getSize(new THREE.Vector3());
        let groundBlock = el.clone();
        groundBlock.receiveShadow = true;

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
        areaBlock.castShadow = true;
        areaBlock.receiveShadow = true;
        scene.add(areaBlock);
      }
      else if (el.name.includes('finish_block')) {
        finishBlock = el.clone();
        scene.add(finishBlock);
      }

    })

  });
  levelLoaded = true;
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
async function init() {
  await initAllData(true, false)
  hiddenBlock(selectLevelScreen);
}
init();

async function initAllData(needMenu, needLevel) {
  if (needMenu) {
    await loadMenu();
  }
  if (needLevel) {
    await loadLevel();
  }



  // mainLoadScreen.classList.add("hidden_block");
  // selectLevelScreen.classList.remove("hidden_block");


  //await loadAudio()
  //soundAround.play();





}

async function resetAllMap() {
  dataLoaded = false;
  levelLoaded = false;
  menuLoaded = false;
  // Удаление всех объектов со сцены
  while (scene.children.length > 0) {
    let object = scene.children[0];
    if (object.geometry) {
      object.geometry.dispose(); // Освобождаем геометрию
    }
    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach(material => material.dispose()); // Освобождаем материалы, если их несколько
      } else {
        object.material.dispose(); // Освобождаем материал, если он один
      }
    }
    scene.remove(object); // Удаляем объект со сцены
  }
  playerIsFinish = false;
}

function animate() {


  if (menuLoaded && !playerIsFinish) {

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
  }
  if (dataLoaded) {
    if (!playerIsFinish) {
      playerMove();

      currentTime = timer.getElapsedTime().toFixed(3);
      currentTimeBlock.textContent = currentTime;

    }
    else {

      hiddenBlock(finishScreen);



    }

    world.step();


    tubesMas[tubenum].position.copy(playerBody.translation());
    tubesMas[tubenum].quaternion.copy(playerBody.rotation())

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

  if (player.position.z > finishBlock.position.z) {

    playerIsFinish = true;
    if (currentTime < bestTime || bestTime == 0) {
      bestTime = currentTime;
      bestTimeBlock.textContent = bestTime;
    }
    player.position.z = 0;
  }

  targetCube.position.x += player.userData.hTransition;
  const direction = new THREE.Vector3().subVectors(playerBody.translation(), targetCube.position).normalize();
  targetCube.lookAt(player.position.x, player.position.y, player.position.z)

  playerBody.setRotation({ w: targetCube.quaternion.w, x: playerBody.rotation().x, y: targetCube.quaternion.y, z: playerBody.rotation().z });

  playerBody.setLinvel({
    x: direction.x * -tubesChars[tubenum].hSpeed,
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



  if (playerBody.linvel().z > 0) player.userData.currentSpeed = playerBody.linvel().z.toFixed(0);
  else player.userData.currentSpeed = 0;
  speedBlock.textContent = player.userData.currentSpeed;


  if (player.userData.left && player.userData.onGround) {
    if (player.userData.hTransition < 5) player.userData.hTransition += tubesChars[tubenum].maxHSpeed;

    let velocity = playerBody.linvel();
    velocity.z *= 0.9996;
    playerBody.setLinvel(velocity, true);
  }
  if (player.userData.right && player.userData.onGround) {
    if (player.userData.hTransition > -5) player.userData.hTransition -= tubesChars[tubenum].maxHSpeed;
    let velocity = playerBody.linvel();
    velocity.z *= 0.9996;
    playerBody.setLinvel(velocity, true);
  }

  if (tubesChars[tubenum].resetHAngle) {
    if (!player.userData.left && !player.userData.right) {
      if (player.userData.hTransition < -tubesChars[tubenum].maxHSpeed) {
        player.userData.hTransition += tubesChars[tubenum].maxHSpeed;
      }
      else if (player.userData.hTransition > tubesChars[tubenum].maxHSpeed) {
        player.userData.hTransition -= tubesChars[tubenum].maxHSpeed;
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

    if (mouse.y > 0 && !playerIsFinish) {
      if (playerBody.linvel().z < tubesChars[tubenum].maxSpeed && playerBody.linvel().y < 5 && playerBody.linvel().y > -5) {
        playerBody.applyImpulse({ x: 0.0, y: 0.0, z: tubesChars[tubenum].stepSpeed }, true);
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
      if (playerBody.linvel().z < tubesChars[tubenum].maxSpeed && playerBody.linvel().y < 5 && playerBody.linvel().y > -5 && !playerIsFinish) {
        playerBody.applyImpulse({ x: 0.0, y: 0.0, z: tubesChars[tubenum].stepSpeed }, true);
      }
      player.userData.playerStart = true;
      break;
    case 'KeyS':
    case 'ArrowDown':
      //playerBody.applyImpulse({ x: 0.0, y: 0.0, z: -tubesChars[tubenum].stepSpeed / 2 }, true);
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

    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true, false, false).setLinearDamping(0).setAngularDamping(2.0))
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
    shape = RAPIER.ColliderDesc.cuboid(size.x / 2 - 0.5, size.y / 2, size.z / 2).setMass(obj.userData.mass * 20).setRestitution(0).setFriction(4);

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