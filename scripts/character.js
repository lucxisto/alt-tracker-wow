import {character} from './cadastro.js'


export default function showCharacter(){
    const divForm = document.getElementById('interativity');
    divForm.innerHTML = '';
    const characterName = document.createElement('input');
    const characterFaction = document.createElement('input');
    const characterGenre = document.createElement('input');
    const characterRace = document.createElement('input');
    const characterLevel = document.createElement('input');
    characterName.value = `${character.name}`;
    characterFaction.value = `${character.faction}`;
    characterGenre.value = `${character.genre}`;
    characterRace.value = `${character.race}`;
    characterLevel.value = `${character.level}`;
    divForm.appendChild(characterName);
    divForm.appendChild(characterFaction);
    divForm.appendChild(characterGenre);
    divForm.appendChild(characterRace);
    divForm.appendChild(characterLevel);
}