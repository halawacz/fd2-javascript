var formDef2 = [
  { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
  { label: 'Имя:', kind: 'longtext', name: 'firstname' },
  { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
  { label: 'Возраст:', kind: 'number', name: 'age' },
  { label: 'Зарегистрироваться:', kind: 'submit' },
];
document.body.onload(iter(formDef2));
function iter(arr) {
  var form = document.createElement('form');
  form.setAttribute('method', 'GET');
  form.setAttribute('action', 'https://fe.it-academy.by/TestForm.php');
  arr.map(function (e) {
    var field = document.createElement(input);
    field.setAttribute('type', e.kind);
    field.setAttribute('name', e.name)
    form.append(field);
  });
  var s = document.createElement("input");
  s.setAttribute("type", "submit");
  s.setAttribute("value", "Submit");
  form.append(s);
  document.getElementsByTagName('body')[0].appendChild(form);
}

console.log(iter(formDef2));

