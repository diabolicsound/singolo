const MENU = document.getElementById('menu');
const SECMENU = document.getElementById('secmenu');
const THIRDMENU = document.getElementById('firstunord')
const BUTTON = document.getElementById('fsubmit');
const CLOSE_BUTTON = document.getElementById('close-btn');
const SLI_CONT = document.getElementById('rbut');
const a = SECMENU.querySelectorAll('img')


document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const pos = window.scrollY;
  const sections = document.querySelectorAll('#wrapper section');
  const links =  document.querySelectorAll('.firstul  a');

  sections.forEach((element) => {
    if (element.offsetTop - 100 <= pos && (element.offsetTop + element.offsetHeight) > pos) {
      links.forEach((link) => {
        link.classList.remove('active');
        if (element.getAttribute('id') == link.getAttribute('href').substring(1)) {
         link.classList.add('active');
        }
      })
  }})
}




document.getElementById('navbarul').addEventListener('click', (event) => {
     document.getElementById('check-nav').checked = false;
}) 

SECMENU.addEventListener('click', (event) => {
  SECMENU.querySelectorAll('img').forEach(element => element.classList.remove('active2'));
  event.target.classList.add('active2');
})


THIRDMENU.addEventListener('click', (event) => {
    THIRDMENU.querySelectorAll('a').forEach(element =>element.classList.remove('active3'));
    event.target.classList.add('active3');
    let img = SECMENU.getElementsByTagName('img');
    let vari = '';
    for (let i = 0; i < img.length - 1; i++) {
        vari = img[i].src;
        img[i].src = img[i + 1].src;
        img[i + 1].src = vari;
    }
})


BUTTON.addEventListener('click', (event) => {
    let name = 0;
    let subject = 0;
    if (document.getElementById('fname').value !== "" && document.getElementById('femail').value !== "") {
    (document.getElementById('fsubject').value) == "" ?  name = "Без темы":name = "Тема:" + document.getElementById('fsubject').value;
    (document.getElementById('fdetails').value) == "" ?  subject = "Без описания":subject = "Описание:" + document.getElementById('fdetails').value;
    document.getElementById('result').innerText = name;
    document.getElementById('result2').innerText = subject;
    document.getElementById('message-block').classList.remove('hidden');
    event.preventDefault();
  }
});



CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('result').innerText = '';
    document.getElementById('form').reset();
    document.getElementById('message-block').classList.add('hidden');
});


let arr = Array.prototype.slice.call(SECMENU.querySelectorAll('li'));

let items = document.querySelectorAll('.phones')
let currentItem = 0;
let isEnabled = true;

  function changeCurrentItem (n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function() {
      this.classList.remove('activesli', direction);
    })
}

function showItem(direction) {
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener('animationend', function(){
      this.classList.remove(direction);
      this.classList.add('activesli');
        isEnabled = true
    })
}

function previousItem(n) {
    hideItem('to-left');
    changeCurrentItem(n - 1);
    showItem('from-right');
}

function nextItem(n) {
    hideItem('to-left');
    changeCurrentItem(n + 1);
    showItem('from-left');
}

document.querySelector('.lbutton').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
})

document.querySelector('.rbutton').addEventListener('click', function() {
    if (isEnabled) {
        nextItem(currentItem);
    }
})


document.getElementById('az').addEventListener('click', () => {
    if (document.getElementById('hidscr').classList.contains('hiddenscreen')) {
        document.getElementById('hidscr').classList.replace ('hiddenscreen', 'activehidscr')
    }
    else {
    document.getElementById('hidscr').classList.replace ('activehidscr', 'hiddenscreen');
}});

document.getElementById('az2').addEventListener('click', () => {
    if (document.getElementById('hidscr2').classList.contains('hiddenscreen')) {
        document.getElementById('hidscr2').classList.replace ('hiddenscreen', 'activehidscr')
    }
    else {
    document.getElementById('hidscr2').classList.replace ('activehidscr', 'hiddenscreen');
}});

