import API from './api.js';
import Character from './character.js';
let currentCharacter = 1;
const api = new API();

const $loadNext = document.querySelector('#load-next');

$loadNext.addEventListener('click', async () => {
  document.querySelector('.preloader').classList.add('active');
  setTimeout(() => {
    document.querySelector('.preloader').classList.remove('active');
  }, 1000);
  const characterData = await api.getCharacter(++currentCharacter);
  new Character(characterData);
  window.scrollTo(0, 0);
});

async function initialApp(initCharacterId) {
  const characterData = await api.getCharacter(initCharacterId);
  new Character(characterData);
}

initialApp(currentCharacter);
