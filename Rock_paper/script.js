let userMove = document.querySelectorAll('.choice')
let result = document.getElementById('final-result')
let round = document.querySelector('.round-result')
let userScore = document.querySelector('#user-score')
let compScore = document.querySelector('#comp-score')
let reset = document.querySelector('.reset')
let roundMessage = document.querySelector('.round-Mssg')
let compChoices = ['rock', 'paper', 'scissor']
let usercount = 0
let compcount = 0
let game = true
let gameBoolean = true
let count = 0



const displayScore = () => {
    if (game) {
        usercount += 1
        userScore.innerHTML = usercount
        roundDisplay('User won this round.')
    }
    else {
        compcount += 1
        compScore.innerHTML = compcount
        roundDisplay('Computer won this round.')
    }
}

const playGame = (usermove) => {
    if (!gameBoolean) {
        return
    }
    let compmove = compMove()
    if (usermove === compmove) {
        count++
        roundDisplay('This round has been Drawn!')
        final()
    }
    else {
        if (usermove === 'rock') {
            game = compmove === 'paper' ? false : true

        }
        else if (usermove === 'paper') {
            game = compmove === 'scissor' ? false : true

        }
        else {
            game = compmove === 'rock' ? false : true

        }
        count++
        displayScore()
        final()
    }
    roundMssg()
}


userMove.forEach((choice) => {
    choice.addEventListener('click', () => {
        const move = choice.getAttribute('id')
        playGame(move)
    })
})

function compMove() {
    let num = Math.floor((Math.random()) * 3)
    return compChoices[num]

}
function finalMssg(message) {
    result.innerHTML = message
}

function roundDisplay(message) {
    round.innerHTML = message
    round.classList.remove('hide')
    setTimeout(() => {
        round.classList.add('hide')
    }, 2000)
}
function final() {
    if (count >= 10) {
        if (usercount > compcount) {
            finalMssg('User has Won!')
        }
        else if (compcount > usercount) {
            finalMssg('Computer has Won!')
        }
        else {
            finalMssg('Game is drawn!')
        }
        gameBoolean = false
    }
}
function roundMssg() {
    roundMessage.innerHTML = `Round ${count} of 10`
    roundMessage.classList.remove('Mssg-hide')
    setTimeout(() => {
        roundMessage.classList.add('Mssg-hide')
    }, 2000)

}
function resetGame() {
    game = true
    usercount = 0
    compcount = 0
    userScore.innerHTML = 0
    compScore.innerHTML = 0
    gameBoolean = true
    result.innerHTML = "Pick Your move"
    count = 0
    round.classList.add('hide');
    roundMessage.classList.add('Mssg-hide');
}
reset.addEventListener('click', resetGame)