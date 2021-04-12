const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Sonya',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['gun', 'sword'],
    attack: function (name) {
        console.log(name + ' ' + 'Fight...');
    }
};

const player2 = {
    player: 2,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['gun', 'sword'],
    attack: function (name) {
        console.log(name + ' ' + 'Fight...');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(obj) {
    const $player1 = createElement('div', 'player' + obj.player);
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $img = createElement('img');

    $life.style.width = obj.hp + '%';
    $name.innerText = obj.name;
    $img.src = obj.img;
   
    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    return $player1;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    let randomHP = Math.ceil(Math.random() * 10);

    player.hp -= randomHP;
    $playerLife.style.width = player.hp + '%';

    console.log(player.hp);
    
    if (player.hp <= 0) {
        $randomButton.disabled = true;
        $arenas.appendChild(playerLose(player.name));
    }
}



function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}

$randomButton.addEventListener('click', function() {
    console.log('####: Click');
    changeHP(player1);
    changeHP(player2);
})

$arenas.appendChild(createPlayer( player1));
$arenas.appendChild(createPlayer( player2));

