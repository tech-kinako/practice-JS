/**
 * var
 */
var val1 = "val変数";
console.log(val1);

// // var変数は上書き可能
val1 = "val変数2";
console.log(val1);

// val変数は再宣言可能
var val1 = "val変数3";
console.log(val1);

/**
 * let
 */
let val2 = "let変数";
console.log(val2);

// let変数は上書き可能
val2 = "let変数を上書き";
console.log(val2);

// let変数は再宣言不可
// let val2 = "let変数を再宣言";

// const変数
const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";
// console.log(val3);

// const変数は再宣言不可
// const val3 = "const変数を再宣言不可";

// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
    name: "test",
    age: 31
}
console.log(val4)

val4.name = "tes";
val4.age = 40;
val4.language = "japan";

console.log(val4);

/**
 * テンプレート文字列
 */
const val5 = "私の名前は" + val4.name + "です。年齢は" + val4.age + "歳です。";
console.log(val5);

const val6 = `私の名前は${val4.name}です。年齢は${val4.age}歳です。`;
console.log(val6);

/**
 * アロー関数
 */
//従来の関数
function func1(str) {
    return str;
}
console.log(func1("関数です。"));

const func2 = function(str) { return str; };
console.log(func2("messageです。"));

// アロー関数
const func3 = (str) => { return str; };
console.log(func3("func3です。"));

const func4 =(num1,num2) => ({ name: num1, age: num2 }) ;
console.log(func4(10,20));

/**
 * 分割代入
 */
//オブジェクト
const myprofile = {
    name2: "test",
    age2: 31
}
const message1 = `名前は${myprofile.name2}です。年齢は${myprofile.age2}です。`;
console.log(message1);

const { name2, age2 } = myprofile;
console.log(`名前は${name2}です。年齢は${age2}です。`);

//配列
const myprofile2 = ["test", 31];
const message2 = `名前は${myprofile2[0]}です。年齢は${myprofile2[1]}です。`;
console.log(message2);

const [name3, age3] = myprofile2;
console.log(`名前は${name3}です。年齢は${age3}です。`);

/**
 * デフォルト値
 */
const sayHello = ( name4 = "default") => console.log(`こんにちは${name4}さん`);
sayHello();

const myprofile3 = {
    age4: 31
}

const {age4=10, name4="default2"} = myprofile3;
console.log(`名前は${name4}です。年齢は${age4}です。`);

const myprofile4 = [];
const [name5="default1",age5="default"] = myprofile4;
console.log(`名前は${name5}です。年齢は${age5}です。`);

/**
 * オブジェクトの省略記法
 */
const name6 = "default";
const age6 = 40;

const myprofile5 = {name6,age6}

console.log(myprofile5);

/**
 * スプレッド構文
 */

//配列の展開
const arr1 = [1,2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num1,num2) => console.log(num1 + num2);

sumFunc(arr1[0],arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1,2,3,4,5];
const [num1,num2,...arr3] = arr2;
console.log(num1,num2,arr3);

// 配列のコピー、結合
const arr4 = [10,20];
const arr5 = [30,40];

const arr6 = [...arr4];
console.log(arr6);

const arr7 = [...arr4,...arr5];
console.log(arr7);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["name1","name2","name3"];
for(let index=0; index < nameArr.length; index++) {
    console.log(nameArr[index]);
}

// map
nameArr.map((name,index) => console.log(`${index}:${name}`));

// fileter
const numArr = [1,2,3,4,5];
const newNumArr = numArr.filter((num) => num % 2 === 1);
console.log(newNumArr);

const newNameArr = nameArr.map((name,index) => {
    if ( name === "name1") {
        return name;
    } else {
        return `${name} + さん`;
    }
});
console.log(newNameArr);

/**
 *  三項演算子
 */
const test  = 1 > 2 ? "val1" : "val2";
console.log(test);

const number = "1500";
console.log(number.toLocaleString());

const formattedNumber = typeof number === "number" ? number.toLocaleString() : "数値を入力してください";
console.log(formattedNumber);

const checkSum = (num1,num2) => {
    return num1 + num2 > 100 ? "true" : "false";
}
console.log(checkSum(100,200));