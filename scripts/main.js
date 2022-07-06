import register from "./cadastro.js";
import showCharacter from "./character.js"

document.addEventListener('DOMContentLoaded', loadMenu);

console.log(showCharacter);
function loadMenu(){
    const divButton = document.getElementById('buttons');
    const imageNewCharacter = document.createElement('img');
    imageNewCharacter.setAttribute('src','images/icons/newchar.png');
    imageNewCharacter.setAttribute('alt','Novo Personagem');
    imageNewCharacter.setAttribute('id','imgnew');
    imageNewCharacter.addEventListener('click', register);
    const imageCharacter = document.createElement('img')
    imageCharacter.setAttribute('src','images/icons/wow-orc-icon100.png');
    imageCharacter.setAttribute('alt','Meus Personagem');
    imageCharacter.setAttribute('id','imgchars');
    imageCharacter.addEventListener('click', showCharacter);
    const buttonRegister = document.getElementById('imgwow');
    const buttonCharacter = document.getElementById('imgchars');
    divButton.appendChild(imageNewCharacter);
    divButton.appendChild(imageCharacter)
}
