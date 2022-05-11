

let players = [];

const addPlayer = (e) => {
    e.preventDefault();

    let player = {

    firstName : document.getElementById('firstName').value,
    lastName : document.getElementById('lastName').value,
    country : document.getElementById('country').value,
    score :   document.getElementById('score').value,
    }

    players.push(player);
    document.forms[0].reset();

    console.warn('added' , {player});

    console.log(players);


}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addPlayer);
})

