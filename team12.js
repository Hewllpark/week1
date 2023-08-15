
let attempts = 0;
let targetNumber = generateRandomNumber(); // 컴퓨터가 뽑은 숫자
let gameEnded = false; // 게임 종료 여부

function generateRandomNumber() {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const randomNumbers = [];

    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * digits.length);
        randomNumbers.push(digits.splice(randomIndex, 1)[0]);
    }

    return randomNumbers.join('');
}

function playGame(userGuess) {
    if (gameEnded) {
        console.log("게임이 이미 종료되었습니다.");
        return;
    }

    attempts++;

    if (userGuess.length !== 3 || !/^\d+$/.test(userGuess)) {
        console.log(`유효하지 않은 입력입니다. 숫자 3개를 입력하세요.`);
        return;
    }

    const result = calculateBallsAndStrikes(userGuess, targetNumber);
    console.log(`${attempts}번째 시도: ${userGuess} - ${result.balls}B${result.strikes}S`);

    if (result.strikes === 3) {
        console.log(`${attempts}번만에 맞히셨습니다. 게임을 종료합니다.`);
        gameEnded = true;
    }
}

// 볼과 스트라이크를 판단하는 함수
function calculateBallsAndStrikes(userGuess, randomNumber) {
    // 볼과 스트라이크 계산 로직은 그대로 유지
}

// 게임 시작
console.log("컴퓨터가 숫자를 생성하였습니다. 답을 맞춰보세요!");

// 사용자의 입력 받기
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptUser() {
    rl.question('숫자 3개를 입력하세요: ', userGuess => {
        playGame(userGuess);
        if (!gameEnded) {
            promptUser();
        } else {
            rl.close();
        }
    });
}

promptUser();
