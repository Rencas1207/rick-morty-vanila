import API from './api.js';
import Character from './character.js';
let currentCharacter = 1;
const api = new API();

// const $characterContainer = document.querySelector('#character-container');
const $loadNext = document.querySelector('#load-next');

$loadNext.addEventListener('click', async () => {
  const characterData = await api.getCharacter(++currentCharacter);
  // console.log(characterData);
  new Character(characterData);
});

async function initialApp(initCharacterId) {
  const characterData = await api.getCharacter(initCharacterId);
  // console.log(characterData);
  new Character(characterData);
}

initialApp(currentCharacter);
