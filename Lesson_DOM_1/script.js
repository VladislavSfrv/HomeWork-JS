// let blockEl = document.querySelector('#block');
// console.log(blockEl);

// // Дан тег 
// // <a class="link" href="#">link text html</a>
// // Вам необходимо поменять текст внутри ссылки на “link text js”
// // Заменить href, на значение https://developer.mozilla.org/ru/

// let linkEl = document.querySelector('.link');
// linkEl.textContent = 'link text js';
// linkEl.href = 'https://developer.mozilla.org/ru/';
// console.log(linkEl);

// // Дан тег <img class="photo" src="" alt="">
// // Вам необходимо с помощью js поменять значение src на любое изображение из интернета

// const photoEl = document.querySelector('.photo');
// //.src = 'https://a4files.ru/content/uploads/2017/05/YA.jpg';
// console.log(photoEl);

// // Дан тег <div class="content"></div>
// // Создайте новый элемент p
// // Добавьте в него текст “Новый текстовый элемент”

// const divEl = document.querySelector('.content');
// const pEl = document.createElement('p');
// pEl.textContent = 'Новый тестовый элемент';
// divEl.appendChild(pEl);

// // Добавьте созданный элемент внутри <div class="content"></div>
// // Удалите добавленный узел

// pEl.remove();

// // Создать элемент button, добавить в блок <div class="content"></div>
// // При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

// const buttonEl = document.createElement('button');
// buttonEl.textContent = 'Нажми на меня';
// divEl.appendChild(buttonEl);
// let count = 1;
// buttonEl.onclick = function(){
//     alert(`Вы нажали на кнопку ${count} раз`);
//     count++;
// }

// const newButtonEl = document.createElement('button');
// newButtonEl.textContent = 'Отправить';
// divEl.appendChild(newButtonEl);
// newButtonEl.onclick = function(){
//     newButtonEl.textContent = 'Текст отправлен';
// }

// 1. Найти по id, используя getElementById, 
// элемент с id равным "super_link" и вывести этот элемент в консоль.

const getIdSuperLink = document.getElementById('super_link');
console.log(getIdSuperLink);

// 2. Внутри всех элементов на странице, 
// которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".

const cardLinkEl = document.querySelectorAll('.card-link');
for (let i = 0; i < cardLinkEl.length; i++) {
    cardLinkEl[i].textContent = 'ссылка';    
}

// 3. Найти все элементы на странице с классом "card-link", 
// которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.

const cardBodyEl = document.querySelector('.card-body');
const cardLinkElInCardBody = cardBodyEl.querySelectorAll('.card-link');
console.log(cardLinkElInCardBody);

// 4. Найти первый попавшийся элемент 
// на странице у которого есть атрибут data-number со значением 50 и вывести его в консоль.

const dataElement = document.querySelector('[data-number="50"]');
console.log(dataElement);

// 5. Выведите содержимое тега title в консоль.

const titleEl = document.querySelector('title');
console.log(titleEl);

// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.

const cardTitleEl = document.querySelector('.card-title');
console.log(cardTitleEl.parentNode);

// 7. Создайте тег p`, запишите внутри него текст 
// "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".

const pEl = document.createElement('p');
pEl.textContent = 'Привет';
const cardEl = document.querySelector('.card');
cardEl.appendChild(pEl);

// 8. Удалите тег h6 на странице.

document.querySelector('h6').remove();