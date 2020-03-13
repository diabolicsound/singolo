const MENU = document.getElementById('menu');
const SECMENU = document.getElementById('secmenu');
const THIRDMENU = document.getElementById('firstunord')
const BUTTON = document.getElementById('fsubmit');
const CLOSE_BUTTON = document.getElementById('close-btn');



MENU.addEventListener('click', (event) => {
    MENU.querySelectorAll('a').forEach(element =>element.classList.remove('active'));
    event.target.classList.add('active');
})


SECMENU.addEventListener('click', (event) => {
    SECMENU.querySelectorAll('img').forEach(element => element.classList.remove('active2'));
    event.target.classList.add('active2');
}) 


THIRDMENU.addEventListener('click', (event) => {
    THIRDMENU.querySelectorAll('a').forEach(element =>element.classList.remove('active3'));
    event.target.classList.add('active3');
})


BUTTON.addEventListener('click', () => {
    let name = 0;
    let subject = 0;
    (document.getElementById('fname').value) == "" ?  name = "Без темы":name = "Тема:" + document.getElementById('fname').value;
    (document.getElementById('fsubject').value) == "" ?  subject = "Без описания":subject = "Описание:" + document.getElementById('fsubject').value;
    document.getElementById('result').innerText = name;
    document.getElementById('result2').innerText = subject;
    document.getElementById('message-block').classList.remove('hidden');
});



CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
})