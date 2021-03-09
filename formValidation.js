'use strict';

let errorCounter = 0;

function validateDevs(focus = false) {
  let d = document.forms.f1.devs.value;
  if (!d) {
    errorCounter++;
    document.querySelector('#devsErrors').innerHTML =
      'Поле не должно быть пустым';
    if (focus == true) {
      document.querySelector('#devs').focus();
    }
  } else {
    document.querySelector('#devsErrors').innerHTML = '';
  }
  return errorCounter;
}

function validateSiteName(focus = false) {
  let field = document.forms.f1.sitename.value;
  if (!field) {
    errorCounter++;
    document.querySelector('#sitenameErrors').innerHTML =
      'Поле не должно быть пустым';
    if (focus == true) {
      document.querySelector('#sitename').focus();
    }
  } else {
    document.querySelector('#sitenameErrors').innerHTML = '';
  }
  return errorCounter;
}

function validateSiteUrl(focus = false) {
  const exp = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regexURL = new RegExp(exp);
  let field = document.forms.f1.siteurl.value;
  if (!field || !field.match(regexURL)) {
    errorCounter++;
    document.querySelector('#siteUrlErrors').innerHTML =
      'Поле не должно быть пустым и должно содержать URL';
    if (focus == true) {
      document.querySelector('#siteurl').focus();
    }
  } else {
    document.querySelector('#siteUrlErrors').innerHTML = '';
  }
  return errorCounter;
}

function validateEmail(focus = false) {
  const exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexEmail = new RegExp(exp);
  let field = document.forms.f1.email.value;

  if (!field || !field.match(regexEmail)) {
    errorCounter++;
    document.querySelector('#emailErrors').innerHTML =
      'Поле не должно быть пустым и должно содержать валидный e-mail адрес';
    if (focus == true) {
      document.querySelector('#email').focus();
    }
  } else {
    document.querySelector('#emailErrors').innerHTML = '';
  }
}

function validateDate(focus = false) {
  let field = document.forms.f1.launched.value;
  let today = new Date();
  let launchDate = new Date(field);
  if (launchDate > today) {
    errorCounter++;
    document.querySelector('#launchedErrors').innerHTML =
      'Дата запуска не должна быть в будущем';
    if (focus == true) {
      document.querySelector('#launched').focus();
    }
  } else {
    document.querySelector('#launchedErrors').innerHTML = '';
  }
}

function validateOnSumbmit() {
  errorCounter = 0;
  validateDate(true);
  validateEmail(true);
  validateSiteUrl(true);
  validateSiteName(true);
  validateDevs(true);
  console.log(`Number of errors: ${errorCounter}`);
  if (errorCounter) {
    event.preventDefault();
  }
}

document.forms.f1.devs.addEventListener('blur', validateDevs);
document.forms.f1.sitename.addEventListener('blur', validateSiteName);
document.forms.f1.siteurl.addEventListener('blur', validateSiteUrl);
document.forms.f1.email.addEventListener('blur', validateEmail);
document.forms.f1.launched.addEventListener('blur', validateDate);
document.forms.f1.addEventListener('submit', validateOnSumbmit);
