'use strict';

const container = document.querySelector('.container');
const goodbtn = document.querySelector('.good-button');
const evilbtn = document.querySelector('.evil-button');

const contacts = [
  {
    name: 'Raquel',
    phone: '915552323',
    email: 'raquel@inbox.com',
  },
  {
    name: 'Pedro',
    phone: '915554564',
    email: 'pedro@inbox.com',
  },
  {
    name: 'Laura',
    phone: '915555656',
    email: 'raquel@inbox.com',
  },
];

const evilContacts = [
  {
    name: 'Raquel2',
    phone: '915552323',
    email: 'raquel@inbox.com',
  },
  {
    name: 'Pedro2',
    phone: '915554564',
    email: 'pedro@inbox.com',
  },
  {
    name: 'Laura2',
    phone: '915555656',
    email: 'raquel@inbox.com',
  },
];

function writeCriaturas(arr) {
  let content = '';
  content = '<ul>';
  for (const item of arr) {
    content += `<li>
                  <div>${item.name}</div>
                  <div>${item.email}</div>
                </li>`;
  }
  content += '</ul>';

  container.innerHTML = content;
}

function goodFunction() {
  writeCriaturas(contacts);
}
function evilFunction() {
  writeCriaturas(evilContacts);
}

goodbtn.addEventListener('click', goodFunction);
evilbtn.addEventListener('click', evilFunction);

