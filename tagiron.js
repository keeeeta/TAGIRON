let user1, user2, user3, user4;
let R0 = { value: 0, color: "red" };
let R1 = { value: 1, color: "red" };
let R2 = { value: 2, color: "red" };
let R3 = { value: 3, color: "red" };
let R4 = { value: 4, color: "red" };
let R6 = { value: 6, color: "red" };
let R7 = { value: 7, color: "red" };
let R8 = { value: 8, color: "red" };
let R9 = { value: 9, color: "red" };
let B0 = { value: 0, color: "blue" };
let B1 = { value: 1, color: "blue" };
let B2 = { value: 2, color: "blue" };
let B3 = { value: 3, color: "blue" };
let B4 = { value: 4, color: "blue" };
let B6 = { value: 6, color: "blue" };
let B7 = { value: 7, color: "blue" };
let B8 = { value: 8, color: "blue" };
let B9 = { value: 9, color: "blue" };
let G5r = { value: 5, color: "green" };
let G5b = { value: 5, color: "green" };
let numberTileList = [R0, R1, R2, R3, R4, G5r, R6, R7, R8, R9, B0, B1, B2, B3, B4, G5b, B6, B7, B8, B9];
let question = ["赤の数の合計は？", "5はどこ？", "青の数字タイルは何枚ある？"];
let ans = [];

// 手札の配布
function handOutCard() {
    let tmp = [];
    let displayHnad = document.getElementById("myHand");

    //重複ない5枚の確定
    do {
        for (let i = 0; i < 5; i++) {
            let rndNum = Math.floor(Math.random() * numberTileList.length);
            tmp[i] = numberTileList[rndNum];
        }
        tmp = tmp.filter((x, i, self) => self.indexOf(x) === i);
    } while (tmp.length !== 5);
    console.log(tmp);

    // 手札の表示
    for (let i = 0; i < tmp.length; i++) {
        switch (tmp[i]) {
            case R0:
                document.write("<img src='./R0.jpg' alt='R0'></img>");
                // displayHnad.innerHTML = "<img src='./R0.jpg' alt='R0'></img>";
                break;
            case R1:
                document.write("<img src='./R1.jpg' alt='R1'></img>");
                break;
            case R2:
                document.write("<img src='./R2.jpg' alt='R2'></img>");
                break;
            case R3:
                document.write("<img src='./R3.jpg' alt='R3'></img>");
                break;
            case R4:
                document.write("<img src='./R4.jpg' alt='R4'></img>");
                break;
            case R6:
                document.write("<img src='./R6.jpg' alt='R6'></img>");
                break;
            case R7:
                document.write("<img src='./R7.jpg' alt='R7'></img>");
                break;
            case R8:
                document.write("<img src='./R8.jpg' alt='R8'></img>");
                break;
            case R9:
                document.write("<img src='./R9.jpg' alt='R9'></img>");
                break;
            case B0:
                document.write("<img src='./B0.jpg' alt='B0'></img>");
                break;
            case B1:
                document.write("<img src='./B1.jpg' alt='B1'></img>");
                break;
            case B2:
                document.write("<img src='./B2.jpg' alt='B2'></img>");
                break;
            case B3:
                document.write("<img src='./B3.jpg' alt='B3'></img>");
                break;
            case B4:
                document.write("<img src='./B4.jpg' alt='B4'></img>");
                break;
            case B6:
                document.write("<img src='./B6.jpg' alt='B6'></img>");
                break;
            case B7:
                document.write("<img src='./B7.jpg' alt='B7'></img>");
                break;
            case B8:
                document.write("<img src='./B8.jpg' alt='B8'></img>");
                break;
            case B9:
                document.write("<img src='./B9.jpg' alt='B9'></img>");
                break;
            case G5:
                document.write("<img src='./G5.jpg' alt='G5'></img>");
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

// window.onload = function () { displayQuestion() };
displayQuestion();
handOutCard();