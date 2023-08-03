import './style.css';
import './assets/github.svg';
import './assets/linkedin.svg';
import './assets/medal.svg';
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
refreshBtn.onclick = displayData;