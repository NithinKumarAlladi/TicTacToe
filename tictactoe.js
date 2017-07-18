
var isPlayer1Turn = true;

var table = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];

function refresh() {
    window.location.reload();
}

function systemplay() {
    var i = Math.floor(Math.random() * 2);

}

function isNowPlayer1Turn() {
    return isPlayer1Turn;
}

function changeTurn() {
    isPlayer1Turn = !isPlayer1Turn;
    displayTurn();
}

function displayTurn() {
    document.getElementById('turnDisplay').innerText = isPlayer1Turn ? 'Player 1 ( O )' : 'Player 2 ( X )';

}


function validateGame() {


    for (i = 0; i < 3; i++) {
        var row = table[i];

        if (row[0] === '-') { continue; }

        if (row[0] === row[1] && row[0] === row[2]) {
            table[i][0] === 'O' ? alert('player 1 wins!') : alert('player 2 wins!');
        }
    }
    for (j = 0; j < 3; j++) {

        var coloumn = getColoumn(table, j);
        if (coloumn[0] === '-') { continue; }

        if (coloumn[0] === coloumn[1] && coloumn[1] === coloumn[2]) {
            table[0][j] === 'O' ? alert('player 1 wins!') : alert('player 2 wins!');
        }

    }

    var diagonal1 = getDiagonalLeftToRight(table);
    if (diagonal1[0] !== '-') {
        if (diagonal1[0] === diagonal1[1] && diagonal1[1] === diagonal1[2]) {
            diagonal1[0] === 'O' ? alert('player 1 wins!') : alert('player 2 wins!');
        }
    }

    var diagonal2 = getDiagonalRightToLeft(table);
    if (diagonal2[0] !== '-') {
        if (diagonal2[0] === diagonal2[1] && diagonal2[1] === diagonal2[2]) {
            diagonal2[0] === 'O' ? alert('player 1 wins!') : alert('player 2 wins!');
        }
    }


}

function getColoumn(array, coloumnIndex) {
    if (coloumnIndex < 0 || coloumnIndex > array[0].length) {
        return new Error('Coloumn index out of range!');
    }

    var coloumn = [];
    for (i = 0; i < 3; i++) {
        coloumn[i] = array[i][coloumnIndex];
    }
    return coloumn;
}

function getDiagonalLeftToRight(array) {

    var coloumnnum = 0;
    var maxcoloumnnum = array.length;
    var diagonal = [];
    for (coloumnnum = 0; coloumnnum < maxcoloumnnum; coloumnnum++) {

        diagonal[coloumnnum] = array[coloumnnum][coloumnnum];

    }
    return diagonal;
}

function getDiagonalRightToLeft(array) {
    var coloumnnum = 0, rownum = 0;
    var maxcoloumnnum = array.length;
    var diagonal = [];
    for (coloumnnum = 0; coloumnnum < maxcoloumnnum; coloumnnum++) {
        rownum = (maxcoloumnnum - 1) - coloumnnum;

        diagonal[coloumnnum] = array[coloumnnum][rownum];
    }
    return diagonal;
}



function setAndValidate(btnId) {
    var btn = document.getElementById(btnId);

    btn.innerText = isPlayer1Turn ? 'O' : 'X';
    btn.disabled = true;

    var indices = btnId.split('');

    table[indices[0]][indices[1]] = isPlayer1Turn ? 'O' : 'X';
    changeTurn();
    validateGame();

}

displayTurn();
