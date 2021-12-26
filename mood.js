'use strict';

function pickRandom(n, m) {
  return Math.floor(Math.random() * (m - n + 1)) + n;
}

function uniqueColorSequence(colorsCount) {
  const colors = [
    //'',
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

  const result = new Set();

  while (result.size < colorsCount) {
    result.add(colors[pickRandom(0, colors.length - 1)]);
  }

  console.log('цветов: ' + colorsCount);
  result.forEach((e) => console.log(e));
}

uniqueColorSequence(1);
uniqueColorSequence(5);
uniqueColorSequence(7);
uniqueColorSequence(8);


