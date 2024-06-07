// // В html создать кнопку button
// // После загрузки страницы вывести в консоль текст “страница загрузилась”
// // Добавить событие onclick которое выводит в консоль текст “событие onclick”
// // Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// // const button = document.createElement('button');
// const bodyEl = document.querySelector('.body');
// // button.textContent = "Нажми на меня";
// // bodyEl.appendChild(button);
// // window.onload = () => {
// //     console.log('Страница загружена');
// // }

// // button.onclick = () => {
// //     console.log('Событие onclick');
// // };

// // button.addEventListener('click', () => {
// //     console.log('Событие addEventListener');
// // });

// // Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// // Добавить клик на кнопку , 
// // чтобы в консоль выводилась именно та кнопка на которую мы нажали
// // Добавить кнопку button с текстом 4, 
// // которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// // Создать кнопку button с текстом 5, При клике на которую, 
// // меняется текст данной кнопки на “Вы нажали на эту кнопку”

// // for (let i = 1; i < 4; i++) {
// //     bodyEl.insertAdjacentHTML('beforeend', `<button>Кнопка ${i}</button>`);
// // }

// // const allButtonEl = document.querySelectorAll('button');
// // allButtonEl.forEach(element => {
// //     element.addEventListener('click', (event) => {
// //         console.log(event.target);
// //     });
// // });

// // bodyEl.insertAdjacentHTML('beforeend', '<button class = "counter">Кнопка 4</button>');
// // const buttonCounter = document.querySelector('.counter');

// // let count = 1;
// // buttonCounter.addEventListener('click', (event) => {
// //     console.log(`Вы нажали на кнопку ${count} раз`);
// //     count++;
// // });

// // bodyEl.insertAdjacentHTML('beforeend', '<button id = "5">Кнопка 5</button>');
// // const button5 = document.getElementById('5');
// // button5.addEventListener('click', (event) => {
// //     button5.textContent = 'Вы нажали на эту кнопку';
// // });

// // Создать кнопку, которая добавляем заголовок h1 с текстом, “Новый заголовок, 
// // данный элемент нужно расположить после кнопки
// // Создать вторую кнопку, которая будет удалять созданный заголовок h1
// // Создать третью кнопку, при наведении на которую в консоль будет выводиться текст 
// // “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, 
// // в консоли должен появиться текст “Наведения на кнопку больше нет”

// // const btn = document.createElement('button');
// // btn.textContent = 'Кнопка 1';
// // bodyEl.appendChild(btn);
// // btn.addEventListener('click', (event) => {
// //     // bodyEl.insertAdjacentHTML('beforeend', '<h1> Новый заголовок</h1>');
// //     const h1El = document.createElement('h1');
// //     h1El.textContent = 'Новый заголовок';
// //     bodyEl.appendChild(h1El);
// // })

// // const btn2 = document.createElement('button');
// // btn2.textContent = 'Кнопка 2';
// // bodyEl.appendChild(btn2);
// // btn2.addEventListener('click', (event) => {
// //     document.querySelector('h1').remove();
// // })

// // const btn3 = document.createElement('button');
// // btn3.textContent = 'Кнопка 3';
// // bodyEl.appendChild(btn3);
// // btn3.addEventListener('mouseover', () => {
// //     console.log('Вы навели на кнопку');
// // })
// // btn3.addEventListener('mouseleave', () => {
// //     console.log('Вы убрали мышку');
// // })

// // Создать в html список состоящий из 3-х произвольных элементов li
// // Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// // Создать кнопку, которая будет удалять первый элемент из созданного списка
// // Создать кнопку, при клике на которую ей добавляется класс “click”

// const btnAddLi = document.createElement('button');
// btnAddLi.textContent = 'Добавить элемент';
// bodyEl.appendChild(btnAddLi);
// const ulEl = document.createElement('ul');
// bodyEl.appendChild(ulEl);
// for (let i = 1; i < 4; i++) {
//     ulEl.insertAdjacentHTML('afterbegin', '<li> Элемент</li>');
// }
// btnAddLi.addEventListener('click', () => {
//     ulEl.insertAdjacentHTML('beforeend', '<li>Новый элемент списка</li>');
// })

// const btnRemoveLi = document.createElement('button');
// btnRemoveLi.textContent = 'Удалить элемент';
// bodyEl.appendChild(btnRemoveLi);
// btnRemoveLi.addEventListener('click', () => {
//     document.querySelector('li').remove();
// })

// const btnAddClass = document.createElement('button');
// btnAddClass.textContent = 'Добавить класс';
// bodyEl.appendChild(btnAddClass);
// btnAddClass.addEventListener('click', () => {
//     btnAddClass.setAttribute('class', 'click');
//     console.log(btnAddClass);
// })

// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", 
// когда все теги будут созданы браузером.

document.addEventListener('DOMContentLoaded', () => {
    console.log('Все теги загрузились');
})

// 2. Необходимо вывести сообщение в консоль "страница загрузилась", 
// когда все ресурсы страницы будут загружены.

window.onload = () => {
    console.log('Страница загрузилась');
}

// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - сообщение должно определять присутствует или отсутствует класс "super_element"
// - у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
// - которому был совершен клик.
// - Необходимо использовать делегирование.

document.addEventListener('click', (event) => {
    if(event.target.className === 'super_element'){
        console.log(`Класс 'super_element, присутствует в теге "${event.target.localName}"`);
    }else{
        console.log(`Класс 'super_element, отсутствует в теге "${event.target.localName}"`);
    }
})

// 4. Сделайте, 
// чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."

document.querySelector('textarea').addEventListener('mouseover', () => {
    console.log('Вы навели на "textarea"')
})

// 5. Необходимо повесить событие клика на тег ul. 
// В обработчике события в консоль необходимо выводить текст, 
// который записан внутри элемента кнопки, 
// по которой был произведен клик. Если клик был не по кнопке, 
// то ничего выводить не нужно. Необходимо использовать делегирование.

const ulEl = document.querySelector('ul');
ulEl.addEventListener('click', (event) => {
    console.log(event.target.innerText);
})

// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.

// Это обусловленно тем, что в 3 задании мы получаем событие по всей странице. 

// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.

const liElAll = document.querySelectorAll('li');
for (let i = 0; i < liElAll.length; i++) {
    if (i % 2 === 0) {
        liElAll[i].style.backgroundColor = 'red';
    }
}