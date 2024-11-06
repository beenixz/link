let score = 0;
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('gameArea');

function dropBall() {
    const randomX = Math.random() * (gameArea.clientWidth - 30);
    ball.style.left = randomX + 'px';
    ball.style.top = '0px';

    let fallInterval = setInterval(() => {
        let ballTop = parseInt(ball.style.top);
        if (ballTop < gameArea.clientHeight - 30) {
            ball.style.top = ballTop + 5 + 'px';
        } else {
            clearInterval(fallInterval);
            alert('게임 오버! 최종 점수: ' + score);
            resetGame();
        }
    }, 100);
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = '점수: ' + score;
    dropBall();
}

ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = '점수: ' + score;
    ball.style.top = '-30px'; // 공을 위로 이동
    dropBall(); // 다시 떨어지게 함
});

// 게임 시작
dropBall();
let score = 0;
const ball = document.getElementById('ball');
const scoreDisplay = document.getElementById('score');
const gameArea = document.getElementById('gameArea');

function dropBall() {
    const randomX = Math.random() * (gameArea.clientWidth - 30);
    ball.style.left = randomX + 'px';
    ball.style.top = '0px';

    let fallInterval = setInterval(() => {
        let ballTop = parseInt(ball.style.top);
        if (ballTop < gameArea.clientHeight - 30) {
            ball.style.top = ballTop + 5 + 'px';
        } else {
            clearInterval(fallInterval);
            alert('게임 오버! 최종 점수: ' + score);
            resetGame();
        }
    }, 100);
}

function resetGame() {
    score = 0;
    scoreDisplay.textContent = '점수: ' + score;
    dropBall();
}

ball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = '점수: ' + score;
    ball.style.top = '-30px'; // 공을 위로 이동
    dropBall(); // 다시 떨어지게 함
});

// 게임 시작
dropBall();
