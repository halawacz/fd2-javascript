//Домашнее задание ANKETA
"use strict";

class User {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.patronymicName = "";
    this.ageYears;
    this.gender = "";
    this.isRetired = false;
  }
}

var user = new User();

user.firstName = prompt("Введите ваше имя и нажмите ENTER: ", [""]);
user.lastName = prompt("Введите вашу фамилию и нажмите ENTER: ");
user.patronymicName = prompt("Введите ваше отчество и нажмите ENTER: ");
if (confirm("Ваш пол мужской?")) {
  user.gender = "мужской";
} else {
  user.gender = "женский";
}

user.ageYears = Number(
  prompt("Введите ваш возраст в годах (в числовом формате) и нажмите ENTER: ")
);
while (isNaN(user.ageYears)) {
  user.ageYears = prompt(
    "Введите ваш возраст в годах (В ЧИСЛОВОМ ФОРМАТЕ) и нажмите ENTER: "
  );
}
if (user.gender == "мужской" && user.ageYears >= 65) {
  user.isRetired = true;
} else if (user.gender == "женский" && user.ageYears >= 60) {
  user.isRetired = true;
} else {
  user.isRetired = false;
}
console.log(user.firstName);
console.log(user.lastName);
console.log(user.patronymicName);
console.log(user.gender);
console.log("user is retired: " + user.isRetired);
console.log(user.ageYears);

alert(
  "Ваше ФИО: " +
    user.lastName +
    " " +
    user.firstName +
    " " +
    user.patronymicName +
    "\n" +
    "Ваш возраст в годах: " +
    user.ageYears +
    "\n" +
    "Ваш возраст в днях: " +
    user.ageYears * 365 +
    "\n" +
    "Через пять лет вам будет: " +
    (user.ageYears + 5) +
    "\n" +
    "Ваш пол: " +
    user.gender +
    "\n" +
    `Вы на пенсии: ${user.isRetired ? "Да" : "Нет"}`
);
