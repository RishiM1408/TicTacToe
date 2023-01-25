var turn = "X";
var score = {
    "X": 0,
    "O": 0
};
var gridValue = 0;

function fnLoad() {
    var select = document.getElementsByTagName("td");
    for (var i = 0; i < select.length; i++) {
        select[i].addEventListener("click", fnPlay);
    }
    document.getElementById("reset").addEventListener("click", fnReset);
}

function fnPlay(event) {
    var select = event.target;
    if (select.innerHTML !== "X" && select.innerHTML !== "O") {
        select.innerHTML = turn;
        score[turn] += 1;
        fnCheckWinner();
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
    }
}

function fnCheckWinner() {
    var winner = null;
    if (score.X + score.O === 9) {
        winner = "Tie";
    } else {
        var winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
        for (var i = 0; i < winningCombinations.length; i++) {
            if (score[turn] === 3) {
                var win = true;
                for (var j = 0; j < winningCombinations[i].length; j++) {
                    var id = winningCombinations[i][j];
                    if (document.getElementById(id).innerHTML !== turn) {
                        win = false;
                        break;
                    }
                }
                if (win) {
                    winner = turn;
                    break;
                }
            }
        }
    }
    if (winner === "X" || winner === "O") {
        document.getElementById("result").innerHTML = winner + " wins!";
    } else if (winner === "Tie") {
        document.getElementById("result").innerHTML = "It's a tie!";
    }
}
                
function fnReset() {
    var select = document.getElementsByTagName("td");
    for (var i = 0; i < select.length; i++) {
        select[i].innerHTML = "";
    }
    turn = "X";
    score = {
        "X": 0,
        "O": 0
    };
    document.getElementById("result").innerHTML = "";
}
                
document.addEventListener("DOMContentLoaded", fnLoad);