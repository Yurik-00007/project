"use strict";

// alert('Hellow');

// const result=confirm("Ты тут?");
// console.log(result);

// const answer=+prompt("Вам есть 18 лет?", "НЕТ");
// console.log((typeof(answer)),(answer+5));

// const answers=[];

// answers[0]=prompt("Как ваше имя?","Иван");
// answers[1]=prompt("Как ваше фамилия?","Петриченко");
// answers[2]=prompt("Сколько вам лет?","21");

// // console.log((typeof(answers)),answers);

// document.write((typeof(answers)),answers);

// const cotegory='toys';
// console.log('https://someurl.com/'+cotegory+'/'+'4'+'404');
// document.write(`https://someurl.com/${cotegory}/4404`);

// const name='Вася Пупкин';
// document.write(`Меня зовут ${name}`);

// const user="Ivan";
// alert(`Helow, ${user}`);

//008

console.log('arr'+'- object');
console.log(4 + +'5');

let incr=10,
    decr=10;

// incr++;
// decr--;

// console.log('Постфиксная'+'incr=' + incr++, 'decr=' + decr--);
// console.log('Постфиксная'+'incr=' + incr, 'decr=' + decr);

console.log('Префиксная'+'incr=' + ++incr, 'decr=' + --decr);
console.log('Префиксная'+'incr=' + incr, 'decr=' + decr);

console.log(10%5);
console.log(5%3);//2

console.log(2+4*2 != 8);

const isChecked = true,
    isClose=false;

    console.log(!isChecked || isClose);