// /* <div class="block">

// </div>
// Дан блок, внутри него необходимо создать элемент div с классом item, 
// разместить текст “Элемент внутри” и задать стили
// Цвет текста синий
// Рамка сплошная черная
// Цвет фона #f8f8f8
// Внутренний отступ 16px
// Добавить данному блоку класс item_1 (использовать setAttribute) */

// const divElItem = document.createElement('div');
// const divElBlock = document.querySelector('.block');
// divElItem.textContent = 'Элемент внутри';
// divElItem.setAttribute('class', 'item');
// divElBlock.appendChild(divElItem);
// divElItem.style.color = 'blue';
// divElItem.style.border = '1px solid black';
// divElItem.style.padding = '16px';
// divElItem.style.backgroundColor = '#f8f8f8';
// divElItem.setAttribute('class', 'item_1');

// // Дан код
// // <div class="elem">
// // <img src="photo.png" alt="photo">
// // <div class="content">
// // <h2 class="heading">Lorem, ipsum dolor.</h2>
// // <p class="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, ea!</p>
// // </div>
// // </div>

// // Необходимо с помощью querySelector найти параграф с классом text
// // Вывести в консоль соседний элемент h2
// // Вывести в консоль родительский элемент content
// // Вывести в консоль картинку
// // Вывести в консоль родительский элемент elem

// const pElText = document.querySelector('.text');
// console.log(pElText.previousElementSibling);
// console.log(pElText.parentElement);
// console.log(pElText.parentElement.previousElementSibling);
// console.log(pElText.parentElement.previousElementSibling.parentElement);

// // С помощью querySelector найти элемент h2 и вывести в консоль всех его родителей

// const h2El = document.querySelector('.subtitle');

// console.log(h2El.parentElement);
// console.log(h2El.parentElement.parentElement);
// console.log(h2El.parentElement.parentElement.parentElement);
// console.log(h2El.parentElement.parentElement.parentElement.parentElement);

// // Дано поле ввода и кнопка отправить, необходим реализовать функционал, 
// // если пользователь нажимает на кнопку отправить, 
// // а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 
// // с текстом вы не заполнили поле ввода
// // Цвет у рамки сделать красным

// const h2ElInput = document.createElement('h2');
// const buttonElBtn = document.querySelector('.btn');
// const inputEl = document.querySelector('input')
// h2ElInput.textContent = "Вы не заполнили поле ввода";
// h2ElInput.style.border = '1px solid red';
// buttonElBtn.addEventListener('click', (event) => {
//     event.preventDefault()
//     if (inputEl.value.trim() === '') {
//         document.querySelector('form').appendChild(h2ElInput);
//     } else {
//         console.log(inputEl.value);
//     }
// });

// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown",
//  необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownItemEl = document.querySelectorAll('.dropdown-item');

let count = 0;
dropdownItemEl.forEach(() => {
    dropdownItemEl[count].classList.add('super-dropdown');
    //console.log(dropdownItemEl[count]);
    count++;
});
count = 0;
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", 
// если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.

const btnEl = document.querySelectorAll('.btn');

btnEl.forEach(() => {
    if (btnEl[count].classList.contains('btn-secondary')) {
        btnEl[count].classList.remove('btn-secondary');
    } else {
        btnEl[count].classList.add('btn-secondary');
    }
    //console.log(btnEl[count]);
});

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuEl = document.querySelector('.menu');
menuEl.classList.remove('dropdown-menu');
// console.log(menuEl);

// 4. Используя метод insertAdjacentHTML добавьте после 
// div' a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divElDropdown = document.querySelector('div.dropdown');
divElDropdown.insertAdjacentHTML('afterend', '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".


const idElDropdownMenuButton = document.getElementById('dropdownMenuButton');
idElDropdownMenuButton.setAttribute('id', 'superDropdown');
//console.log(idElDropdownMenuButton);

// 6. Добавьте атрибут data-dd со значением 3 элементу 
// у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const ariaLabelledby = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
ariaLabelledby.dataset.dd = 3;
//console.log(ariaLabelledby);

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropdowntoggleEl = document.querySelector('.dropdown-toggle');
dropdowntoggleEl.removeAttribute('type');
//console.log(dropdowtoggleEl);