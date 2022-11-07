// 0, null, undefined, NaN, '' - false

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 8 типов данных 

// number - для любых чисел
// bigInt - для целых чисел более 15-16 символов
// string - для строк
// boolean - для true/false
// undefined - для неприсвоенных значений
// null - для неизвестных значений
// symbol - для уникальных идетификаторов
// object - для сложных структурных данных

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// операторы сравнения 

// console.log(4 > 3); // Больше
// console.log(4 < 5); // Меньше
// console.log(4 >= 4); // Больше или равно
// console.log(4 <= 4); // Меньше или равно
// console.log(4 == 4); // равно
// console.log(4 != 4); // не равно 
// console.log(4 === 4); // строгое равенство
// console.log(4 !== 4); // строгое неравенство

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// логические операторы 
//  !  не 
//  &&  и 
//  ||  или
// console.log(!false) // true
// console.log(false && true && true) // false
// console.log(false || true) // true

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 							Преобразование типов
// console.log(String(77));
// console.log(Number('77')); или console.log(+('77'));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// унарный оператор 
// +1

// бинарный оператор
// 2 + 3

// тернарный оператор
// 4 ? 2 : 4;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// i = i + 1 //i++ инкремент
// i = i - 1 //i-- декремент

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//										if 	else	 switch case

// 			1 пример if else
// let user = document.querySelector('.age');
// let button = document.querySelector('.click');

// button.onclick = function () {
// 	let userYear = +user.value; 
// 	if ( userYear >= 18 && userYear < 60 ){
// 		console.log('Добро пожаловать');
// 	}
// 	else if (userYear >= 60 ){
// 		console.log('Не входи! Твой возрост слишком велик');
// 	} 
// 	else {
// 		console.log('Приходите когда Вам будет 18 лет!');
// 	}
// }

//////////////////////////////////////////////////////////////////////

// 			2 пример switch case

// let user = document.querySelector('.age');
// let button = document.querySelector('.click');

// button.onclick = function () {
// 	let userYear = +user.value; 
// 	switch (userYear) {
// 		case 17:
// 			console.log('Приходи через год!');
// 			break;
// 		case 16:
// 			console.log('Ты ещё не готов!');
// 			break;		
// 		default:
// 			console.log('Добро пожаловать!');
// 	}
// }
//////////////////////////////////////////////////////////////////////

////////						 test 

// let browser = 'Firsdsd';
// if(browser === 'Edge'){
// 	console.log( "You've got the Edge!");
// }else if (browser === 'Chrome' ||
// browser === 'Firefox' ||
// browser === 'Safari' ||
// browser === 'Opera') {
// 	console.log('Okay we support these browsers too');
// } else {
// 	console.log('We hope that this page looks ok!');
// }

//////////////////////////////////////////////////////////////////////

////////						 test 2

// let number = 7;
// switch (number) {
// 	case 0:
// 		console.log('Вы ввели число 0');
// 		break;
// 	case 1:
// 		console.log('Вы ввели число 1');
// 		break;
// 	case 2:
// 	case 3:
// 		console.log('Вы ввели число 2, а может и 3');
// 		break;
// 	default:
// 		console.log('Вы ввели число большее 3');
// }

//////////////////////////////////////////////////////////////////////

////////						 циклы for while

// 			1 пример for

// let div = document.querySelectorAll('.one');
// console.log(div);

// for (let i = 0; i < div.length; i++){
// 	console.log(div[i]);
	// div[i].style.background = 'red'; // меняем цвет div по циклу
// 	// if(i == 4 ) break; // принудительно остановить
// 	div[i].onclick = two; // по клику выполняем function	
// }

// function two() {
// 	console.log('work!!!');

// }

//////////////////////////////////////////////////////////////////////

// 			1-1 пример for

// let b = document.getElementsByClassName('one');
// console.log(b);
// for(let i = 0; i < b.length; i++){
// 	b[i].style.background = 'green';
// 	b[i].onclick = two;
// }

// function two() {
// 	console.log('work!!!');
// }

// 			2 пример for

// document.querySelector('button').onclick = () => {
// 	let r = document.querySelectorAll('input[type="radio"]');
// 	console.log(r);
// 	for (let i = 0; i< r.length; i++){
// 		if(r[i].checked){
// 			console.log(r[i].value, r[i].innerHTML )
// 		}
// 	}
// }

//////////////////////////////////////////////////////////////////////

// 								Вложенные циклы

// 			1 пример Вложенные циклы

// let out = document.querySelector('.out');

// for (let i = 0; i < 5; i++){
// 	for(let j = 0; j < 10; j++){
// 		out.innerHTML += j;
// 	}
// 	out.innerHTML += '<br>';
// }

// 			2 пример Вложенные циклы

// let out = document.querySelector('.out');

// for (let i = 1; i <= 10; i++){
// 	for(let j = 1; j<= 10; j++){
// 		out.innerHTML  += `${i}*${j}=${j * i}<br>`;
// 	}
// 	out.innerHTML += '<hr>'
// }

//////////////////////////////////////////////////////////////////////

////////										ES6: Шаблонные строки Интерполяция

// 			1 пример 

// const text1 = `I enjoy sport`;
// const text1q = 'I enjoy sport';
// console.log(text1);
// console.log(text1q);

//  			2 пример применение кавычек

// const text2 = `I enjoy sport, 'watch TV' and often 'write code'`;
// const text2q = "I enjoy sport, \'watch TV\' and often \"write code\"";
// console.log(text2);
// console.log(text2q);

// 			3 пример мультистроки

// const text3 = `
// I enjoy sport
// watch TV
// write code
// `
// console.log(text3);

//  			4 пример Интерполяция - переменные

// const n4 = 'коды';
// const text4 = `Кто пишет ${n4}, тот ночью не спит`;
// const text4q = 'Кто пишет ' + n4 + ', тот ночью не спит';
// console.log(text4);
// console.log(text4q);

// 		5 пример Интерполяция - выражения

// function test(){
// 	return 1000;
// }
// const n5 = 15;
// const text5 = `Кто пишет ${n5 + 100 + Math.random() + test()}, тот ночью не спит`;
// console.log(text5);

// 			6 пример HTML шаблоны

// const header = 'шаблонные строки';
// const tags = ['шаблонные строки', 'шаблонные литералы', 'ES6'];

// let html = `<h2>${header}</h2><ul>`;
// for (const x of tags){
// 	html += `<li>${x}</li>`
// }
// html += `</ul>`;

// document.querySelector('.out').innerHTML = html;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 									округление чисел

// let num = 12.1634455;
// console.log(num);
// let numRound = Math.round(num); //округление 
// console.log(numRound);
// let numRound = Math.floor(num);//округление в меньшую сторону
// console.log(numRound);
// let numRound = Math.ceil(num);//округление в большую сторону
// console.log(numRound);

// console.log(Math.max(1, 5, 66, 7)); //максимальное число
// console.log(Math.min(1, 5, 66, 7)); //минимальное число
// console.log(Math.pow(2,4)); //два в четвертой степени 
//  let numRandom = Math.random(); //возвращает от нуля до 100% (от 0 до 1, 1 не включая)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 								генерируем рандомные числа

// for(let i = 0; i <= 100; i++){
// 	// let numberRandom = Math.random() * 20; //(от 0 до 20 random)
// 	let numberRandom = 40 + (Math.random() * 20); //(от 20 до 40 random)
// 	let numberRound = Math.round(numberRandom);
// 	console.log(numberRound)
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//											СТРОКИ

// const myFirstNameLength = myFirstName.length; // выводим длинну строки

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const myFirstNameToUpperCase = myFirstName.toUpperCase(); // верхний регистр 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const greeting = 'Good Morning';
// const updatedGreeting = greeting.replace('Morning', 'Evening'); // меняем Morning на Evening
// console.log(updatedGreeting);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// let title = document.querySelector('h1');
// title.innerHTML = 'Hi'; // innerHTML - меняем то что написано в h1 

// let input = document.querySelector('.input');
// console.log(input.value); // выводим в консоль, что написано в input

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 														ФУНКЦИИ

// 											ФУНКЦИИ С ИМЕНАМИ

// 			1 пример
// let f1 = document.querySelector('.f-1');

// function one (){
// 	console.log('work');
// } 
// one();
// f1.onclick = one;

// 			2 пример

// let a = 8;
// let b = 9;

//  function multiply (){
// 	console.log(a*b);
// 	return a*b
//  }

//  multiply();

 // 			3 пример

// let a = 8;
// let b = 9;
//  function multiply (){
// 	console.log(a * b);
// 	return a * b;
//  }
//  let c1 = multiply ();
//  let c2 = multiply ();
// console.log(c1, 10 * c2);

 // 			4 пример

// let a = 8;
// let b = 9;

//  function multi2(x, y){
// 	return x * y 
//  }
//  console.log( multi2(2,3));
//  console.log( multi2(4,5));
//  console.log( multi2(2,a));


  // 			5 пример

//  function multi2(x = 8, y = 9){
// 	return x * y 
//  }
//  console.log( multi2(2,3)); 	//6
//  console.log( multi2());		//72
//  console.log( multi2(10));		//90

// 												АНОНИМНЫЕ ФУНКЦИИ

// 			1 пример

// let f1 = document.querySelector('.f-1');

// f1.onclick = function(){  //анонимная функция
// 	console.log('hello');
// }

// f1.onclick = () => {       //стрелочная функция //анонимная функция
// 	console.log('hello');
// }

// // 			2 пример

// document.querySelector('.f-2').onclick = function () {  //анонимная функция
// 	console.log('++++++');
// }
// document.querySelector('.f-2').onclick = () => {   //стрелочная функция //анонимная функция
// 	console.log('arrow');
// 	console.log('++++++');
// }

// // 			3 пример (сокращенные записи)

// function (a,b) {
// }

// (a,b) => {   //стрелочная функция

// }

///////////////

// let b = 3

// let arrow = function () {
// 	return 56 * b;
// }
// console.log(arrow());
//  или

// let arrow = a =>  56 * b  //стрелочная функция
// console.log(arrow());
// //  или

// let arrow = (a) =>  56 * b  //стрелочная функция

// console.log(arrow());

//////////////////////////////////////////////////////////////////////////////////////////

// 														РАБОТА С DOM

// const one = document.querySelector('.one');

// one.style.border = '5px solid red';
// one.style.borderRadius = '10px';
// one.style.width = '150px';

// console.log(one.style);

// one.classList.add('two'); // добавляем класс
// one.classList.add('two', 'three'); // добавляем несколько классов
// one.classList.remove('three'); // удаляем класс
// one.classList.remove('two', 'three'); // удаляем несколько классов

// const toggle = document.querySelector('.toggle');

// toggle.onclick = function (){   //получаем класс по нажатию кнопки
// 	this.classList.toggle('three')
// }



//														получаем данные от атрибута 

// console.log(oneOne.getAttribute('data'));   // от data
// console.log(document.querySelectorAll('link')[0].getAttribute('href'));  // от link через массив 

// // 													добавляем атрибут  
// const oneOne = document.querySelector('.one_one');
// oneOne.setAttribute('data-num', 6)

// 			1 пример

// let gas = document.querySelectorAll('.gas');
// for(let i = 0; i < gas.length; i++){
// 	gas[i].onclick = function(){
// 		let gallons = document.querySelector('.gallons').value;
// 		let amount = this.getAttribute('data');
// 		console.log(gallons * amount);
// 	}
// }

// // 			2 пример выводим элемент на страницу

// let a = document.createElement('div'); //создаем div
// a.innerHTML = 'Hello';						//пишем что будет в div
// a.classList.add('one')						//добавляем класс в div
// a.onclick = function(){  					//выводим элемент в alert
// 	alert('hello')
// }

// document.querySelector('.test').appendChild(a) //выводим div на страницу
// console.log(a);

//////////////////////////////////////////////////////////////////////////////////////////

//														МАССИВЫ

// let a = 'Tom';
// let b = '37';
// let z7 = 'Овен';

// let c = ['Tom',37,'Овен']; // считаем с 0, 1, 2
// let d = []; // пустой массив

// console.log(c[2]); // Овен
// console.log(c[5]); // undefined
// console.log(c); // [ 'Tom', 37, 'Овен' ]
// console.log(c.length); // длинна массива


//////////////////////////////////////////////////////////////////////

//   меняем элемент в массиве

// let man = ['Tom', 37, 'Овен', 220 ];
// console.log(man);
// man[0] = 'Jack'; //меняем нулевой элемент в массиве
// console.log(man);

//////////////////////////////////////////////////////////////////////

//   добавляет в массив ещё элементы

// const array = [1, 'hi', true, null, undefined];
// array.push ('12', 2); 
// console.log(array); // [ 1, 'hi', true, null, undefined, '12', 2 ]
// console.log(array.length); // 7

//////////////////////////////////////////////////////////////////////

// меняем 1 и 4

// let a = [1, 2, 3, 4];
// console.log(a);
// console.log(a.length);

// let t = a[0]; // 1
// a[0] = a [a.length - 1];
// a[a.length - 1] = t;
// console.log(a);

// 			2 пример 

// let a = [1, 2, 3, 4];
// console.log(a);
// console.log(a.length);

// let t = a[0]; // 1
// a[0] = a [a.length - 1];
// a[a.length - 1] = t;
// console.log(a);

// // for( let i = 0; i < a.length; i++){
// // 	document.querySelector('.out-1').innerHTML += a[i] + ' '; 
// // }

// let out = '';
// for( let i = 0; i < a.length; i++){
// 	if (a[i] % 2 === 0){    // выводим четные числа
// 		out += a[i] + ' ';
// 	}

// }
// document.querySelector('.out-1').innerHTML = out; // выводим через innerHTML

//////////////////////////////////////////////////////////////////////

// находим максимальное число в массиве 

// let numbers = [1, 2, 4, 66, 77, 3, 65];
// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++){
// 	if (numbers[i] > max){
// 		max = numbers[i];
// 	}
// }
// console.log('max: ' + max);

//////////////////////////////////////////////////////////////////////

// находим сумму в массиве 

// let numbers = [1, 2, 4, 66, 77, 3, 65];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++){
// 	sum = sum + numbers[i];
// }
// console.log(sum);

//////////////////////////////////////////////////////////////////////

// 			push - добавляем в массив элементы

// const a = [1,2,3,4,5,6,7,8,9];
// const b = ['a','b','c','d','e','f',];

// console.log(a.length); // длинна масива а
// let c = a.push(10, 12); // добавляем в массив а ещё 2 элемента
// console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]

// console.log(b.length); // длинна масива b
// a.push('j', 'e'); // добавляем в массив а ещё 2 элемента
// console.log(b); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

// 			pop - удаляет элементы в конце массива

// const a = [1,2,3,4,5,6,7,8,9];
// a.pop(); // удаляет последний элемент (сколько раз вызвать столько раз и удалит)
// console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8]

// 			delete - удаляет элемент внутри массива, оставляет пустое место

// const a = [1,2,3,4,5,6,7,8,9]; //массив
// console.log(a.length); // длинна масива а 
// delete a[3]; //удаляем третий элемент
// console.log(a); // [ 1, 2, 3, <1 empty item>, 5, 6, 7, 8, 9 ]
// console.log(a.length); //длинна массива осталась такой же 

// 			splice удаляет элемент внутри массива

// const a = [1,2,3,4,5,6,7,8,9,10,11]; 
// a.splice(3, 1); // удаляем третий элемент, только один
// console.log(a); // [1, 2, 3, 5, 6, 7, 8, 9, 10, 11]
// a.splice(2, 3); // удаляем три элемента начиная со второго
// console.log(a); // [1, 2, 7, 8, 9, 10, 11]
// a.splice(2, 3, 'new element'); // удаляем три элемента начиная со второго + добавили 'new element'
// console.log(a); [ 1, 2, 3, 5, 6, 'new element', 11 ]; //[ 1, 2, 'new element', 10, 11 ]

// 			shift удаляет элемент вначале массива

// const a = [1,2,3,4]; 
// console.log(a); // [ 1, 2, 3, 4 ]
// a.shift(); // удаляет элемент вначале массива
// console.log(a); // [ 2, 3, 4]

//				unshift добавляет элемент вначале массива

// const a = [1,2,3,4]; 
// console.log(a); // [ 1, 2, 3, 4 ]
// a.unshift(12,33); // добавляет элемент вначале массива
// console.log(a); // [12, 33, 1, 2, 3, 4]