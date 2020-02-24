let user1, user2, user3, user4;
const R0 = { value: 0, color: "red" };
const R1 = { value: 1, color: "red" };
const R2 = { value: 2, color: "red" };
const R3 = { value: 3, color: "red" };
const R4 = { value: 4, color: "red" };
const R6 = { value: 6, color: "red" };
const R7 = { value: 7, color: "red" };
const R8 = { value: 8, color: "red" };
const R9 = { value: 9, color: "red" };
const B0 = { value: 0, color: "blue" };
const B1 = { value: 1, color: "blue" };
const B2 = { value: 2, color: "blue" };
const B3 = { value: 3, color: "blue" };
const B4 = { value: 4, color: "blue" };
const B6 = { value: 6, color: "blue" };
const B7 = { value: 7, color: "blue" };
const B8 = { value: 8, color: "blue" };
const B9 = { value: 9, color: "blue" };
const G5r = { value: 5, color: "green" };
const G5b = { value: 5, color: "green" };
const numberTileList = [R0, R1, R2, R3, R4, G5r, R6, R7, R8, R9, B0, B1, B2, B3, B4, G5b, B6, B7, B8, B9];
const question = ["赤の数の合計は？", "5はどこ？", "青の数字タイルは何枚ある？"];
let ans = []; //回答格納
const displayQuestionBox = document.getElementById('displayQuestionBox');
const myHand = document.getElementById('myHand');
// const img = new Image();

// 手札の配布
function handOutCard() {
    let tmp = [];

    //重複ない5枚の確定
    do {
        for (let i = 0; i < 5; i++) {
            let rndNum = Math.floor(Math.random() * numberTileList.length);
            tmp[i] = numberTileList[rndNum];
        }
        tmp = tmp.filter((x, i, self) => self.indexOf(x) === i);
    } while (tmp.length !== 5);

    // 手札の表示
    for (let i = 0; i < tmp.length; i++) {
        switch (tmp[i]) {
            case R0:
                let imgR0 = new Image();
                imgR0.src = './img/R0.jpg';
                myHand.appendChild(imgR0);
                break;
            case R1:
                let imgR1 = new Image();
                imgR1.src = './img/R1.jpg';
                myHand.appendChild(imgR1);
                break;
            case R2:
                let imgR2 = new Image();
                imgR2.src = './img/R2.jpg';
                myHand.appendChild(imgR2);
                break;
            case R3:
                let imgR3 = new Image();
                imgR3.src = './img/R3.jpg';
                myHand.appendChild(imgR3);
                break;
            case R4:
                let imgR4 = new Image();
                imgR4.src = './img/R4.jpg';
                myHand.appendChild(imgR4);
                break;
            case R6:
                let imgR6 = new Image();
                imgR6.src = './img/R6.jpg';
                myHand.appendChild(imgR6);
                break;
            case R7:
                let imgR7 = new Image();
                imgR7.src = './img/R7.jpg';
                myHand.appendChild(imgR7);
                break;
            case R8:
                let imgR8 = new Image();
                imgR8.src = './img/R8.jpg';
                myHand.appendChild(imgR8);
                break;
            case R9:
                let imgR9 = new Image();
                imgR9.src = './img/R9.jpg';
                myHand.appendChild(imgR9);
                break;
            case B0:
                let imgB0 = new Image();
                imgB0.src = './img/B0.jpg';
                myHand.appendChild(imgB0);
                break;
            case B1:
                let imgB1 = new Image();
                imgB1.src = './img/B1.jpg';
                myHand.appendChild(imgB1);
                break;
            case B2:
                let imgB2 = new Image();
                imgB2.src = './img/B2.jpg';
                myHand.appendChild(imgB2);
                break;
            case B3:
                let imgB3 = new Image();
                imgB3.src = './img/B3.jpg';
                myHand.appendChild(imgB3);
                break;
            case B4:
                let imgB4 = new Image();
                imgB4.src = './img/B4.jpg';
                myHand.appendChild(imgB4);
                break;
            case B6:
                let imgB6 = new Image();
                imgB6.src = './img/B6.jpg';
                myHand.appendChild(imgB6);
                break;
            case B7:
                let imgB7 = new Image();
                imgB7.src = './img/B7.jpg';
                myHand.appendChild(imgB7);
                break;
            case B8:
                let imgB8 = new Image();
                imgB8.src = './img/B8.jpg';
                myHand.appendChild(imgB8);
                break;
            case B9:
                let imgB9 = new Image();
                imgB9.src = './img/B9.jpg';
                myHand.appendChild(imgB9);
                break;
            case G5r:
                let imgG5r = new Image();
                imgG5r.src = './img/G5.jpg';
                myHand.appendChild(imgG5r);
                break;
            case G5b:
                let imgG5b = new Image();
                imgG5b.src = './img/G5.jpg';
                myHand.appendChild(imgG5b);
                break;
            default:
                break;
        }

    }
}

// 質問の表示
function displayQuestion() {
    let rndNum = Math.floor(Math.random() * question.length);
    console.log(String());
    document.getElementById('questionCard').textContent = question[rndNum];
}

function compareFunc(a, b) {

}


// 解答の取得、正誤判定
function answerJudgment() {
    let flag = false;
    for (let i = 0; i < document.answer_box.answer.length; i++) {
        if (document.answer_box.answer[i].checked) {
            flag = true;
            ans.push(document.answer_box.answer[i].value);
        }
    }
    ans.sort();
    alert(ans);

    // if () {
    //     alert("勝利！");
    // } else {
    //     alert("不正解");
    // }
}

window.addEventListener('DOMContentLoaded', displayQuestion);
window.addEventListener('load', handOutCard);
// handOutCard();