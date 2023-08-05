import './style.css';
import './assets/github.svg';
import './assets/linkedin.svg';
import './assets/medal.svg';
import './assets/bg.jpg';
import './assets/winner.png';
import './assets/user.png';
import './assets/refresh.png';
import './assets/first.png';
import './assets/second.png';
import './assets/third.png';

import 'bootstrap';
import displayData from './modules/displayData.js';
import postScores from './modules/postScores.js';

const formBtn = document.querySelector('.formBtn');

formBtn.addEventListener('click', (ev) => {
  ev.preventDefault();

  const form = document.getElementById('form');
  const user = form.user.value;
  const score = form.score.value;
  postScores(user, score);
  form.reset();
});

const refreshBtn = document.querySelector('#refreshBtn');
const successMess = document.querySelector('.successMess');

refreshBtn.addEventListener('click', () => {
  refreshBtn.style.display = 'none';

  setTimeout(() => {
    refreshBtn.style.display = 'inline';
    refreshBtn.style.transform = 'rotate(360deg)';
    refreshBtn.style.transition = 'all 2s ease-in-out';
    successMess.textContent = '';
    displayData();
  }, 100);
});

window.onload = displayData;