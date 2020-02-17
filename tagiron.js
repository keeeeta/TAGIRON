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
let number_tile = [R0, R1, R2, R3, R4, G5r, R6, R7, R8, R9, B0, B1, B2, B3, B4, G5b, B6, B7, B8, B9];
let question = ["赤の数の合計は？", "5はどこ？", "青の数字タイルは何枚ある？"];
let ans;

// 手札の配布
function distribution() {
    let tmp = [];
    for (let i = 0; i < 5; i++) {
        let random = Math.floor(Math.random() * number_tile.length);
        tmp[i] = number_tile[random];
    }
    console.log(tmp);
}

// 質問の表示
function displayQuestion() {
    let random = Math.floor(Math.random() * question.length);
    console.log(question[random]);
}

// 正誤判定
function answer() {
    // if () {
    //     alert("勝利！");
    // } else {
    //     alert("不正解");
    // }
}

// 解答の取得
function onButtonClick() {
    let flag = false;
    for (let i = 0; i < document.answer_box.answer.length; i++) {
        if (document.answer_box.answer[i].checked) {
            flag = true;
            ans = document.answer_box.answer[i].value;
            console.log(ans);
        }
    }
}
console.log(R1.color, R1.value);
displayQuestion();
distribution();