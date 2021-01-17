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
user.ageYears = prompt(
  "Введите ваш возраст в годах (в числовом формате) и нажмите ENTER: "
);
while (isNaN(user.ageYears)) {
  user.ageYears = prompt(
    "Введите ваш возраст в годах (В ЧИСЛОВОМ ФОРМАТЕ) и нажмите ENTER: "
  );
}

console.log(user.firstName);
console.log(user.lastName);
console.log(user.isRetired);
console.log(user.ageYears);
