'use strict';

function pickRandom(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

function uniqueColorSequence(colorsCount) {
  const colors = [
    'красный',
    'оранжевый',
    'жёлтый',
    'зелёный',
    'голубой',
    'синий',
    'фиолетовый',
  ];

  if (colorsCount > colors.length) {
    console.error(
      'Невозможно создать неповторяющуюся последовательность цветов заданной длинны!'
    );
    return;
  }

  let used = {};
  let result = [];
  let count = 0;

  while (count < colorsCount) {
    const c = colors[pickRandom(0, colors.length - 1)];
    if (!(c in used)) {
      used[c] = true;
      result.push(c);
      count++;
    }
  }
  console.log('цветов: ' + colorsCount);
  result.forEach((e) => console.log(e));
}

uniqueColorSequence(1);
uniqueColorSequence(5);
uniqueColorSequence(7);
uniqueColorSequence(8);
