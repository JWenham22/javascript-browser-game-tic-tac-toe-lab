

//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.



/*-------------------------------- Constants --------------------------------*/

const ticTacToeEl = document.querySelector('#Tic-Tac-Toe')
const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


/*---------------------------- Variables (state) ----------------------------*/

let board = ['', '', '', '', '', '', '', '', '']
let currentTurn = 'X'
let winner = false
let tie = false

/*------------------------ Cached Element References ------------------------*/





/*-------------------------------- Functions --------------------------------*/



function handleClick(e) {
    const clickedSquare = e.target

    if (clickedSquare.textContent !== '') {
        return
    }
    clickedSquare.textContent = currentTurn

    const index = Number(clickedSquare.id)
    board[index] = currentTurn

    checkGameStatus()

    currentTurn = currentTurn === 'X' ? 'O' : 'X';

    updateMessage()
}


function checkGameStatus() {
    for (let combination of winningCombos) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          winner = board[a];
          updateMessage();
          return;
        }
    }
      if (!board.includes('')) {
        tie = true;
        updateMessage();
    }
}

function updateMessage() {
    if (winner) {
        messageEl.textContent = `Congragulations ${winner}! You Win!`
    } else if (tie) {
        messageEl.textContent = `It's a tie!`
    } else {
        messageEl.textContent = `It's ${currentTurn}'s turn`
    }   
}

/*----------------------------- Event Listeners -----------------------------*/

squareEls.forEach(square => {
    square.addEventListener('click', handleClick)
})

