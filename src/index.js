import './style.css';
import { htmlPage } from './page';
import { getAll, create } from './service';
import GameScore from './game-score';

htmlPage();

const btnRefresh = document.querySelector('button');
const tableBody = document.querySelector('tbody');
const form = document.querySelector('#formId');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const name = formData.get('name');
  const score = formData.get('score');
  const gameScore = new GameScore(name, score);
  await create(gameScore);
  form.reset();
});

btnRefresh.addEventListener('click', async (e) => {
  e.preventDefault();

  const gameScores = await getAll();
  const scores = gameScores.result;
  scores.forEach((score) => {
    const row = document.createElement('tr');
    const td = document.createElement('td');
    td.appendChild(document.createTextNode(`${score.user} : ${score.score}`));
    row.appendChild(td);
    tableBody.appendChild(row);
  });
});
