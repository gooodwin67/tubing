// npx vite --host
// npm install vite-plugin-top-level-await --save-dev

// npm run build 
// npm run deploy 




import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';


import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import RAPIER from '@dimforge/rapier3d-compat';


import { detectDevice } from "./functions/detectColisions";
import { isIOS } from "./functions/detectColisions";
import { convertToMilliseconds } from "./functions/detectColisions";
import { convertMilliseconds } from "./functions/detectColisions";

let mainLoadScreen = document.querySelector('.main_load');
let mainMenuScreen = document.querySelector('.main_menu');
let selectLevelScreen = document.querySelector('.select_level');
let levelShadow = document.querySelectorAll('.select_level .level_shadow');

let selectTubeScreen = document.querySelector('.select_tube');
let finishScreen = document.querySelector('.finish_window');
let finishScreenTime = document.querySelector('.finish_you_time .finish_you_time_time');

let BoomScreen = document.querySelector('.boom_window');


let mainRecordText = document.querySelector('.main_record');

let allOverlies = document.querySelectorAll('body>.overlay');



let startButton = document.querySelector('.startButton');
let levelsBlock = document.querySelectorAll('.load_level_wrap .btn_lev');
let levelsTimesBlock = document.querySelectorAll('.load_level_wrap .level_time');

let tubesBlock = document.querySelectorAll('.load_tubes_wrap>div');


let languagesBtns = document.querySelectorAll('.language_block>img');

let movingBlocks = [];
let movingBlocksBody = [];




let timesBlock = document.querySelector('.times');
let currentTimeBlock = document.querySelector('.current_time');
let bestTimeBlock = document.querySelector('.best_time');

let finishAgainButton = document.querySelector('.finish_window .finish_again');
let finishInMenuButton = document.querySelector('.finish_window .finish_in_menu');

let boomAgainButton = document.querySelector('.boom_window .finish_again');
let boomInMenuButton = document.querySelector('.boom_window .finish_in_menu');

let speedBlockWrap = document.querySelector('.speed_block');
let speedBlock = document.querySelector('.speed_block>.speed');


let instrCheck = document.querySelector('.instr_check');

let loadPercent = document.querySelector('.load_percent');

let records_wrap = document.querySelector('.records_wrap>div');

let pauseButton = document.querySelector('.pause_button_wrap');
let closePauseButton = document.querySelector('.close_pause_button');
let resetButton = document.querySelector('.reset_button');
let inmenuButton = document.querySelector('.inmenu_button');


let beforeStartWrap = document.querySelector('.before_start');
let instructionStartBtn = document.querySelector('.instruction_start_btn');


let menuInGameWrap = document.querySelector('.menu_in_game_wrap');


let startTimeBlock = document.querySelector('.start_time');
let startTimeWrap = document.querySelector('.start_time_wrap');

let audioButton = document.querySelector('.audio_button');


document.oncontextmenu = function () { return false };








// let clearRec = document.querySelector('.clear_rec');
// clearRec.addEventListener('click', () => {
//   localStorage.clear();
// })

languagesBtns.forEach((child, index) => {
  child.addEventListener('click', () => {
    if (playerData.language != index) {
      languagesBtns.forEach((el) => {
        el.classList.remove('selected');
      })
      child.classList.add('selected');
      playerData.language = index;

      localStorage.setItem('playerData', JSON.stringify(playerData));
      changeLanguage(playerData.language);
    }

  });
})

function changeLanguage(language) {
  if (language == 0) {
    document.querySelector('.title_game').src = "./images/title.png";
    document.querySelector('.startgame_title').textContent = 'начать игру'
    document.querySelector('.language_title').textContent = 'Язык:'
    document.querySelectorAll('.level_text h2>span').forEach((el) => {
      el.textContent = 'Уровень'
    })
    document.querySelectorAll('.leveltime_title').forEach((el) => {
      el.textContent = 'Время: '
    })
    document.querySelectorAll('.load_tubes_wrap .selecttube_title').forEach((el) => {
      el.textContent = 'Тюбинг'
    })
    document.querySelectorAll('.load_tubes_wrap .selecttubespeed_title').forEach((el) => {
      el.textContent = 'Скорость: '
    })
    document.querySelectorAll('.load_tubes_wrap .selecttubecontrol_title').forEach((el) => {
      el.textContent = 'Управление: '
    })

    document.querySelectorAll('.load_level_wrap .btn_lev').forEach((el) => {
      el.textContent = 'Начать'
    })

    document.querySelectorAll('.load_level_wrap .ad_res').forEach((el) => {
      el.textContent = 'Пропустить'
    })

    document.querySelector('.selecttubedesc_title').textContent = 'Проходите уровни, чтобы разблокировать тюбинги'

    document.querySelector('.menu_in_game_wrap_head').textContent = 'Пауза'
    document.querySelector('.close_pause_button').textContent = 'Продолжить игру'
    document.querySelector('.reset_button').textContent = 'Начать заново'
    document.querySelector('.inmenu_button').textContent = 'Выйти'

    document.querySelector('.finish_you_time_title').textContent = 'Ваше время: '
    document.querySelector('.crash_title').textContent = 'Вы врезались'
    document.querySelector('.finish_title').textContent = 'Вы приехали'

    document.querySelectorAll('.finish_again').forEach((el) => {
      el.textContent = 'Еще раз'
    })
    document.querySelectorAll('.finish_in_menu').forEach((el) => {
      el.textContent = 'Выбор уровня'
    })

    document.querySelector('.current_time_title').textContent = 'Время'
    document.querySelector('.best_time_title').textContent = 'Лучшее время'

    document.querySelector('.speed_title').textContent = 'КМ/Ч'

    document.querySelector('.instruction_start_btn').textContent = 'СТАРТ'
    document.querySelector('.instr-disabled span').textContent = 'Больше не показывать'

    document.querySelector('.desktop_instr').innerHTML = `<h2>Управление</h2>
    <span>Быстро нажимайте <span class='button_active'>W</span> или <span class='button_active'>↑</span> чтобы разогнаться до стартовой отметки</span>
    <span>Клавишами <span>←</span> <span>→</span> или <span>A</span> <span>D</span> управляйте тюбингом</span>
    <span>Цель - доехать до финиша за кратчайшее время</span>`;

    document.querySelector('.mobile_instr div').innerHTML = `<span>Быстро нажимайте на зону <span> ↑ </span> чтобы разогнаться до стартовой отметки</span>
    <span>Нажимая на зоны <span> ← </span> и <span> → </span> управляйте тюбингом</span>`

    document.querySelector('.sci-fi-loader strong').textContent = 'Загрузка'

    document.querySelector('.main_record_title').textContent = 'Мое общее время: '

    if (mainRecord == 0) document.querySelector('.main_record').textContent = 'Пройдите все уровни, чтобы поставить рекорд'

    document.querySelector('.records_wrap>p').textContent = 'Мировой рейтинг: '

    document.querySelector('.need_auth_text').textContent = 'Чтобы участвовать в рейтинге  '
    document.querySelector('.auth_link').textContent = 'войдите в аккаунт'


  }
  else {
    document.querySelector('.title_game').src = "./images/title-en.png";
    document.querySelector('.startgame_title').textContent = 'start game'
    document.querySelector('.language_title').textContent = 'Language:'
    document.querySelectorAll('.level_text h2>span').forEach((el) => {
      el.textContent = 'Level'
    })
    document.querySelectorAll('.leveltime_title').forEach((el) => {
      el.textContent = 'Time: '
    })
    document.querySelectorAll('.load_tubes_wrap .selecttube_title').forEach((el) => {
      el.textContent = 'Tubing'
    })
    document.querySelectorAll('.load_tubes_wrap .selecttubespeed_title').forEach((el) => {
      el.textContent = 'Speed: '
    })
    document.querySelectorAll('.load_tubes_wrap .selecttubecontrol_title').forEach((el) => {
      el.textContent = 'Control: '
    })
    document.querySelector('.selecttubedesc_title').textContent = 'Complete the levels to unlock the tubings'

    document.querySelector('.menu_in_game_wrap_head').textContent = 'Pause'
    document.querySelector('.close_pause_button').textContent = 'Continue'
    document.querySelector('.reset_button').textContent = 'Start again'
    document.querySelector('.inmenu_button').textContent = 'Exit to levels'

    document.querySelector('.finish_you_time_title').textContent = 'You time: '
    document.querySelector('.crash_title').textContent = 'You crashed'
    document.querySelector('.finish_title').textContent = 'You finished'

    document.querySelectorAll('.finish_again').forEach((el) => {
      el.textContent = 'Again'
    })
    document.querySelectorAll('.finish_in_menu').forEach((el) => {
      el.textContent = 'Select Level'
    })

    document.querySelector('.current_time_title').textContent = 'Time'
    document.querySelector('.best_time_title').textContent = 'Best time'

    document.querySelector('.speed_title').textContent = 'KM/H'

    document.querySelector('.instruction_start_btn').textContent = 'START'
    document.querySelector('.instr-disabled span').textContent = "Don't show again"

    document.querySelector('.desktop_instr').innerHTML = `<h2>Instructions</h2>
    <span>Quickly press <span class='button_active'>W</span> or <span class='button_active'>↑</span> to accelerate to the starting point</span>
    <span>Use <span>←</span> <span>→</span> or <span>A</span> <span>D</span> keys to control the tubing</span>
    <span>The goal is to reach the finish line in the shortest time</span>`;

    document.querySelector('.mobile_instr div').innerHTML = `<span>Quickly press on zone <span> ↑ </span> to accelerate to the starting point</span>
    <span>By taps on zones <span> ← </span> and <span> → </span> control the tubing</span>`

    document.querySelector('.sci-fi-loader strong').textContent = 'Loading '

    document.querySelector('.main_record_title').textContent = 'My total time: '
    if (mainRecord == 0) document.querySelector('.main_record').textContent = 'Complete all the levels to set a record'

    document.querySelector('.records_wrap>p').textContent = 'World Ranking: '

    document.querySelector('.need_auth_text').textContent = 'To participate in the rating '
    document.querySelector('.auth_link').textContent = 'login to account'

    document.querySelectorAll('.load_level_wrap .btn_lev').forEach((el) => {
      el.textContent = 'Start'
    })

    document.querySelectorAll('.load_level_wrap .ad_res').forEach((el) => {
      el.textContent = 'Skip'
    })

  }
};

document.querySelectorAll('.load_level_wrap .ad_res').forEach((el, index) => {
  el.addEventListener('click', async () => {


    ysdk.adv.showRewardedVideo({
      callbacks: {
        onOpen: () => {
          console.log('Video ad open.');
          if (soundAround != undefined && soundAround.isPlaying) soundAround.stop();
        },
        onRewarded: async () => {
          console.log('Rewarded! ' + index);
          hiddenBlock(mainLoadScreen);
          playerData.levelsTimes['time' + (index + 1)] = 120.111;
          levelsDone = Object.keys(playerData.levelsTimes).length;
          localStorage.setItem('playerData', JSON.stringify(playerData));
          await resetAllMap();
          await init();
        },
        onClose: () => {
          console.log('Video ad closed.');
          if (soundAround != undefined && !soundAround.isPlaying && canAudio) soundAround.play();
        },
        onError: (e) => {
          console.log('Error while open video ad:', e);
          if (soundAround != undefined && !soundAround.isPlaying && canAudio) soundAround.play();
        }
      }
    })
  })
})

levelsBlock.forEach((child, index) => {
  child.addEventListener('click', async () => {
    if (index + 1 <= openLevels + 1) {
      currentLevel = index + 1;
      tubesBlock.forEach((child, index) => {
        if (tubesChars[index].levels.includes(currentLevel)) {
          child.classList.remove('disabledTube');
          tubesChars[index].canInLevel = true;
        }
        else {
          child.classList.add('disabledTube')
          tubesChars[index].canInLevel = false;
        }
      })
      hiddenBlock(mainLoadScreen);
      await initAllData(false, true)
      hiddenBlock(selectTubeScreen);
    }


  });
});

tubesBlock.forEach((child, index) => {
  child.addEventListener('click', () => {
    if (tubesChars[index].canInLevel) {
      tubenum = index;
      hiddenBlock(0);
      startRace();
    }
  });
});



function startRace() {



  if (!playerData.canStart) {
    hiddenBlock(beforeStartWrap);
    if (isMobile) document.querySelector('.mobile_instr').classList.remove('hidden_instr');
    else document.querySelector('.desktop_instr').classList.remove('hidden_instr');
  }
  else {

    timesBlock.classList.remove('hidden_block');
    speedBlockWrap.classList.remove('hidden_block');
    tubesMas[tubenum].position.copy(playerBody.translation());
    let iter = 0; //0
    naStartTimer = true;
    if (isMobile) document.querySelector('.instr-mobile-ingame').classList.remove('hidden_block')
    if (isMobile) document.querySelector('.anim_tap_top').classList.remove('hidden_block')
    let interval = setInterval((e) => {
      if (soundBip != undefined && !soundBip.isPlaying && canAudio && !noVisible) soundBip.play();
      startTimeWrap.classList.remove("hidden_block");
      if (!noVisible) iter++;

      if (iter == 2 && isMobile) {
        document.querySelector('.instr-mobile-ingame').classList.add('hidden_block')

      }

      if (iter == 4) {
        if (soundBip != undefined) soundBip.stop(2.5);
        naStartTimer = false;
        if (playerData.language == 0) startTimeBlock.textContent = 'СТАРТ';
        else startTimeBlock.textContent = 'GO';
        dataLoaded = true;
        pauseButton.classList.remove('hidden_block');
        clearInterval(interval);
        ysdk.features.GameplayAPI.start();
        setTimeout(() => {
          startTimeWrap.classList.add("hidden_block");
        }, 600);
      }
      else {
        startTimeBlock.textContent = 4 - iter;
      }


    }, 1000)
  }
}


instructionStartBtn.addEventListener('click', () => {
  playerData.canStart = true;
  hiddenBlock(0);

  startRace();
})



audioButton.addEventListener('click', () => {

  if (canAudio == true) {
    audioButton.classList.add('audio_off');
    if (soundAround != undefined && soundAround.isPlaying) soundAround.stop();
    if (soundSlide != undefined && soundSlide.isPlaying) soundSlide.stop();
    if (soundBip != undefined && soundBip.isPlaying) soundBip.stop();
    canAudio = false;
  }
  else {
    audioButton.classList.remove('audio_off');
    if (soundAround != undefined && !soundAround.isPlaying) soundAround.play();
    if (playerBody.linvel().z > 3 && player.userData.onGround && !pause) {
      if (soundSlide != undefined) soundSlide.play();
    }
    canAudio = true;
  }
})




let playerOn;

startButton.addEventListener('click', () => {
  isMobile = detectDevice();
  isIos = isIOS();

  if (isIos) audioButton.classList.add('hidden_block');

  if (playerData.language == 0) {
    startFlag = startFlagRu
    scene.add(startFlag);
  }
  else {
    startFlag = startFlagEn
    scene.add(startFlag);
  }

  document.querySelector('.audio_button_wrap').classList.remove('hidden_block');

  if (soundAround != undefined && canAudio) soundAround.play();

  // if (isMobile) {
  //   console.log(123);
  //   ysdk.screen.fullscreen.request
  //   document.body.requestFullscreen().then(() => {
  //     screen.orientation.lock("landscape");
  //   })
  // }
  mainMenuScreen.classList.add("hidden_block");
  selectLevelScreen.classList.remove("hidden_block");
});


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
  startRace();
});

boomAgainButton.addEventListener('click', async () => {
  hiddenBlock(mainLoadScreen);
  await resetAllMap();
  await initAllData(true, true);
  hiddenBlock(0);
  startRace();
});

resetButton.addEventListener('click', async () => {

  await resetAllMap();
  await initAllData(true, true);
  hiddenBlock(0);
  startRace();
});

finishInMenuButton.addEventListener('click', async () => {
  hiddenBlock(mainLoadScreen);
  await resetAllMap();
  await init();
  ysdk.adv.showFullscreenAdv({
    callbacks: {
      onOpen: function (wasShown) {
        if (soundAround != undefined && soundAround.isPlaying) soundAround.stop();
      },
      onClose: function (wasShown) {
        if (soundAround != undefined && !soundAround.isPlaying && canAudio) soundAround.play();
      },
      onError: function (error) {
        if (soundAround != undefined && !soundAround.isPlaying && canAudio) soundAround.play();
      }
    }
  })
});
boomInMenuButton.addEventListener('click', async () => {
  hiddenBlock(mainLoadScreen);
  await resetAllMap();
  await init();
});

inmenuButton.addEventListener('click', async () => {
  hiddenBlock(mainLoadScreen);
  await resetAllMap();
  await init();
});

pauseButton.addEventListener('click', () => {
  if (naStartTimer == false && dataLoaded && !playerIsFinish) {
    ysdk.features.GameplayAPI?.stop()
    hiddenBlock(menuInGameWrap);
    player.userData.time = timer.getElapsedTime();
    timer.stop();
    document.querySelector('.audio_button_wrap').classList.add('hidden_block');

    if (soundSlide != undefined) soundSlide.stop();
    if (soundAround != undefined) soundAround.stop();

    pause = true;
  }
});

closePauseButton.addEventListener('click', () => {
  hiddenBlock(0);
  timer.start();
  timer.elapsedTime = player.userData.time;
  document.querySelector('.audio_button_wrap').classList.remove('hidden_block');
  if (canAudio) {
    if (soundAround != undefined) soundAround.play();
  }
  if (playerBody.linvel().z > 3 && player.userData.onGround && canAudio) {
    if (soundSlide != undefined) soundSlide.play();
  }

  pause = false;
  ysdk.features.GameplayAPI?.start()
})




instrCheck.onchange = function () {
  if (this.checked) {
    playerData.canStart = true;
    localStorage.setItem('playerData', JSON.stringify(playerData));
  }
  else {
    playerData.canStart = false;
    localStorage.setItem('playerData', JSON.stringify(playerData));
  }

};




// document.body.addEventListener("touchstart", function () {
//   document.body.requestFullscreen().then(() => {
//     screen.orientation.lock("landscape");
//   })

// }, false);


let world;

let firststart = true;

let frames = 0, prevTime = performance.now();

let levelItems = [];

let currentLevel = 0;

let pause = false;

let canAudio = true;

let mainRecord = 0;
let boardMainRecord = 0;
let levelsDone = 0;

let lb;
let resLb;
let canSetLb = false;
let canGetLb = false;


let player;
let playerBody;
let playerShape;
let playerCollider;
let groundCollider;

let naStartTimer = false;

let tubesMas = [];
let tube;
let tubenum = 0;
let tubingEnabledNum;

let playerTtube;

let chooseTubeNow = false;

let selectTubeWall;

let startFlag;
let startFlagRu;
let startFlagEn;

let noVisible = false;


let finishBlock;
let playerIsFinish;

const tubesChars = [
  {
    hSpeed: 10,
    maxHSpeed: 0.08,
    stepSpeed: 1,
    nowSpeed: 0,
    maxSpeed: 26,
    resetHAngle: false,
    levels: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    canInLevel: false
  },
  {
    hSpeed: 12,
    maxHSpeed: 0.10,
    stepSpeed: 2.0, //2.0
    nowSpeed: 0,
    maxSpeed: 38, //38
    resetHAngle: false,
    levels: [4, 5, 6, 7, 8, 9],
    canInLevel: false
  },
  {
    hSpeed: 14,
    maxHSpeed: 0.12,
    stepSpeed: 2,
    nowSpeed: 0,
    maxSpeed: 44,
    resetHAngle: true,
    levels: [7, 8, 9],
    canInLevel: false
  }
]



let soundSlide;

let soundAround;

let soundBoom;
let soundBip;

let ground;
let groundBody;

let dynamicBodies = [];

let mouse = new THREE.Vector3;
let raycaster = new THREE.Raycaster;

let dataLoaded = false;
let levelLoaded = false;
let menuLoaded = false;

let groundsMas = [];

let groundBlock;
let wallLeft;
let wallRight;

let itsMen;
let itsMenBody;
let itsMenLeftHand;
let itsMenRightHand;
let itsMenLeftLeg;
let itsMenRightLeg;

let menBody;
let menLeftHand;
let menRightHand;
let menLeftLeg;
let menRightLeg;

let jointMenTube;

let allObjCollision = [];
let allWallCollision = [];
let allWallBodyCollision = [];

let targetCube;

let isMobile = detectDevice();
let isIos = isIOS();

let clock = new THREE.Clock();
let timer = new THREE.Clock();
let delta = 0;
let deltaTime;
let interval = 1 / 60;

let bestTime = 0;
let currentTime = 0;

let openLevels = 2;

let playerData;

let tapInstr = 'onStart';


const raycaster1 = new THREE.Raycaster();
const direction1 = new THREE.Vector3(0, -1, 0); // Направление вниз

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xdceef6); //dceef6
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





const dirLightHelper = new THREE.DirectionalLightHelper(dirLight, 10);
//scene.add(dirLightHelper);

const ambientLight = new THREE.AmbientLight(0xaaaaaa, 1); // soft white light
//scene.add(ambientLight);

const camera = new THREE.PerspectiveCamera(85, document.body.offsetWidth / document.body.offsetHeight, 0.1, 310);
camera.position.set(0, 4, -10);

//let stats = new Stats();
//document.body.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer({ antialias: false });

renderer.setSize(document.body.offsetWidth, document.body.offsetHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = false;

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  if (isMobile) {
    camera.aspect = document.body.offsetWidth / document.body.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }
  else {
    camera.aspect = document.body.offsetWidth / document.body.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.body.offsetWidth, document.body.offsetHeight);
  }
}


async function loadStorageData() {

  if (!localStorage.getItem('playerData')) {
    playerData = {
      levelsTimes: {
        // time1: 10.222,
      },
      canStart: false,
      language: 0 //ru
    }
    localStorage.setItem('playerData', JSON.stringify(playerData));
  }
  else {
    playerData = JSON.parse(localStorage.getItem('playerData'))
    languagesBtns.forEach((el) => {
      el.classList.remove('selected');
    })
    // languagesBtns[playerData.language].classList.add('selected');
    // changeLanguage(playerData.language)
    levelsDone = Object.keys(playerData.levelsTimes).length;
    if (levelsDone == levelShadow.length) {
      mainRecord = 0;
      Object.values(playerData.levelsTimes).forEach((el) => {
        mainRecord += parseFloat(el);
      })
      mainRecordText.textContent = convertMilliseconds(Math.round(mainRecord * 1000));
      mainRecordText.classList.add('main_record_green');
    }
  }




  let aaa = JSON.stringify(playerData);

  //levelShadow
  openLevels = 0;

  levelShadow.forEach((el, index) => {
    if (index < Object.keys(playerData.levelsTimes).length + 1) {
      openLevels++;
      el.classList.remove('level_disabled');
    }
  })

  levelsTimesBlock.forEach((value, index, array) => {
    if (playerData.levelsTimes['time' + (index + 1)] != undefined) {
      value.childNodes[2].textContent = playerData.levelsTimes['time' + (index + 1)]

      document.querySelectorAll('.load_level_wrap .ad_res').forEach((el, ind) => {
        if (index == ind || ind == levelsTimesBlock.length - 1) {
          el.classList.add('not_vis');
        }

      })

    }
    else {
      value.childNodes[2].textContent = '00.000';
    }

  })
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
  await gltfLoader.loadAsync(url, onprogress = (e) => {
    // console.log(`Loaded: ${e.loaded}, Total: ${e.total}`);
    let percent = Math.min(Math.round((e.loaded / e.total) * 100), 100);
    loadPercent.textContent = percent + '%';
  }).then((gltf) => {
    const root = gltf.scene;
    loadPercent.textContent = '0';




    root.traverse((el) => {

      if (el.name == 'player') {

        player = el.clone();

        player.userData.vertices = player.geometry.attributes.position.array;
        player.userData.indices = player.geometry.index.array;

        player.material.transparent = true;
        player.material.opacity = 0;
        player.userData.mass = 1;
        player.userData.playerBraking = false;
        player.userData.hTransition = 0;
        player.userData.currentSpeed = 0;
        player.userData.boom = false;

        player.userData.onStartArea = true;

        player.userData.canBoostStep = true;
        // player.userData.hSpeed = 10;
        // player.userData.maxHSpeed = 0.08;
        // player.userData.stepSpeed = 2;
        // player.userData.maxSpeed = 16;

        // player.userData.resetHAngle = false;

        player.userData.time = 0;

        player.userData.right = false;
        player.userData.left = false;

        player.userData.onGround = false;
        player.userData.flying = false;

        player.userData.origPosition = player.position;

        addPhysicsToObject(player)
        scene.add(player);

      }
      else if (el.name.includes('player-tube')) {
        playerTtube = el.clone();
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
        groundBlock = el.clone();


        //groundBlock.position.z = size.z / 2;
        groundBlock.userData.mass = 0;
        addPhysicsToObject(groundBlock);
        allObjCollision.push(groundBlock);
        scene.add(groundBlock);

        if (el.name == 'left_ground_wall') {
          wallLeft = el.position;
        }
        else if (el.name == 'right_ground_wall') {
          wallRight = el.position;
        }
      }
      else if (el.name.includes('wall')) {
        const box = new THREE.Box3().setFromObject(el);
        const size = box.getSize(new THREE.Vector3());
        let wallBlock = el.clone();
        wallBlock.userData.mass = 1;
        addPhysicsToObject(wallBlock);
        allObjCollision.push(wallBlock);
        allWallCollision.push(wallBlock);
        scene.add(wallBlock);
      }
      else if (el.name.includes('area')) {
        let areaBlock = el.clone();
        scene.add(areaBlock);
      }
      else if (el.name.includes('start_flag_en')) {
        startFlagEn = el.clone();

      }
      else if (el.name.includes('start_flag_ru')) {
        startFlagRu = el.clone();

      }
      else if (el.name.includes('itsmen_body')) {
        itsMenBody = el.clone();
        itsMenBody.material.transparent = true;
        itsMenBody.material.opacity = 0.0;
        scene.add(itsMenBody);
        addPhysicsToObject(itsMenBody);
      }
      else if (el.name.includes('itsmen_left_hand')) {
        itsMenLeftHand = el.clone();
        itsMenLeftHand.material.transparent = true;
        itsMenLeftHand.material.opacity = 0.0;
        scene.add(itsMenLeftHand);
        addPhysicsToObject(itsMenLeftHand);
      }
      else if (el.name.includes('itsmen_right_hand')) {
        itsMenRightHand = el.clone();
        itsMenRightHand.material.transparent = true;
        itsMenRightHand.material.opacity = 0.0;
        scene.add(itsMenRightHand);
        addPhysicsToObject(itsMenRightHand);
      }
      else if (el.name.includes('itsmen_left_leg')) {
        itsMenLeftLeg = el.clone();
        itsMenLeftLeg.material.transparent = true;
        itsMenLeftLeg.material.opacity = 0.0;
        scene.add(itsMenLeftLeg);
        addPhysicsToObject(itsMenLeftLeg);
      }
      else if (el.name.includes('itsmen_right_leg')) {
        itsMenRightLeg = el.clone();
        itsMenRightLeg.material.transparent = true;
        itsMenRightLeg.material.opacity = 0.0;
        scene.add(itsMenRightLeg);
        addPhysicsToObject(itsMenRightLeg);
      }
      else if (el.name.includes('qmen_body')) {
        menBody = el.clone();
        scene.add(menBody);
      }
      else if (el.name.includes('qmen_left_hand')) {
        menLeftHand = el.clone();
        scene.add(menLeftHand);
      }
      else if (el.name.includes('qmen_right_hand')) {
        menRightHand = el.clone();
        scene.add(menRightHand);
      }
      else if (el.name.includes('qmen_left_leg')) {
        menLeftLeg = el.clone();
        scene.add(menLeftLeg);
      }
      else if (el.name.includes('qmen_right_leg')) {
        menRightLeg = el.clone();
        scene.add(menRightLeg);
      }

    })

  });
  scene.traverse(function (child) {
    if (child.material) {
      child.material.needsUpdate = true
    }
  })



  await loadStorageData();



  let params = RAPIER.JointData.spherical({ x: 0.2, y: 0.0, z: -0.2 }, { x: -0.4, y: 0.0, z: 0.0 });
  let joint = world.createImpulseJoint(params, itsMenBody.userData.body, itsMenLeftHand.userData.body, true);


  let params2 = RAPIER.JointData.spherical({ x: -0.2, y: 0.0, z: -0.2 }, { x: 0.4, y: 0.0, z: 0.0 });
  let joint2 = world.createImpulseJoint(params2, itsMenBody.userData.body, itsMenRightHand.userData.body, true);

  let params3 = RAPIER.JointData.spherical({ x: 0.22, y: 0.0, z: 0.5 }, { x: 0.0, y: 0.0, z: -0.5 });
  let joint3 = world.createImpulseJoint(params3, itsMenBody.userData.body, itsMenLeftLeg.userData.body, true);

  let params4 = RAPIER.JointData.spherical({ x: -0.22, y: 0.0, z: 0.5 }, { x: 0.0, y: 0.0, z: -0.5 });
  let joint4 = world.createImpulseJoint(params4, itsMenBody.userData.body, itsMenRightLeg.userData.body, true);


  let params0 = RAPIER.JointData.spherical({ x: 0, y: 0.0, z: 0.0 }, { x: 0.0, y: 0.3, z: 0.0 });
  jointMenTube = world.createImpulseJoint(params0, itsMenBody.userData.body, playerBody, true);







  //itsMenBody.userData.body.applyImpulse({ x: 0.0, y: 50, z: 0 }, true);

  menuLoaded = true;

}





async function loadLevel() {

  playerIsFinish = false;

  const gltfLoader = new GLTFLoader();
  const url = 'models/map' + currentLevel + '.glb';
  await gltfLoader.loadAsync(url, onprogress = (e) => {
    let percent = Math.min(Math.round((e.loaded / e.total) * 100), 100);
    loadPercent.textContent = percent + '%';
  }).then((gltf) => {
    const root = gltf.scene;
    loadPercent.textContent = '0';

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
        allWallCollision.push(wallBlock);
        scene.add(wallBlock);
      }
      else if (el.name.includes('moving_block')) {
        const box = new THREE.Box3().setFromObject(el);
        const size = box.getSize(new THREE.Vector3());
        let movingBlock = el.clone();
        movingBlock.userData.size = size;
        movingBlock.userData.mass = 1;
        movingBlock.userData.raycaster = new THREE.Raycaster();
        movingBlock.userData.speed = -el.name.substr(el.name.indexOf("speed") + 6);
        movingBlock.userData.direction = new THREE.Vector3(movingBlock.userData.speed, 0, 0);
        movingBlocks.push(movingBlock);

        addPhysicsToObject(movingBlock);
        //allObjCollision.push(movingBlock);

        allWallCollision.push(movingBlock);
        scene.add(movingBlock);
      }
      else if (el.name.includes('area')) {
        let areaBlock = el.clone();
        scene.add(areaBlock);
      }
      else if (el.name.includes('finish_block')) {
        finishBlock = el.clone();
        scene.add(finishBlock);
      }

    })

  });
  bestTimeBlock.textContent = playerData.levelsTimes['time' + (currentLevel)];
  levelLoaded = true;
}

async function loadAudio() {
  const listener = new THREE.AudioListener();
  camera.add(listener);


  const audioLoader = new THREE.AudioLoader();
  await audioLoader.loadAsync('audio/slide.mp3').then((buffer) => {
    soundSlide = new THREE.PositionalAudio(listener);
    soundSlide.setBuffer(buffer);
    soundSlide.setLoop(true);
    soundSlide.setRefDistance(40);
    soundSlide.setVolume(0.7);
    player.add(soundSlide);
  }).catch((error) => {
    console.error('Ошибка при загрузке аудио:', error);
  });

  await audioLoader.loadAsync('audio/around.mp3').then((buffer) => {
    soundAround = new THREE.PositionalAudio(listener);
    soundAround.setBuffer(buffer);
    soundAround.setLoop(true);
    soundAround.setRefDistance(40);
    soundAround.setVolume(1);
    soundAround.error = false;
    player.add(soundAround);
  }).catch((error) => {
    console.error('Ошибка при загрузке аудио:', error);
  });

  await audioLoader.loadAsync('audio/boom1.mp3').then((buffer) => {
    soundBoom = new THREE.PositionalAudio(listener);
    soundBoom.setBuffer(buffer);
    soundBoom.setLoop(false);
    soundBoom.setRefDistance(40);
    soundBoom.setVolume(0.9);
    soundBoom.error = false;
    player.add(soundBoom);
  }).catch((error) => {
    console.error('Ошибка при загрузке аудио:', error);
  });

  await audioLoader.loadAsync('audio/bip.mp3').then((buffer) => {
    soundBip = new THREE.PositionalAudio(listener);
    soundBip.setBuffer(buffer);
    soundBip.setLoop(false);
    soundBip.setRefDistance(40);
    soundBip.setVolume(0.7);
    soundBip.error = false;
    player.add(soundBip);
  }).catch((error) => {
    console.error('Ошибка при загрузке аудио:', error);
  });


}

document.querySelector('.auth_link').addEventListener('click', () => {
  ysdk.auth.openAuthDialog().then(() => {


    ysdk.isAvailableMethod('leaderboards.setLeaderboardScore').then((el) => {
      canSetLb = el;

      ysdk.getLeaderboards()
        .then(_lb => {
          lb = _lb;

          _lb.getLeaderboardEntries('main', { quantityTop: 3, includeUser: canSetLb, quantityAround: 0 })
            .then(res => {
              // console.log(res);
              document.querySelector('.records_wrap>div').innerHTML = '';
              if (playerData.language == 0) document.querySelector('.need_auth').textContent = 'Вы авторизовались! Можете ставить рекорды!';
              else document.querySelector('.need_auth').textContent = 'You have logged in! You can set records!';
              document.querySelector('.need_auth').classList.add('green');

              res.entries.forEach((el, index) => {
                if (res.userRank == el.rank) {
                  boardMainRecord = convertMilliseconds(el.score);
                  document.querySelector('.records_wrap>div').innerHTML = document.querySelector('.records_wrap>div').innerHTML + '<p class = "main_record_green">' + parseInt(el.rank) + '. ' + convertMilliseconds(el.score) + '</p>'
                }
                else {
                  document.querySelector('.records_wrap>div').innerHTML = document.querySelector('.records_wrap>div').innerHTML + '<p>' + parseInt(index + 1) + '. ' + convertMilliseconds(el.score) + '</p>'
                }

              })

            });

        });
    });
    initPlayer().catch(err => {
      // Ошибка при инициализации объекта Player.
    });
  }).catch(() => {
    // Игрок не авторизован.
  });
})




async function init() {

  await initAllData(true, false)


  if (firststart) {

    YaGames.init().then(ysdk => {
      ysdk.features.LoadingAPI?.ready();

      // console.log(ysdk.environment.i18n.lang);
      ysdk.adv.showFullscreenAdv({
        callbacks: {
          onOpen: function (wasShown) {
            if (soundAround != undefined && soundAround.isPlaying) soundAround.stop();
          },
          onClose: function (wasShown) {

          },
          onError: function (error) {

          }
        }
      })



      if (ysdk.environment.i18n.lang == 'ru' || ysdk.environment.i18n.lang == 'be' || ysdk.environment.i18n.lang == 'kk' || ysdk.environment.i18n.lang == 'uk' || ysdk.environment.i18n.lang == 'uz') {
        languagesBtns[0].classList.add('selected');
        changeLanguage(0);
        playerData.language = 0;
      }
      else { //en
        languagesBtns[1].classList.add('selected');
        changeLanguage(1);
        playerData.language = 1;
      }

      ysdk.isAvailableMethod('leaderboards.setLeaderboardScore').then((el) => {
        canSetLb = el;

        if (canSetLb) {
          document.querySelector('.need_auth').classList.add('hidden_block');
        }

        ysdk.getLeaderboards()
          .then(_lb => {
            lb = _lb;


            _lb.getLeaderboardEntries('main', { quantityTop: 3, includeUser: canSetLb, quantityAround: 0 })
              .then(res => {
                // console.log(res);
                hiddenBlock(mainMenuScreen);

                res.entries.forEach((el, index) => {
                  if (res.userRank == el.rank) {
                    boardMainRecord = el.score;
                    document.querySelector('.records_wrap>div').innerHTML = document.querySelector('.records_wrap>div').innerHTML + '<p class = "main_record_green">' + parseInt(el.rank) + '. ' + convertMilliseconds(el.score) + '</p>'

                  }
                  else {
                    document.querySelector('.records_wrap>div').innerHTML = document.querySelector('.records_wrap>div').innerHTML + '<p>' + parseInt(index + 1) + '. ' + convertMilliseconds(el.score) + '</p>'
                  }

                })

              });

          });
      })





    });

    firststart = false;
  }
  else {
    hiddenBlock(selectLevelScreen);
  }


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



  if (firststart && !isIos) loadAudio();





}

async function resetAllMap() {
  dataLoaded = false;
  levelLoaded = false;
  menuLoaded = false;
  currentTime = 0;
  player.userData.time = 0;
  player.userData.boom = false;

  tubesChars.forEach((tube) => {
    tube.nowSpeed = 0;
  })

  allObjCollision = []
  allWallCollision = []
  dynamicBodies = [];
  groundsMas = [];

  pauseButton.classList.add('hidden_block');
  timesBlock.classList.add('hidden_block');
  speedBlockWrap.classList.add('hidden_block');
  document.querySelector('.audio_button_wrap').classList.remove('hidden_block');

  timer.start();
  timer.elapsedTime = player.userData.time;
  pause = false;

  player.userData.currentSpeed = 0;
  speedBlock.textContent = player.userData.currentSpeed;
  currentTime = 0;
  currentTimeBlock.textContent = currentTime;
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
  //console.log(renderer.info.render);

  // console.log("Number of calls :", renderer.info.render.calls);
  // console.log("Number of Triangles :", renderer.info.render.triangles);


  // if (ysdk != undefined) document.querySelector('.temp-test').textContent = ysdk.environment.i18n.lang;




  if (menuLoaded && !playerIsFinish) {

    if (soundSlide != undefined && canAudio) {
      if (playerBody.linvel().z > 3 && player.userData.onGround) {
        if (!soundSlide.isPlaying) soundSlide.play();
      }
      else {
        if (soundSlide.isPlaying) soundSlide.stop()
      }
    }

    if (isMobile) {
      if (!player.userData.boom) {
        camera.lookAt(new THREE.Vector3(camera.position.x, player.position.y, player.position.z + 5));
        //camera.position.x = player.position.x;
        camera.position.y = player.position.y + 5;
        camera.position.z = player.position.z - 3;
      }
      else {
        camera.lookAt(itsMenBody.position);
        if (soundSlide != undefined) soundSlide.stop();
      }
    }
    else {
      if (!player.userData.boom) {
        camera.lookAt(new THREE.Vector3(camera.position.x, player.position.y, player.position.z + 5));
        //camera.position.x = player.position.x;
        camera.position.y = player.position.y + 4;
        camera.position.z = player.position.z - 4;
      }
      else {
        if (playerTtube.position.y > 0) camera.lookAt(itsMenBody.position);
        if (soundSlide != undefined) soundSlide.stop();
      }
    }
    targetCube.position.set(player.position.x, player.position.y, player.position.z + 5)
  }
  if (dataLoaded) {
    if (!playerIsFinish) {
      currentTime = timer.getElapsedTime().toFixed(3);
      currentTimeBlock.textContent = currentTime;
      playerMove();
      blocksMove();


    }
    else {
      hiddenBlock(finishScreen);
      if (soundSlide != undefined) soundSlide.stop();
    }



    // world.intersectionsWithShape(shapePos, shapeRot, shape, (handle) => {
    //     console.log("The collider", handle, "intersects our shape.");
    //     //return true; // Return `false` instead if we want to stop searching for other colliders that contain this point.
    // });
    //console.log(player.userData.size)
    if (player.position.x > wallLeft.x - player.userData.size.x / 1.3) {
      targetCube.position.x = player.position.x;
      player.userData.hTransition = -0.4;
    }

    if (player.position.x < wallRight.x + player.userData.size.x / 1.3) {
      targetCube.position.x = player.position.x;
      player.userData.hTransition = +0.4;
    }

    let eventQueue = new RAPIER.EventQueue(true);
    world.step(eventQueue);


    tubesMas[tubenum].position.copy(playerBody.translation());
    tubesMas[tubenum].quaternion.copy(playerBody.rotation());

    menBody.position.copy(itsMenBody.position);
    menBody.rotation.copy(itsMenBody.rotation);

    menLeftHand.position.copy(itsMenLeftHand.position);
    menLeftHand.rotation.copy(itsMenLeftHand.rotation);

    menRightHand.position.copy(itsMenRightHand.position);
    menRightHand.rotation.copy(itsMenRightHand.rotation);

    menLeftLeg.position.copy(itsMenLeftLeg.position);
    menLeftLeg.rotation.copy(itsMenLeftLeg.rotation);

    menRightLeg.position.copy(itsMenRightLeg.position);
    menRightLeg.rotation.copy(itsMenRightLeg.rotation);

    for (let i = 0, n = dynamicBodies.length; i < n; i++) {
      dynamicBodies[i][0].position.copy(dynamicBodies[i][1].translation())
      dynamicBodies[i][0].quaternion.copy(dynamicBodies[i][1].rotation())
    }


    eventQueue.drainCollisionEvents((handle1, handle2, started) => {

      allWallBodyCollision.forEach((value, index) => {
        if (playerBody.handle == handle1 && value.handle == handle2 && !playerIsFinish) {

          if (playerBody.linvel().z < 15) {
            if (player.userData.boom == false) {
              if (soundBoom != undefined && canAudio) soundBoom.play();
              world.removeImpulseJoint(jointMenTube);
              itsMenBody.userData.body.applyImpulse({ x: 5.0, y: 5, z: 5 }, true);
              itsMenBody.userData.body.setEnabledRotations(true);
              playerShape.setFriction(20);
              setTimeout(() => {
                dataLoaded = false;
                hiddenBlock(BoomScreen);
              }, 3000);
              ysdk.features.GameplayAPI?.stop()
              player.userData.boom = true;
            }
            //camera.position.set(playerTtube.position); /////
          }
        }
        else if (playerBody.handle == handle1 && !playerIsFinish) {
          if (playerBody.linvel().z < 15 && player.position.y < 5) {
            if (player.userData.boom == false) {
              if (soundBoom != undefined && canAudio) soundBoom.play();
              world.removeImpulseJoint(jointMenTube);
              itsMenBody.userData.body.applyImpulse({ x: 5.0, y: 5, z: 5 }, true);
              itsMenBody.userData.body.setEnabledRotations(true);
              playerShape.setFriction(20);
              ysdk.features.GameplayAPI?.stop()
              player.userData.boom = true;
              setTimeout(() => {
                dataLoaded = false;
                hiddenBlock(BoomScreen);
              }, 3000);
            }
            //camera.position.set(playerTtube.position); /////
          }
        }
      })
    });
  }


  //stats.update();

}

renderer.setAnimationLoop(() => {

  delta += clock.getDelta();

  if (delta > interval && !pause) {
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


function blocksMove() {

  movingBlocks.forEach((value, index) => {

    let movingBlock = value;
    let movingBlockBody = movingBlocksBody[index];

    movingBlockBody.setLinvel(movingBlock.userData.direction, true);
    movingBlockBody.setAngvel({
      x: movingBlock.userData.direction.z,
      y: movingBlock.userData.direction.y,
      z: -movingBlock.userData.direction.x,
    }, true);
    const direction = movingBlock.userData.direction;
    movingBlock.userData.raycaster.set(new THREE.Vector3(movingBlock.position.x, 0.4, movingBlock.position.z), direction.clone().normalize());

    const intersects = movingBlock.userData.raycaster.intersectObjects(allObjCollision);


    if (intersects.length > 0) {
      if (intersects[0].distance < movingBlock.userData.size.x / 2) {
        movingBlock.userData.direction.x = movingBlock.userData.direction.x * -1;
      }
      // let endPoint;

      // const material = new THREE.LineBasicMaterial({
      //   color: 0x0000ff
      // });

      // if (intersects.length>0) {
      //   endPoint = intersects[0].point
      // }
      // else {
      //   endPoint = movingBlock.position.clone().add(direction.clone().multiplyScalar(100))
      // }

      // const points = [new THREE.Vector3(movingBlock.position.x, 0.4, movingBlock.position.z), endPoint];


      // const geometry = new THREE.BufferGeometry().setFromPoints(points);

      // const line = new THREE.Line( geometry, material );
      // scene.add( line );
    }

  })



}

function playerMove() {


  if (player.position.z > finishBlock.position.z && !player.userData.boom) {

    currentTime = timer.getElapsedTime().toFixed(3);

    currentTimeBlock.textContent = currentTime;



    playerIsFinish = true;
    ysdk.features.GameplayAPI?.stop()
    finishScreenTime.textContent = currentTime;
    if (playerData.levelsTimes['time' + (currentLevel)] != undefined) {
      bestTime = playerData.levelsTimes['time' + (currentLevel)];
    }
    else {
      bestTime = 0;

    }

    if (currentTime < bestTime || bestTime == 0) {
      bestTime = currentTime;
      bestTimeBlock.textContent = bestTime;
      playerData.levelsTimes['time' + (currentLevel)] = bestTime;
      levelsDone = Object.keys(playerData.levelsTimes).length;

      if (levelsDone == levelShadow.length) {
        mainRecord = 0;
        Object.values(playerData.levelsTimes).forEach((el) => {
          mainRecord += parseFloat(el);
        })
        mainRecordText.textContent = convertMilliseconds(Math.round(mainRecord * 1000));
        mainRecordText.classList.add('main_record_green');
        // console.log(boardMainRecord)
        // console.log(Math.round(mainRecord * 1000))
        if (canSetLb && Math.round(mainRecord * 1000) < boardMainRecord) {
          // console.log(Math.round(mainRecord * 1000));
          lb.setLeaderboardScore('main', Math.round(mainRecord * 1000)).then(() => {
            // console.log("setNewRec");
            ysdk.getLeaderboards()
              .then(_lb => {
                lb = _lb;
                _lb.getLeaderboardEntries('main', { quantityTop: 3, includeUser: true, quantityAround: 0 })
                  .then(res => {
                    // console.log(res);
                    document.querySelector('.records_wrap>div').innerHTML = '';
                    res.entries.forEach((el, index) => {
                      if (res.userRank == el.rank) {
                        boardMainRecord = el.score;
                        document.querySelector('.records_wrap>div').innerHTML = document.querySelector('.records_wrap>div').innerHTML + '<p class = "main_record_green">' + parseInt(el.rank) + '. ' + convertMilliseconds(el.score) + '</p>'

                      }
                      else {
                        document.querySelector('.records_wrap>div').innerHTML = document.querySelector('.records_wrap>div').innerHTML + '<p>' + parseInt(index + 1) + '. ' + convertMilliseconds(el.score) + '</p>'
                      }

                    })

                  });
              });
          })

        }
        // console.log('mainRecord ' + mainRecord.toFixed(3))
      }

      localStorage.setItem('playerData', JSON.stringify(playerData));
    }

    player.position.z = 0;
  }

  targetCube.position.x += player.userData.hTransition;
  const direction = new THREE.Vector3().subVectors(playerBody.translation(), targetCube.position).normalize();
  const currentVelocity = playerBody.linvel();
  const newVelocity = new THREE.Vector3(
    direction.x * -tubesChars[tubenum].hSpeed, // Устанавливаем скорость по X
    currentVelocity.y,    // Сохраняем текущую скорость по Y
    direction.z * -tubesChars[tubenum].nowSpeed  // Устанавливаем скорость по Z
  );



  if (playerBody.translation().y < 100 && playerBody.translation().y >= 20) {
    tubesChars[tubenum].nowSpeed += 0.05;
    if (playerBody.rotation().x < 0.04) {
      playerBody.setRotation({ w: playerBody.rotation().w, x: 0.04, y: playerBody.rotation().y, z: playerBody.rotation().z })
    }
  }

  if (playerBody.translation().y < 20 && playerBody.translation().y > 1) {
    playerBody.lockRotations(true, true, true, true);
    // if (playerBody.rotation().x < 0.04) {
    //   playerBody.setRotation({ w: playerBody.rotation().w, x: 0.04, y: playerBody.rotation().y, z: playerBody.rotation().z })
    //   playerBody.lockRotations(true, true, true, true);
    // }
  }

  playerBody.setLinvel(newVelocity, true);
  targetCube.lookAt(targetCube.position.x - (player.position.x - targetCube.position.x), targetCube.position.y - (player.position.y - targetCube.position.y), targetCube.position.z - (player.position.z - targetCube.position.z))

  playerBody.setRotation({ w: targetCube.quaternion.w, x: playerBody.rotation().x, y: targetCube.quaternion.y, z: playerBody.rotation().z });
  itsMenBody.userData.body.setRotation({ w: targetCube.quaternion.w, x: playerBody.rotation().x, y: targetCube.quaternion.y, z: playerBody.rotation().z });

  if (menLeftLeg.rotation.y > 0 || menLeftLeg.rotation.y < 0) {
    itsMenLeftLeg.userData.body.setRotation({ w: itsMenLeftLeg.userData.body.rotation().w, x: itsMenLeftLeg.userData.body.rotation().x, y: 0, z: itsMenLeftLeg.userData.body.rotation().z });
  }

  if (menRightLeg.rotation.y > 0 || menRightLeg.rotation.y < 0) {
    itsMenRightLeg.userData.body.setRotation({ w: itsMenRightLeg.userData.body.rotation().w, x: itsMenRightLeg.userData.body.rotation().x, y: 0, z: itsMenRightLeg.userData.body.rotation().z });
  }


  raycaster1.set(player.position, direction1);
  const intersects = raycaster1.intersectObjects(allObjCollision);
  if (intersects.length > 0) {
    if (intersects[0].distance < 0.4) {
      player.userData.flying = false;
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


  if (player.userData.left && player.userData.onGround && !player.userData.onStartArea) {
    if (player.userData.hTransition < 5) player.userData.hTransition += tubesChars[tubenum].maxHSpeed;
    tubesChars[tubenum].nowSpeed -= 0.009;
  }
  if (player.userData.right && player.userData.onGround && !player.userData.onStartArea) {
    if (player.userData.hTransition > -5) player.userData.hTransition -= tubesChars[tubenum].maxHSpeed;
    tubesChars[tubenum].nowSpeed -= 0.009;
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

  if (player.position.z > startFlag.position.z) {
    //playerBody.setEnabledRotations(true, false, false, true);
    //if (player.position.y > 100) playerBody.lockRotations(false, true, true, true);
    if (player.userData.onStartArea == true && isMobile) document.querySelector('.anim_tap_top').classList.add('hidden_block')
    if (player.userData.onStartArea == true && isMobile) document.querySelector('.anim_tap_left').classList.remove('hidden_block')
    if (player.userData.onStartArea == true && isMobile) document.querySelector('.anim_tap_right').classList.remove('hidden_block')
    if (player.userData.onStartArea == true && isMobile) {
      setTimeout(() => {
        document.querySelector('.anim_tap_left').classList.add('hidden_block')
        document.querySelector('.anim_tap_right').classList.add('hidden_block')
      }, 2000)
    }
    player.userData.onStartArea = false;

  }
  else {
    player.userData.onStartArea = true;
    //if (player.position.y > 100) playerBody.lockRotations(true, true, true, true);
  }


}


function onTouchMove(e) {

  if (player.userData.onGround) {

    e = e.changedTouches[0];

    var rect = renderer.domElement.getBoundingClientRect();

    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = - ((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    if (mouse.y > 0 && player.userData.canBoostStep && dataLoaded && player.userData.onStartArea) {
      if (playerBody.linvel().z < tubesChars[tubenum].maxSpeed && playerBody.linvel().y < 5 && playerBody.linvel().y > -5 && !playerIsFinish && tubesChars[tubenum].nowSpeed < tubesChars[tubenum].maxSpeed) {
        //playerBody.applyImpulse({ x: 0.0, y: 0.0, z: tubesChars[tubenum].stepSpeed }, true);
        tubesChars[tubenum].nowSpeed += tubesChars[tubenum].stepSpeed;
      }
    }
    player.userData.canBoostStep = false;

    if (mouse.y < 0.5) {
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




function onTouchEnd(e) {
  player.userData.right = false;
  player.userData.left = false;
  player.userData.canBoostStep = true;
}

function onKeyDown(event) {

  switch (event.code) {
    case 'KeyW':
    case 'ArrowUp':
      if (player.userData.canBoostStep && dataLoaded && player.userData.onStartArea) {
        if (playerBody.linvel().z < tubesChars[tubenum].maxSpeed && playerBody.linvel().y < 5 && playerBody.linvel().y > -5 && !playerIsFinish && tubesChars[tubenum].nowSpeed < tubesChars[tubenum].maxSpeed) {
          //playerBody.applyImpulse({ x: 0.0, y: 0.0, z: tubesChars[tubenum].stepSpeed }, true);
          tubesChars[tubenum].nowSpeed += tubesChars[tubenum].stepSpeed;
        }
      }
      player.userData.canBoostStep = false;

      break;
    case 'KeyS':
    case 'ArrowDown':


      break;
    case 'KeyA':
    case 'ArrowLeft':
      player.userData.left = true;
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
      player.userData.canBoostStep = true;
      break;
    case 'KeyS':
    case 'ArrowDown':

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

    player.userData.size = size;
    player.userData.orgRotation = originalRotation;

    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true, false, false).setLinearDamping(0).setAngularDamping(2.0));
    shape = RAPIER.ColliderDesc.cuboid(size.x / 5, size.y / 1.5, size.z / 3).setMass(obj.userData.mass).setRestitution(0).setFriction(0);
    //shape = RAPIER.ColliderDesc.trimesh(player.userData.vertices, player.userData.indices).setMass(obj.userData.mass).setRestitution(0).setFriction(0);
    playerBody = body;
    playerShape = shape;
    shape.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    playerCollider = world.createCollider(shape, body)
    player.userData.handle = playerBody.handle;
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
    groundCollider = world.createCollider(shape, body)
    groundBody = body;
    groundBlock.userData.handle = groundBody.handle;
    dynamicBodies.push([obj, body, obj.id])
  }
  if (obj.name.includes('wall')) {
    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true, true, false).setLinearDamping(0))
    shape = RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2).setMass(obj.userData.mass * 10).setRestitution(0).setFriction(40);

    let wallCollider = world.createCollider(shape, body)
    allWallBodyCollision.push(wallCollider);
    dynamicBodies.push([obj, body, obj.id])

    // const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.4 });
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.set(obj.position.x, obj.position.y, obj.position.z)
    // cube.rotation.copy(originalRotation);
    //scene.add(cube);
  }
  if (obj.name.includes('moving_block')) {
    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true, true, true, true).setLinearDamping(0))
    shape = RAPIER.ColliderDesc.ball(size.x / 2).setMass(obj.userData.mass * 10).setRestitution(0).setFriction(20);
    let movingBlockBody = body;
    movingBlocksBody.push(movingBlockBody)
    let movingBlockCollider = world.createCollider(shape, body)
    allWallBodyCollision.push(movingBlockCollider);
    dynamicBodies.push([obj, body, obj.id])

    // const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.4 });
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.set(obj.position.x, obj.position.y, obj.position.z)
    // cube.rotation.copy(originalRotation);
    //scene.add(cube);
    //
  }




  if (obj.name.includes('itsmen_body')) {

    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(true, false, true).setLinearDamping(0).setAngularDamping(0));
    shape = RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2).setMass(0).setRestitution(0).setFriction(0).setDensity(2.0);

    itsMenBody.userData.body = body;
    itsMenBody.userData.collider = shape;

    world.createCollider(shape, body)
    dynamicBodies.push([obj, body, obj.id])

  }
  if (obj.name.includes('itsmen_left_hand')) {

    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(false, true, false).setLinearDamping(0).setAngularDamping(0));
    shape = RAPIER.ColliderDesc.capsule(size.z / 2, size.x / 10).setMass(0).setRestitution(0).setFriction(0).setDensity(2.0);
    itsMenLeftHand.userData.body = body;
    itsMenLeftHand.userData.collider = shape;
    world.createCollider(shape, body)
    dynamicBodies.push([obj, body, obj.id])

  }
  if (obj.name.includes('itsmen_right_hand')) {

    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(false, true, false).setLinearDamping(0).setAngularDamping(0));
    shape = RAPIER.ColliderDesc.capsule(size.z / 2, size.x / 10).setMass(0).setRestitution(0).setFriction(0).setDensity(2.0);
    itsMenRightHand.userData.body = body;
    itsMenRightHand.userData.collider = shape;
    world.createCollider(shape, body)
    dynamicBodies.push([obj, body, obj.id])

  }
  if (obj.name.includes('itsmen_left_leg')) {

    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(false, true, false).setLinearDamping(0).setAngularDamping(0));
    shape = RAPIER.ColliderDesc.capsule(size.z / 2, size.x / 10).setMass(0).setRestitution(0).setFriction(0).setDensity(2.0);
    itsMenLeftLeg.userData.body = body;
    itsMenLeftLeg.userData.collider = shape;
    world.createCollider(shape, body)
    dynamicBodies.push([obj, body, obj.id])

  }
  if (obj.name.includes('itsmen_right_leg')) {

    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(false, true, false).setLinearDamping(0).setAngularDamping(0));
    shape = RAPIER.ColliderDesc.capsule(size.z / 2, size.x / 10).setMass(0).setRestitution(0).setFriction(0).setDensity(2.0);
    itsMenRightLeg.userData.body = body;
    itsMenRightLeg.userData.collider = shape;
    world.createCollider(shape, body)
    dynamicBodies.push([obj, body, obj.id])

  }



}




document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === 'visible') {
    noVisible = false;

    if (canAudio && pause == false) {
      if (soundAround != undefined) soundAround.play();
    }
    if (playerBody.linvel().z > 3 && player.userData.onGround && canAudio && pause == false) {
      if (soundSlide != undefined) soundSlide.play();
    }

    if (!playerIsFinish && dataLoaded) {
      if (pause == false) {
        ysdk.features.GameplayAPI?.start()
        timer.start();
        timer.elapsedTime = player.userData.time;
      }
    }

  } else {
    noVisible = true;
    ysdk.features.GameplayAPI?.stop()
    if (soundBip != undefined && soundBip.isPlaying) soundBip.pause();
    if (soundAround != undefined) soundAround.stop();
    if (soundSlide != undefined) soundSlide.stop();
    if (pause == false) {
      if (!playerIsFinish && dataLoaded) {
        player.userData.time = timer.getElapsedTime();
        timer.stop();
      }
    }
  }
});

