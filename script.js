document.querySelector('#menu-button').addEventListener('click', () => {
    let menu = document.querySelector('.header ul');
    let btn = document.querySelector('#menu-button');

    if(btn.innerText === 'MENU') {
        menu.style.display = 'block';
        btn.innerText = 'CLOSE'
    } else {
        menu.style.display = 'none';
        btn.innerText = 'MENU';
    }
});

let projects = document.querySelectorAll('.projects .project');
let proNum = 0;

document.querySelector('#right-btn').addEventListener('click', () => {
    displayNone();
    proNum++

    if(proNum === projects.length) {
        proNum = 0;
    };

    projects[proNum].style.display = 'block';
});

document.querySelector('#left-btn').addEventListener('click', () => {
    displayNone();
    proNum--

    if(proNum === -1) {
        proNum = pictures.length -1;
    }

    projects[proNum].style.display = 'block';
});

const displayNone = () => {
    projects.forEach((pro) => {
        pro.style.display = 'none'
    })
}
