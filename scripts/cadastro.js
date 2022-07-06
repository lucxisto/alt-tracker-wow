

export default function register(){
    //gerando o campo nome
    const formCad = document.getElementById('interativity');
    const btCadastro = document.getElementById('imgnew');
    createName(formCad);
    createFaction(formCad);
    createRace(formCad);    
    createGenre(formCad);
    createLevel(formCad);
    createConfirm(formCad);
    //desativando o botão de novo personagem
    console.log(btCadastro);
    btCadastro.removeEventListener('click', register)
}
function createName(formCad){
    const paragraphName = document.createElement('p');
    paragraphName.innerHTML = 'Nome '
    const inputName = document.createElement('input');
    inputName.setAttribute('type','text');
    inputName.setAttribute('id','inputname');
    paragraphName.appendChild(inputName);
    formCad.appendChild(paragraphName);
}
function createFaction(formCad){
    const paragraphFaction = document.createElement('p');
    paragraphFaction.innerHTML = 'Facção '
    const selectfaction = document.createElement('select');
    selectfaction.setAttribute('id','selectfaction');
    paragraphFaction.appendChild(selectfaction);
    formCad.appendChild(paragraphFaction);
    const optionFaction = ['teste| ', 'a|Aliança','h|Horda'];
    optionFaction.forEach(function(value, index){
        const [value1,value2] = value.split('|');
        let newOption = document.createElement('option');
        if(index == 0){
            newOption.setAttribute('selected',true);
        }
        newOption.value = value1;
        newOption.innerHTML = value2;
        selectfaction.options.add(newOption);
    })
    selectfaction.setAttribute('onchange', 'preencheRaca()');
}
function createRace(formCad){
    let paragraphRace = document.createElement('p');
    paragraphRace.innerHTML = 'Raça ';
    var selectRace = document.createElement('select');
    selectRace.setAttribute('id','selectrace')
    paragraphRace.appendChild(selectRace);
    formCad.appendChild(paragraphRace);
}
function preencheRaca(){
    const selectFaccao = document.getElementById('selectfaction').value;
    const selectRace = document.getElementById('selectrace');
    selectRace.innerHTML = '';
    const objectFaction = {
        a: [' | ','human|Humano','dwarf|Anão', 'nelf|Elfo Noturno', 'gnome|Gnomo', 'draenei|Draenei', 'worg|Worgen', 'panda|Pandaren','celf|Elfo Caótico', 'lighforged|Draenei Forjado na Luz', 'ironswarf|Anão Ferro Negro', 'kultiren|Humano Kultireno', 'mechagnome|Gnomecânico'], 
        h: [' | ', 'orc|Orc','undead|Morto-Vivo','tauren|Tauren', 'troll|Troll', 'belf|Elfo Sangrento', 'goblin|Goblin', 'panda|Pandaren','nightborn|Elfo Filho da noite', 'highmountain|Tauren Altamontês', "maghar|Orc Mag'har", 'zandalari|Troll Zandalari', 'vulpera|Vulpera' ]
    }
    const raceselect = objectFaction[selectFaccao]
    raceselect.forEach(function(valor, index){
        const [value,text] = valor.split('|');
        const newoption = document.createElement('option');
        if(index == 0){
            newoption.setAttribute('selected', true);
        }
        newoption.value = value;
        newoption.innerHTML = text;
        selectRace.options.add(newoption);
    })
    
}
function createGenre(formCad){
    const paragraphGenre = document.createElement('p');
    paragraphGenre.innerHTML = 'Sexo';
    const selectGenre = document.createElement('select');
    selectGenre.setAttribute('id', 'selectgenre');
    paragraphGenre.appendChild(selectGenre);
    formCad.appendChild(paragraphGenre);
    const genreOptions = [' | ', 'm|Masculino', 'f|Feminino'];
    genreOptions.forEach(function(value,index){
        const [valor1, valor2] = value.split('|');
        const newoption = document.createElement('option');
        if(index == 0){
            selectGenre.setAttribute('selected', true);
        }
        newoption.value = valor1;
        newoption.innerHTML = valor2;
        selectGenre.options.add(newoption);
    })
}
function createLevel(formCad){
    const paragraphLevel = document.createElement('p');
    paragraphLevel.innerHTML = 'Nível';
    const inputLevel = document.createElement('input');
    inputLevel.setAttribute('type','number');
    inputLevel.setAttribute('id','inputlevel');
    paragraphLevel.appendChild(inputLevel);
    formCad.appendChild(paragraphLevel);
}
function createConfirm(formCad){
    const buttonRegister = document.createElement('input');
    buttonRegister.setAttribute('type','button');
    buttonRegister.setAttribute('value','Criar');
    buttonRegister.setAttribute('onclick','saveInfo()');
    formCad.appendChild(buttonRegister);
}
function saveInfo(){
    const character = {
        name: document.getElementById('inputname').value,
        faction: document.getElementById('selectfaction').value,
        race: document.getElementById('selectrace').value,
        genre: document.getElementById('selectgenre').value,
        level: document.getElementById('inputlevel').value
    }
    return character;
}
