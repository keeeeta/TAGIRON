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
const G5 = { value: 5, color: "green" };
const numberTileList = [R0, B0, R1, B1, R2, B2, R3, B3, R4, B4, G5, G5, R6, B6, R7, B7, R8, B8, R9, B9];
const question = ["0はどこ？", "1または2はどこ？（どちらかひとつ選ぶ）", "3または4はどこ？（どちらかひとつ選ぶ）", "5はどこ？", "6または7はどこ？（どちらかひとつ選ぶ）", "8または9はどこ？（どちらかひとつ選ぶ）", "小さい方から3枚の数の合計は？", "中央の3枚の合計は？", "大きい方から3枚の数の合計は？", "偶数は何枚ある？（0も含む）", "赤の数字タイルは何枚ある？", "赤の数の合計は？", "奇数は何枚ある？", "青の数字タイルは何枚ある？", "青の数の合計は？", "数が連続している数字タイルはどこ？", "同じ色が隣り合っている数字タイルはどこ？", "同じ数字タイルのペアは何個ある？", "［共有情報カード］中央の数字タイルは5以下？4以下？", "［共有情報カード］数字タイルの最大の数から、最小の数を引いた数は？", "［共有情報カード］数字タイルすべての数の合計は？"];
let hand = [];
let ans = []; // 回答格納
const displayQuestionBox = document.getElementById('displayQuestionBox');
const myHand = document.getElementById('myHand');
const dataLog = document.getElementById('dataLog');

// 手札の配布
function handOutCard() {
    let rndNum; // ランダム数

    //重複ない5枚の確定
    do {
        for (let i = 0; i < 5; i++) {
            // Math.random()は0以上、1未満。Math.floorは引数として与えた数以下の最大の整数(正の数なら切り捨て)。
            rndNum = Math.floor(Math.random() * numberTileList.length);
            hand[i] = numberTileList[rndNum];
        }
        // 重複の削除
        hand = hand.filter((x, i, self) => self.indexOf(x) === i);
    } while (hand.length !== 5);

    // 並べ替え
    hand.sort(compareFunc);

    // 並べ替え
    // for (let m = 0; m < numberTileList.length; m++) {
    //     if (tmp.some((value) => { return value === numberTileList[m] })) {
    //         hand.push(numberTileList[m]);
    //     }
    // }

    // 手札の表示
    for (let i = 0; i < hand.length; i++) {
        switch (hand[i]) {
            case R0:
                let imgR0 = new Image();
                imgR0.src = './img/R0.jpg';
                imgR0.classList.add("numberTile");
                myHand.appendChild(imgR0);
                break;
            case R1:
                let imgR1 = new Image();
                imgR1.src = './img/R1.jpg';
                imgR1.classList.add("numberTile");
                myHand.appendChild(imgR1);
                break;
            case R2:
                let imgR2 = new Image();
                imgR2.src = './img/R2.jpg';
                imgR2.classList.add("numberTile");
                myHand.appendChild(imgR2);
                break;
            case R3:
                let imgR3 = new Image();
                imgR3.src = './img/R3.jpg';
                imgR3.classList.add("numberTile");
                myHand.appendChild(imgR3);
                break;
            case R4:
                let imgR4 = new Image();
                imgR4.src = './img/R4.jpg';
                imgR4.classList.add("numberTile");
                myHand.appendChild(imgR4);
                break;
            case R6:
                let imgR6 = new Image();
                imgR6.src = './img/R6.jpg';
                imgR6.classList.add("numberTile");
                myHand.appendChild(imgR6);
                break;
            case R7:
                let imgR7 = new Image();
                imgR7.src = './img/R7.jpg';
                imgR7.classList.add("numberTile");
                myHand.appendChild(imgR7);
                break;
            case R8:
                let imgR8 = new Image();
                imgR8.src = './img/R8.jpg';
                imgR8.classList.add("numberTile");
                myHand.appendChild(imgR8);
                break;
            case R9:
                let imgR9 = new Image();
                imgR9.src = './img/R9.jpg';
                imgR9.classList.add("numberTile");
                myHand.appendChild(imgR9);
                break;
            case B0:
                let imgB0 = new Image();
                imgB0.src = './img/B0.jpg';
                imgB0.classList.add("numberTile");
                myHand.appendChild(imgB0);
                break;
            case B1:
                let imgB1 = new Image();
                imgB1.src = './img/B1.jpg';
                imgB1.classList.add("numberTile");
                myHand.appendChild(imgB1);
                break;
            case B2:
                let imgB2 = new Image();
                imgB2.src = './img/B2.jpg';
                imgB2.classList.add("numberTile");
                myHand.appendChild(imgB2);
                break;
            case B3:
                let imgB3 = new Image();
                imgB3.src = './img/B3.jpg';
                imgB3.classList.add("numberTile");
                myHand.appendChild(imgB3);
                break;
            case B4:
                let imgB4 = new Image();
                imgB4.src = './img/B4.jpg';
                imgB4.classList.add("numberTile");
                myHand.appendChild(imgB4);
                break;
            case B6:
                let imgB6 = new Image();
                imgB6.src = './img/B6.jpg';
                imgB6.classList.add("numberTile");
                myHand.appendChild(imgB6);
                break;
            case B7:
                let imgB7 = new Image();
                imgB7.src = './img/B7.jpg';
                imgB7.classList.add("numberTile");
                myHand.appendChild(imgB7);
                break;
            case B8:
                let imgB8 = new Image();
                imgB8.src = './img/B8.jpg';
                imgB8.classList.add("numberTile");
                myHand.appendChild(imgB8);
                break;
            case B9:
                let imgB9 = new Image();
                imgB9.src = './img/B9.jpg';
                imgB9.classList.add("numberTile");
                myHand.appendChild(imgB9);
                break;
            case G5:
                let imgG5 = new Image();
                imgG5.src = './img/G5.jpg';
                imgG5.classList.add("numberTile");
                myHand.appendChild(imgG5);
                break;
            default:
                break;
        }
    }
}

// 質問の表示
function displayQuestion() {
    let rndNum = Math.floor(Math.random() * question.length);
    document.getElementById('questionCard').textContent = question[rndNum];
}

// 数値sort用比較関数
function compareFunc(a, b) {
    if (a.value == b.value) {
        //  同じ数字ならred,blueの順なので降順
        return a.color < b.color ? 1 : -1;
    } else {
        // 昇順に並び替え
        return a.value < b.value ? -1 : 1;
    }
}


// 解答の取得、正誤判定
function answerJudgment() {
    let count = 0; // 解答と答えのあっているかのカウント

    // 回答を配列(ans)に格納
    for (let i = 0; i < document.answer_box.answer.length; i++) {
        if (document.answer_box.answer[i].checked) {
            // ans.push(document.answer_box.answer[i].value);
            switch (document.answer_box.answer[i].value) {
                case "R0":
                    ans[ans.length] = R0;
                    break;
                case "R1":
                    ans[ans.length] = R1;
                    break;
                case "R2":
                    ans[ans.length] = R2;
                    break;
                case "R3":
                    ans[ans.length] = R3;
                    break;
                case "R4":
                    ans[ans.length] = R4;
                    break;
                case "R6":
                    ans[ans.length] = R6;
                    break;
                case "R7":
                    ans[ans.length] = R7;
                    break;
                case "R8":
                    ans[ans.length] = R8;
                    break;
                case "R9":
                    ans[ans.length] = R9;
                    break;
                case "B0":
                    ans[ans.length] = B0;
                    break;
                case "B1":
                    ans[ans.length] = B1;
                    break;
                case "B2":
                    ans[ans.length] = B2;
                    break;
                case "B3":
                    ans[ans.length] = B3;
                    break;
                case "B4":
                    ans[ans.length] = B4;
                    break;
                case "B6":
                    ans[ans.length] = B6;
                    break;
                case "B7":
                    ans[ans.length] = B7;
                    break;
                case "B8":
                    ans[ans.length] = B8;
                    break;
                case "B9":
                    ans[ans.length] = B9;
                    break;
                case "G5":
                    ans[ans.length] = G5;
                    break;
                default:
                    break;
            }
        }
    }

    ans.sort(compareFunc);

    // object.toSource()はオブジェクトが展開された形で表示出来る。chromeの場合はJSON.stringify(object)。
    // alert(JSON.stringify(ans));

    // 正誤判定
    for (let l = 0; l < hand.length; l++) {
        if (hand[l].value == ans[l].value && hand[l].color == ans[l].color) {
            count++;
        } else {
            break;
        }
    }

    // 勝利通知
    if (count == 5) {
        document.write("<h1>勝利！</h1>");
    } else {
        document.write("<h1>不正解</h1>");
    }
}

window.addEventListener('DOMContentLoaded', displayQuestion);
// window.addEventListener('DOMContentLoaded', handOutCard);