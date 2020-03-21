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
  const sections = document.querySelectorAll('#wrapper .lol');
  const links =  document.querySelectorAll('.firstul  a');

  sections.forEach((element) => {
    if (element.offsetTop <= pos && (element.offsetTop + element.offsetHeight) > pos) {
      links.forEach((link) => {
        link.classList.remove('active');
        if (element.getAttribute('id') === link.getAttribute('href').substring(1)) {
         link.classList.add('active');
        }
      })
  }})
}




SECMENU.addEventListener('click', (event) => {
    SECMENU.querySelectorAll('img').forEach(element => element.classList.remove('active2'));
    event.target.classList.add('active2');
}) 


THIRDMENU.addEventListener('click', (event) => {
    THIRDMENU.querySelectorAll('a').forEach(element =>element.classList.remove('active3'));
    event.target.classList.add('active3');
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

  document.getElementById('firstunord').addEventListener('click', () => {{
    document.getElementById('pi1').classList.contains('r1') == true ?  document.getElementById('pi1').classList.replace ('r1', 'r5') 
    : document.getElementById('pi1').classList.replace ('r5', 'r3');
    
  if (document.getElementById('pi1').classList.contains('r3')) {
    document.getElementById('pi1').classList.replace ('r3', 'r2')
  }
 
  else if (document.getElementById('pi1').classList.contains('r2')) {
    document.getElementById('pi1').classList.replace ('r2', 'r4')
  }
  else if (document.getElementById('pi1').classList.contains('r4')) {
    document.getElementById('pi1').classList.replace ('r4', 'r1')
  }

    document.getElementById('pi2').classList.contains('r1') == true ?  document.getElementById('pi2').classList.replace ('r1', 'r4') 
    : document.getElementById('pi2').classList.replace ('r4', 'r2');

    if (document.getElementById('pi2').classList.contains('r2')) {
        document.getElementById('pi2').classList.replace ('r2', 'r3')
      }
      else if (document.getElementById('pi2').classList.contains('r3')) {
        document.getElementById('pi2').classList.replace ('r3', 'r1')
      }

    document.getElementById('pi3').classList.contains('r1') == true ?  document.getElementById('pi3').classList.replace ('r1', 'r3') 
    : document.getElementById('pi3').classList.replace ('r3', 'r5')

  if (document.getElementById('pi3').classList.contains('r5')) {
    document.getElementById('pi3').classList.replace ('r5', 'r1')
  }

  else if (document.getElementById('pi3').classList.contains('r1')) {
    document.getElementById('pi3').classList.replace ('r1', 'r3')
  }
  else if (document.getElementById('pi1').classList.contains('r3')) {
    document.getElementById('pi1').classList.replace ('r3', 'r2')
  }

  document.getElementById('pi4').classList.contains('r1') == true ?  document.getElementById('pi4').classList.replace ('r1', 'r5') 
    : document.getElementById('pi4').classList.replace ('r5', 'r1')
  }})



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
    hideItem('to-right');
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
        previousItem(currentItem);
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

