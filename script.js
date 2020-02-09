"use strict";

let btn = document.querySelector('#btn');
btn.onclick = textColor;
function textColor() {
  let h1 = document.querySelector('.header');
  h1.style.color = 'red';
  h1.style.transition = '1s';
  h1.style.textShadow = '0 0 20px #fff';


  let block1 = document.querySelector('.block-1');
//let blockStyle = block.style;
block1.style.width = '100%';
console.log(block1.style);

//добавляем(или меняем) классы
block1.classList.add('red');
block1.classList.add('green');

//удаляем класс
//block1.classList.remove('red');

console.log(block1.classList); //список всех классов
//проверка наличия класса у элемента
console.log(block1.classList.contains('red'));

//block1.classList.toggle('red');
//block1.classList.toggle('red');
}

/*
let h1 = document.querySelector('.h1').onclick = function() {
 alert(123);
}
*/
/*
let block1 = document.querySelector('.block-1');
//let blockStyle = block.style;
block1.style.width = '300px';
console.log(block1.style);

//добавляем(или меняем) классы
block1.classList.add('red');
block1.classList.add('green');

//удаляем класс
block1.classList.remove('red');

console.log(block1.classList); //список всех классов
//проверка наличия класса у элемента
console.log(block1.classList.contains('red'));

block1.classList.toggle('red');
block1.classList.toggle('red');
*/