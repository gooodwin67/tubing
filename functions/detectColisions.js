export function detectCollisionCubes(object1, object2) {
 object1.geometry.computeBoundingBox();
 object2.geometry.computeBoundingBox();
 object1.updateMatrixWorld();
 object2.updateMatrixWorld();
 let box1 = object1.geometry.boundingBox.clone();
 box1.applyMatrix4(object1.matrixWorld);
 let box2 = object2.geometry.boundingBox.clone();
 box2.applyMatrix4(object2.matrixWorld);

 //if (box1.intersectsBox(box2)) $('.info').text(1);
 return box1.intersectsBox(box2);
}

export function detectCollisionCubeAndArray(object1, array) {
 object1.geometry.computeBoundingBox();

 array.forEach(function (item, index, array) {

  if (item.children.length > 0) {

   item.children.forEach(function (item, index, array) {
    item.geometry.computeBoundingBox();
   })
  }
  else {
   item.geometry.computeBoundingBox();
  }
 });

 object1.updateMatrixWorld();
 array.forEach(function (item, index, array) {
  item.updateMatrixWorld();
 });

 let box1 = object1.geometry.boundingBox.clone();
 box1.applyMatrix4(object1.matrixWorld);

 var intersect = false;

 array.forEach(function (item, index, array) {
  if (item.children.length > 0) {
   item.children.forEach(function (item, index, array) {
    let box2 = item.geometry.boundingBox.clone();
    box2.applyMatrix4(item.matrixWorld);

    if (box1.intersectsBox(box2)) {
     intersect = item;
    }
   })
  }
  else {
   let box2 = item.geometry.boundingBox.clone();
   box2.applyMatrix4(item.matrixWorld);

   if (box1.intersectsBox(box2)) {
    intersect = item;
   }
  }

 });
 return intersect;

}

export function detectDevice() {
 let isMobile = window.matchMedia || window.msMatchMedia;
 if (isMobile) {
  let match_mobile = isMobile("(pointer:coarse)");
  return match_mobile.matches;
 }
 return false;
}

export function convertToMilliseconds(seconds) {
 // Разделяем целую и дробную часть
 const wholeSeconds = Math.floor(seconds); // целая часть (секунды)
 const milliseconds = Math.round((seconds - wholeSeconds) * 1000); // дробная часть (миллисекунды)

 // Переводим секунды в миллисекунды и добавляем миллисекунды
 return (wholeSeconds * 1000) + milliseconds;
}

export function convertMilliseconds(ms) {
    // Преобразуем миллисекунды в секунды
    const totalSeconds = ms / 1000;

    // Получаем целое количество секунд
    const seconds = Math.floor(totalSeconds);

    // Получаем миллисекунды
    const milliseconds = Math.floor((totalSeconds - seconds) * 1000);

    // Преобразуем секунды в минуты и оставшиеся секунды
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    // Форматируем результат
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;

    return formattedTime;
}