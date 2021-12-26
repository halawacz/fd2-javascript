function buildForm(fd, fe) {
  fd.forEach((el) => {
    let l = document.createElement('span');
    l.innerHTML = el.label;
    fe.appendChild(l);
    fe.setAttribute('method', 'POST');
    fe.setAttribute('action', 'https://fe.it-academy.by/TestForm.php');
    if (el.kind == 'longtext') {
      let lt = document.createElement('input');
      lt.type = 'text';
      lt.name = el.name;
      fe.appendChild(lt);
    } else if (el.kind == 'number') {
      let n = document.createElement('input');
      n.type = 'number';
      fe.appendChild(n);
      n.name = el.name;
    } else if (el.kind == 'shorttext') {
      let st = document.createElement('input');
      st.type = 'text';
      fe.appendChild(st);
      st.name = el.name;
    } else if (el.kind == 'combo') {
      let f = document.createElement('select');
      for (i = 0; i < el.variants.length; i++) {
        let opt = document.createElement('option');
        opt.value = el.variants[i].value;
        opt.innerHTML = el.variants[i].text;
        f.appendChild(opt);
      }
      fe.appendChild(f);
    } else if (el.kind == 'radio') {
      for (i = 0; i < el.variants.length; i++) {
        let fLabel = document.createElement('label');
        fLabel.innerHTML = el.variants[i].text;
        fe.appendChild(fLabel);
        let f = document.createElement('input');
        f.setAttribute('type', 'radio');
        f.value = el.variants[i].value;
        f.name = el.name;
        fe.appendChild(f);
      }
    } else if (el.kind == 'check') {
      let f = document.createElement('input');
      f.type = 'checkbox';
      f.name = el.name;
      fe.appendChild(f);
    } else if (el.kind == 'memo') {
      let m = document.createElement('textarea');
      m.name = el.name;
      m.setAttribute('rows', '10');
      m.setAttribute('cols', '40');
      fe.appendChild(m);
    } else if (el.kind == 'submit') {
      let s = document.createElement('input');
      s.setAttribute('type', 'submit');
      s.name = el.name;
      fe.appendChild(s);
    }
  });
}

var formDef1 = [
  { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
  { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
  { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
  { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
  {
    label: 'Рубрика каталога:',
    kind: 'combo',
    name: 'division',
    variants: [
      { text: 'здоровье', value: 1 },
      { text: 'домашний уют', value: 2 },
      { text: 'бытовая техника', value: 3 },
    ],
  },
  {
    label: 'Размещение:',
    kind: 'radio',
    name: 'payment',
    variants: [
      { text: 'бесплатное', value: 1 },
      { text: 'платное', value: 2 },
      { text: 'VIP', value: 3 },
    ],
  },
  { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
  { label: 'Описание сайта:', kind: 'memo', name: 'description' },
  { label: 'Опубликовать:', kind: 'submit' },
];

var formDef2 = [
  { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
  { label: 'Имя:', kind: 'longtext', name: 'firstname' },
  { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
  { label: 'Возраст:', kind: 'number', name: 'age' },
  { label: 'Зарегистрироваться:', kind: 'submit' },
];

buildForm(formDef1, document.forms.f1);
buildForm(formDef2, document.forms.f2);
