// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

const parseData = JSON.parse(data);
console.log(parseData);

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const divContentEl = document.querySelector('.content');
parseData.forEach(item => {
    divContentEl.insertAdjacentHTML('beforeend', `
        <h1>Имя - ${item.name}</h1>
        <p>Почтовый адрес - ${item.email}</p>
        <span>Ширина - ${item.address.geo.lat}</span>
        <span>Долгота - ${item.address.geo.lng}</span>
        `);
});