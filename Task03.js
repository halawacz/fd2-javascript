const user = {
  firstName: '',
  lastName: '',
  patronymicName: '',
  genderIsMale: false,
  ageYears: 0,
  isRetired: false,
};

user.firstName = prompt('Введите ваше имя и нажмите ENTER: ');
while (user.firstName === '' || user.firstName == null) {
  user.firstName = prompt('Введите ваше имя и нажмите ENTER: ');
}

user.lastName = prompt('Введите вашу фамилию и нажмите ENTER: ');
while (user.lastName === '' || user.lastName == null) {
  user.lastName = prompt('Введите вашу фамилию и нажмите ENTER: ');
}

user.patronymicName = prompt('Введите ваше отчество и нажмите ENTER: ');
while (user.patronymicName === '' || user.patronymicName == null) {
  user.patronymicName = prompt('Введите ваше отчество и нажмите ENTER: ');
}

if (confirm('Ваш пол мужской?')) {
  user.genderIsMale = true;
} else {
  user.genderIsMale = false;
}

user.ageYears = Number(
  prompt('Введите ваш возраст в годах (в числовом формате) и нажмите ENTER: ')
);
while (isNaN(user.ageYears) || user.ageYears == 0) {
  user.ageYears = Number(
    prompt('Введите ваш возраст в годах (В ЧИСЛОВОМ ФОРМАТЕ) и нажмите ENTER: ')
  );
}
if (user.genderIsMale && user.ageYears >= 65) {
  user.isRetired = true;
} else if (user.genderIsMale == false && user.ageYears >= 60) {
  user.isRetired = true;
} else {
  user.isRetired = false;
}
console.log(user.firstName);
console.log(user.lastName);
console.log(user.patronymicName);
console.log(`${user.genderIsMale ? 'Мужской' : 'Женский'}`);
console.log(`user is retired: ${user.isRetired}`);
console.log(user.ageYears);

alert(
  'Ваше ФИО: ' +
    user.lastName +
    ' ' +
    user.firstName +
    ' ' +
    user.patronymicName +
    '\n' +
    'Ваш возраст в годах: ' +
    user.ageYears +
    '\n' +
    'Ваш возраст в днях: ' +
    user.ageYears * 365 +
    '\n' +
    'Через пять лет вам будет: ' +
    (user.ageYears + 5) +
    '\n' +
    'Ваш пол: ' +
    user.gender +
    '\n' +
    `Вы на пенсии: ${user.isRetired ? 'Да' : 'Нет'}`
);
