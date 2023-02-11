'use strict';

const userName = document.querySelector('.name');
const userRole = document.querySelector('.role');
const randomBtn = document.querySelector('.btn');
const imgSection = document.querySelector('.image-cls');
const userInfo = document.querySelector('.paragraph'); 
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const img = document.querySelector('.profile-img');

const users = [
    {
        alt: 'profile',
        img: './img/man_1.png',
        _name: 'John Doe',
        role: 'Frontend Developer',
        info: 'John Doe is a Frontend Developer that does his work well, mixing creativity into his work extremely well',
    },
    {
        alt: 'profile',
        img: './img/businessman.png',
        _name: 'Keagen Anderson',
        role: 'Designer',
        info: 'Keagen Anderson is a designer that has a lot of ceativity and does his job really well',
    },
    {
        alt: 'profile',
        img: './img/man.png',
        _name: 'Andrew Jeffery',
        role: 'Project Manager',
        info: 'Andrew Jeffery is a project manager who oversees the development cycle and makes any adjustments necesarry',
    },
    {
        alt: 'profile',
        img: './img/woman.png',
        _name: 'Jessica Collins',
        role: 'Backend Deveoper',
        info: 'Jessica Collins is one of the best backend developers we have got that makes the best backend data handling stuff',
    },
    {
        alt: 'profile',
        img: './img/bussiness-man.png',
        _name: 'Chris Topher Hitchens',
        role: 'Manager',
        info: 'This is Chris Hitchens, one of the best of the best, a very great guy that does his job extremely well',
    },
    {
        alt: 'profile',
        img: './img/man_2.png',
        _name: 'Chris Topher',
        role: 'Systems Engineer',
        info: 'Christ Topher is one of the best of the best in his field, one of the best in the world, and boy oh boy does he do his job well',
    },
];

function update(idx) {
    img.src = users[idx].img;
    img.alt = users[idx].alt;

    userName.textContent = users[idx]._name;
    userRole.textContent = users[idx].role;
    userInfo.textContent = users[idx].info;
}

function updateInfo() {
    let idx = 0;
    update(idx);
    next.addEventListener('click', () => {
        if (idx >= users.length - 1) idx = 0;
        else ++idx;
        update(idx);
    });

    prev.addEventListener('click', () => {
        if (idx <= 0) idx = users.length - 1;
        else idx--;
        update(idx);
    });

    randomBtn.addEventListener('click', () => {
        let i = Math.floor(Math.random() * users.length);
        update(i);
    });
}

updateInfo();