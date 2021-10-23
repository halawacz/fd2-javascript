'use strict';

// Проверка на пустое поле
function validateDevs(focus = false) {
  let d = document.forms.f1.devs.value;
  let errorCounter = 0;

  if (!d) {
    errorCounter++;
    document.querySelector('#devsErrors').innerHTML =
      'Поле не должно быть пустым';
    document.forms.f1.devs.setAttribute('invalid', 'true');
    if (focus == true) {
      document.querySelector('#devs').focus();
    }
  } else {
    document.querySelector('#devsErrors').innerHTML = '';
  }
  return errorCounter;
}

// Проверка на пустое поле
function validateSiteName(focus = false) {
  let errorCounter = 0;
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

// Проверка на пустое поле или на поле не являющееся URL (паттерн в константе exp)
function validateSiteUrl(focus = false) {
  let errorCounter = 0;
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

// Проверка на пустое поле или на поле не являющееся Email (паттерн в константе exp)
function validateEmail(focus = false) {
  let errorCounter = 0;
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
  return errorCounter;
}

function validateSelectSection(focus = false) {
  let errorCounter = 0;
  let field = document.querySelector('#selectSection').value;

  if (field == 0) {
    errorCounter++;
    document.querySelector('#selectSectionErrors').innerHTML =
      'Выберите значение';
  } else {
    document.querySelector('#selectSectionErrors').innerHTML = '';
  }
  return errorCounter;
}

// Дата запуска вебсайта не может быть задана ранее 06.08.1991 (первый вебсайт, ограничена c помощью аттрибута min) и не может находиться в будущем
function validateDate(focus = false) {
  let errorCounter = 0;
  let field = document.forms.f1.launched.value;
  let today = new Date();
  let launchDate = new Date(field);

  if (!field || launchDate > today) {
    errorCounter++;
    document.querySelector('#launchedErrors').innerHTML =
      'Введите дату создания. Дата не должна быть в будущем';
    if (focus == true) {
      document.querySelector('#launched').focus();
    }
  } else {
    document.querySelector('#launchedErrors').innerHTML = '';
  }
  return errorCounter;
}

// Проверка на пустое поле или на поле не являющееся числом
function validateVisitors(focus = false) {
  let errorCounter = 0;
  let field = document.forms.f1.visitors.value;

  if (!field || isNaN(field)) {
    errorCounter++;
    document.querySelector('#visitorsErrors').innerHTML =
      'Поле не должно быть пустым и должно содержать число';
    if (focus == true) {
      document.querySelector('#visitors').focus();
    }
  } else {
    document.querySelector('#visitorsErrors').innerHTML = '';
  }

  return errorCounter;
}

// Проверка на то что одна из кнопок выбрана
function validateHosting(focus = false) {
  let errorCounter = 0;
  let checked1 = document.querySelector('#free').checked;
  let checked2 = document.querySelector('#paid').checked;
  let checked3 = document.querySelector('#vip').checked;

  if (!(checked1 || checked2 || checked3)) {
    errorCounter++;
    document.querySelector('#hostingErrors').innerHTML =
      'Выберите тип хостинга';

      if (focus == true) {
      document.querySelector('#free').focus();
  } else {
    document.querySelector('#hostingErrors').innerHTML = '';
  }
  return errorCounter;
}
}

// проверка checkbox - отзывы должны быть разрешены
function validateReviews(focus = false) {
  let errorCounter = 0;
  let field = document.querySelector('#allowReviews').checked;

  if (!field) {
    errorCounter++;
    document.querySelector('#allowReviewsErrors').innerHTML =
      'Отзывы должны быть разрешены';
      if (focus == true) {
      document.querySelector('#allowReviews').focus();
  } else {
    document.querySelector('#allowReviewsErrors').innerHTML = '';
  }
  return errorCounter;
}
}

// проверка описания - поле не должно быть пустым
function validateDescription(focus = false) {
  let errorCounter = 0;
  let field = document.querySelector('#description').value;

  if (!field) {
    errorCounter++;
    document.querySelector('#descriptionErrors').innerHTML =
      'Поле не должно быть пустым';
    if (focus == true) {
      document.querySelector('#description').focus();
    }
  } else {
    document.querySelector('#descriptionErrors').innerHTML = '';
  }
  return errorCounter;
}

// функция перечисляет функции по валидации отдельных элементов формы в порядке обратном тому в котором они находятся в html документе (для фокусировки на первом поле с ошибкой)
function validateOnSubmit() {
  let errorCounter = 0;

  validateDevs(errorCounter);
  validateDescription(errorCounter);
  validateReviews(errorCounter);
  validateHosting(errorCounter);
  validateVisitors(errorCounter);
  validateDate(errorCounter);
  validateSelectSection(errorCounter);
  validateEmail(errorCounter);
  validateSiteUrl(errorCounter);
  validateSiteName(errorCounter);
  
  console.log(errorCounter);

  if (errorCounter !== 0) {
    event.preventDefault();
  }
}

document.forms.f1.devs.addEventListener('blur', validateDevs);
document.forms.f1.sitename.addEventListener('blur', validateSiteName);
document.forms.f1.siteurl.addEventListener('blur', validateSiteUrl);
document.forms.f1.email.addEventListener('blur', validateEmail);
document.forms.f1.selectSection.addEventListener(
  'change',
  validateSelectSection
);
document.forms.f1.launched.addEventListener('change', validateDate);
document.forms.f1.visitors.addEventListener('blur', validateVisitors);
document.querySelector('#free').addEventListener('change', validateHosting);
document.querySelector('#paid').addEventListener('change', validateHosting);
document.querySelector('#vip').addEventListener('change', validateHosting);
document.forms.f1.allowReviews.addEventListener('change', validateReviews);
document.forms.f1.description.addEventListener('blur', validateDescription);
document.forms.f1.addEventListener('submit', validateOnSubmit);