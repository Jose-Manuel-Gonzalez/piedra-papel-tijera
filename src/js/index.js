// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const pcPickedElement = document.getElementById('pc-picked');
const resultElement = document.getElementById('game-result');
const gameResultsElement = document.getElementById('game-results');
const pointsUserElement = document.getElementById('points-user');
const pointsPcElement = document.getElementById('points-pc');
const pickedUserImageElement = document.getElementById('picked-user-image');
const pickedPcImageElement = document.getElementById('picked-pc-image');
const modalElement = document.getElementById('modal');
const buttonRulesElement = document.getElementById('button-rules');

const gameItemsElement = document.getElementById('game-items'); // Asegúrate de que este ID exista en tu HTML

const gameOptions = ['rock', 'paper', 'scissors'];

let userSelection = null;
let pcSelection = null;
let userPoints = 0;
let pcPoints = 0;

const gameRules = {
  rock: {
    paper: false,
    scissors: true
  },
  paper: {
    rock: false,
    scissors: true
  },
  scissors: {
    rock: true,
    paper: false
  }
};

const updateScore = () => {
  // Necesitas definir esta función
  pointsUserElement.textContent = userPoints;
  pointsPcElement.textContent = pcPoints;
};

const checkWinner = () => {
  console.log(userSelection + '---' + pcSelection);
  if (userSelection === pcSelection) {
    console.log('TIE');
    return;
  }

  if (gameRules[userSelection][pcSelection]) {
    console.log('WIN');
    userPoints++;
  } else {
    console.log('LOSE');
    pcPoints++;
  }
  updateScore();
};

const generateRandomPlay = () => {
  const randomNumber = Math.floor(Math.random() * gameOptions.length);
  pcSelection = gameOptions[randomNumber];
  checkWinner();
};

const setUserSelection = selection => {
  userSelection = selection;
  generateRandomPlay();
};

gameItemsElement.addEventListener('click', event => {
  if (!event.target.classList.contains('game-item')) return;
  setUserSelection(event.target.dataset.item);
});
