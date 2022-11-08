// difficulty arrays
const allNotes = ['A','B','C','D','E','F','G','A♯','C♯','D♯','F♯','G♯','A♭','B♭','D♭','E♭','G♭'];
const naturalNotes = allNotes.slice(0, 7);
const sharpNotes = allNotes.slice(7, 12);
const flatNotes = allNotes.slice(12);

// buttons & input
const natural = document.querySelector('.natural');
const sharps = document.querySelector('.sharps');
const flats = document.querySelector('.flats');
const all = document.querySelector('.all');
const bpm = document.querySelector('.bpm');
const single = document.querySelector('.single');
const allStrings = document.querySelector('.allstrings');
const quit = document.querySelector('.quit');
const note = document.querySelector('.note');

// countdown bars
const leftbar = document.querySelector('.leftbar');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const e = document.querySelector('.e');
const f = document.querySelector('.f');
const g = document.querySelector('.g');
const h = document.querySelector('.h');
const rightbar = document.querySelector('.rightbar');

// default
let queue = naturalNotes;
bpm.value = 40;

// calibration
natural.addEventListener('click', ()=> {
  queue = naturalNotes;
});
sharps.addEventListener('click', ()=> {
  queue = sharpNotes;
});
flats.addEventListener('click', ()=> {
  queue = flatNotes;
});
all.addEventListener('click', ()=> {
  queue = allNotes;
});

// controls
single.addEventListener('click', ()=> {
  const time = (60000 / parseInt(bpm.value)) / 11;
  const startInteval = setInterval(() => {
    note.innerHTML = queue[Math.floor(Math.random() * queue.length)];
    resetBars();
  }, 60000 / parseInt(bpm.value));
  setInterval(() => {
    setTimeout(() => {
      leftbar.style.opacity = 0;
      leftbar.style.transition = '.2s'
    }, time);
    setTimeout(() => {
      a.style.opacity = 0;
      a.style.transition = '.2s'
    }, time * 2);
    setTimeout(() => {
      b.style.opacity = 0;
      b.style.transition = '.2s'
    }, time * 3);
    setTimeout(() => {
      c.style.opacity = 0;
      c.style.transition = '.2s'
    }, time * 4);
    setTimeout(() => {
      d.style.opacity = 0;
      d.style.transition = '.2s'
    }, time * 5);
    setTimeout(() => {
      e.style.opacity = 0;
      d.style.transition = '.2s'
    }, time * 6);
    setTimeout(() => {
      f.style.opacity = 0;
      f.style.transition = '.2s'
    }, time * 7);
    setTimeout(() => {
      g.style.opacity = 0;
      g.style.transition = '.2s'
    }, time * 8);
    setTimeout(() => {
      h.style.opacity = 0;
      h.style.transition = '.2s'
    }, time * 9);
    setTimeout(() => {
      rightbar.style.opacity = 0;
      rightbar.style.transition = '.2s'
    }, time * 10);
  }, 60000 / parseInt(bpm.value));
  quit.addEventListener('click', ()=> {
    clearInterval(startInteval);
  })
})
allStrings.addEventListener('click', ()=> {
  
})


function resetBars() {
  leftbar.style.opacity = 1;
  a.style.opacity = 1;
  b.style.opacity = 1;
  c.style.opacity = 1;
  d.style.opacity = 1;
  e.style.opacity = 1;
  f.style.opacity = 1;
  g.style.opacity = 1;
  h.style.opacity = 1;
  rightbar.style.opacity = 1;
}