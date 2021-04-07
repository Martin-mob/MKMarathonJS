const player1 = {
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['gun', 'sword'],
    attack: function () {
        console.log('Scorpion' + ' ' + 'Fight...');
    }
};


const player2 = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['gun', 'sword'],
    attack: function () {
        console.log('Scorpion' + ' ' + 'Fight...');
    }
};


function createPlayer(player, playerName, imgName) {
    const $player1 = document.createElement('div');
    $player1.classList.add(player);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    $player1.appendChild($progressbar);

    const $character = document.createElement('div');
    $character.classList.add('character');
    $player1.appendChild($character);

    const $life = document.createElement('div');
    $life.style.width = '100%';
    $life.classList.add('life');

    $progressbar.appendChild($life);
    
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerName;
    $progressbar.appendChild($name);

    const $img = document.createElement('img');
    $img.src = `http://reactmarathon-api.herokuapp.com/assets/${imgName}.gif`;
    $character.appendChild($img);

    const $arenas = document.querySelector('.arenas');
    $arenas.appendChild($player1);
}

createPlayer('player1', 'SONYA', 'sonya' , 50);
createPlayer('player2', 'SCORPION', 'scorpion', 80);