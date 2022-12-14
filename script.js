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

////////						 цикл for 

// 			1 пример for

// let div = document.querySelectorAll('.one');

// // console.log(div);

// for (let i = 0; i < div.length; i++){

// 	console.log(div[i]);
// 	div[i].style.background = 'red'; // меняем цвет div по циклу
// 	// if(i == 4 ) break; // принудительно остановить
// 	div[i].onclick = two; // по клику выполняем function	
// 	let list = div[i].innerHTML
// 	console.log(list);

// }
// function two() {
// 	console.log('work!!!');

// }

// 			2 пример for

// for (let i = 0; i < 10; i++){
// 	console.log(i);
// }

////////						 цикл while

// let k = 0;
// while(k < 7){
// 	if (k === 3){
// 		break
// 	}
	
// 	console.log('k: ' + k);
// 	k++;
// }
// 		1 пример сумма чисел от 0 до 10

// let sum = 0;
// let p = 0;
// while(p <= 10){
// 	sum = sum + p;
// 	p++;
// }
// console.log(sum); //55

// 		2 пример
// let out = document.querySelector('.out')
// let p = 0; 
// let outStr = '';

// while (p < 4){
// 	let p1 = 0;
// 	while(p1 < 4){
// 		outStr += '*';
// 		p1++;
// 	}
// 	outStr += '<br>';
// 	p++;
// }
// out.innerHTML = outStr;

////////						 цикл Do while (сначало выводим код, потом его проверяем)

// let count = 10;
// do {
// 	console.log(count);  
// 	count--;
// } while(count>7)


//			1 пример

// let out = document.querySelector('.out')
// let p = 0; 
// let outStr = '';
// let flag = 3;

// while (p < 4){
// 	let p1 = 0;
// 	while(p1 < 4){
// 		if(p1<flag){
// 			outStr += '0'
// 		}
// 		else{
// 			outStr += '*';
// 		}
// 		p1++;	
// 	}
// 	flag--;
// 	outStr += '<br>';
// 	p++;
// }
// out.innerHTML = outStr;

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


// 										цикл for of

//			пример перебор массива с помощью цикла for  in (желательно только с objects)

// let arr = [3, 6, 9, 4];

// for (let key in obj){			
// 	console.log(obj[key]);
// }

//			пример перебор массива с помощью цикла for  of

// let arr = [3, 6, 9, 4];

// for (let key of arr){				// for of
// 	console.log(key);
// }

//  4-1 пример перебор массива
// let divs1 = document.getElementsByClassName('num');
// let divs2 = document.querySelectorAll('.num');
// console.log(divs1);
// console.log(divs2);

// for(let i = 0; i < divs1.length; i++){
// 	console.log(divs1[i]);
// }

// for(let i = 0; i < divs2.length; i++){
// 	console.log(divs2[i]);
// }

//  4-2 пример перебор массива			// for  in

// let divs1 = document.getElementsByClassName('num');
// let divs2 = document.querySelectorAll('.num');
// console.log(divs1);
// console.log(divs2);

// for (let key in divs1){
// 	console.log(divs1[key]);
// }
// for (let key in divs2){
// 	console.log(divs2[key]);
// }

//  4-3 пример перебор массива			// for of

// let divs1 = document.getElementsByClassName('num');
// let divs2 = document.querySelectorAll('.num');
// console.log(divs1);
// console.log(divs2);

// for (let item of divs1){
// 	console.log(item);
// }
// for (let item of divs2){
// 	console.log(item);
// }

//											 ДВУМЕРНЫЕ МАССИВЫ

// 1  пример

// let b = [
// 	[1,2,3],
// 	[4,5,6],
// 	[7,8,9],
// ]
// for(let i = 0; i < b.length; i++){
// 	let c = b[i];
// 	for( let j = 0; j < c.length; j++)
// 	console.log(c[j]); 
// }

// //1
// //2
// //3
// //4
// //5
// //6
// //7
// //8
// //9

// 2  пример

// let b = [
// 	[1,2,3],
// 	[4,5,6],
// 	[7,8,9],
// ]
// for(let i = 0; i < b.length; i++){
// 	let c = b[i];
// 	for( let j = c.length - 1; j >= 0; j--)
// 	console.log(c[j]); 
// }

// //3
// //2
// //1
// //6
// //5
// //4
// //9
// //8
// //7

// 3  пример

// let b = [
// 		[1,2,3],
// 		[4,5,6],
// 		[7,8,9],
// 	]
// let out = '';

// for(let i = 0; i < b.length; i++){
// 	let c = b[i];
// 	for(let j = 0; j < c.length; j++){
// 		console.log(b[i][j]);
// 		out += b[i][j] + ' ';
// 	}
// 	out += '<br>';
// }
// document.querySelector('.out').innerHTML =  out;

// 4  пример

// let b = [
// 		[1,2,3],
// 		[4,5,6],
// 		[7,8,9],
// 	]
// let out = '';

// for(let i = 0; i < b.length; i++){
// 	let c = b[i];
// 	for(let j = 0; j < c.length; j++){
// 		console.log(b[i][j]);
// 		if (b[i][j] > 4 ) {
// 			out += b[i][j] + ' ';
// 		}
// 	}
// 	out += '<br>';
// }
// document.querySelector('.out').innerHTML =  out;
// console.log(out);

/////////////////////////////////////////////////////////////////////////////////////

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
// console.log(numRound);	//12
// let numRound = Math.floor(num);//округление в меньшую сторону
// console.log(numRound);	//12
// let numRound = Math.ceil(num);//округление в большую сторону
// console.log(numRound);	//13
// let numRound = Math.trunc(num);// оставляет целую часть	
// console.log(numRound);	//12

// let numRound = num.toFixed(2);// оставляет 2 числа после запятой	
// console.log(numRound);	//12.16

// console.log(Math.max(1, 5, 66, 7)); //максимальное число		// 66
// console.log(Math.min(1, 5, 66, 7)); //минимальное число 		/ 1
// console.log(Math.pow(2,4)); //два в четвертой степени 
// console.log(Math.sqrt(16)); //корень из числа 16 // 4
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

//   меняем элемент в массиве
// let man = ['Tom', 37, 'Овен', 220 ];
// console.log(man);
// man[0] = 'Jack'; //меняем нулевой элемент в массиве
// console.log(man);

//   добавляет в массив ещё элементы
// const array = [1, 'hi', true, null, undefined];
// array.push ('12', 2); 
// console.log(array); // [ 1, 'hi', true, null, undefined, '12', 2 ]
// console.log(array.length); // 7

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

/////////////////////////////////////////////////////////////////////////////////////

// 									МЕТОДЫ   МАССИВОВ

// 			indexOf - возвращает первый индекс, по которому данный элемент  
//				может быть найден в массиве или -1, если такого индекса нет.

// const a = [9, 5, 7, 5, 7, 5, 2];
// const b = ['Hi', 'hello'];
// // console.log(a);
// // console.log(a.indexOf(5)); // находит первую 5 из списка

// console.log(a.indexOf(5, 3)); 

// function indexOfEmul(ar,item,from = 0){

// 	for(let i = from; i<ar.length; i++){
// 		if(ar[i] === item){
// 			return i;
// 		}
// 	}
	
// 	return -1;
// }

// 			push - добавляем в массив элементы

// const a = [1,2,3,4,5,6,7,8,9];
// const b = ['a','b','c','d','e','f',];

// console.log(a.length); // длинна масива а
// let c = a.push(10, 12); // добавляем в массив а ещё 2 элемента
// console.log(a); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]

// console.log(b.length); // длинна масива b
// b.push('j', 'e'); // добавляем в массив а ещё 2 элемента
// console.log(b); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'j', 'e' ]

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

//				map создаёт новый массив с результатом вызова указанной функции для каждого элемента массива

// let a = [4, 5, 12, 200, 1, 0, -2];

// let b = a.map(function(item, index){
// 	console.log(index);
// 	return item * 5
// }) 
// console.log(b); //[20, 25, 60, 1000, 5, 0, -10]

// 		или

// let b = a.map(item => item * 5) //стрелочная function
// console.log(b);

//				filter создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции

// let a = [4, 5, 12, 200, 1, 0, -2];

// let c = a.filter(function(item, index){
// 	if(item > 0){
// 		return true;
// 	}
// })
// console.log(c);

//				split разбивает объект String на массив строк путём разделения строки указанной подстрокой.

// let a = 'hello my friend';
// console.log(a.split([' '])); //указываем разделитель // ['hello', 'my', 'friend']

//				join объединяет все элементы массива в строку.

// let a = [1,2,3];
// console.log(a.join([', '])); // 1, 2, 3
// console.log(typeof a.join()); //string
// console.log(a);

//				forEach выполняет указанную функцию один раз для каждого элемента в массиве

// let b = [2, 4, 7, 3];

// b.forEach(function(elem, index, array){
// 	console.log(`
// 	'elem: ${elem}
// 	'index: ${index}
// 	'array: ${array}
// 	`);
// });

// 0
// one
// -----
// 1
// two
// -----
// 2
// three
// -----


/////////////////////////////////////////////////////////////////////////////////////


// 										ОБЪЕКТЫ (Ассоциативные массивы)

// const user = {
// 	name : 'Tom',
// 	age : 30,
// 	city : 'Minsk',
// 	'like color': 'green',
// 	info: 'empty',
// };

// или так
// user.block = 'box'; // добавляем значение в объект
// user.info = 666;	// перезаписываем значение объекта
// // delete user.info; // удаляем значение
// // delete user.block; // удаляем значение

// console.log(user); // выводим объект
// console.log(user.city); // выводим значение city

// или так

// user['info'] = 555; // перезаписываем значение объекта
// console.log(user); // выводим объект

// let k = 'name';	
// console.log(user[k]); // выводим значение name

// let out = '';
// for( let key in user){
// 	out += `${key} - ${user[key]}<br>`
// }
// console.log(out);
// document.querySelector('.out').innerHTML = out; //выводим на страницу

////////////////////////////////////////////////////////////////////////

//													 JSON

// JSON.parse // конвертируем строку в объект

// JSON.stringify // конвертируем объект в строку

////////////////////////////////////////////////////////////////////////

//													 Работа с DOM

// const out = document.querySelector('.out');

// out.style.width = '100px';
// out.style.paddingBottom = '40px';
// out.style.background = 'red';
// out.classList.add('two','three');
// out.classList.remove('three');

// const button = document.querySelector('.toggle');

// button.onclick = function(){
// 	this.classList.toggle('three'); 
// }

// //					атрибуты

// console.log(out.getAttribute('data'));
// console.log(document.querySelector('link').getAttribute('href'));


///////// тесты

// let srt = 'text';
// let a = 7;
// console.log(srt);
// console.log(`
// 	${srt}
// 	${a}
// `);
// let b = Math.max(1,4,6,3,8,2)
// console.log(b);

// let c = Math.pow(3,4)
// console.log(c);

// let f = 2.6
// let numRound = Math.floor(f);//округление в меньшую сторону
// console.log(numRound);
// let f = 2.2
// let numRound = Math.ceil(f);//округление в меньшую сторону
// console.log(numRound);

// let f = 2.4
// let numRound = Math.round(f);//округление в меньшую сторону
// console.log(numRound);

// let f = 2.7
// let numRound = Math.trunc(f);// оставляет целую часть
// console.log(numRound);

// let arr = [ 5, 2, 'str', true]
// console.log(arr[2] = 'text');

// const a = [9,8,7,5];
// const b = ['hi', 'hello']
// // console.log(a.indexOf(7));
// // if(a.indexOf(7) !== -1){
// // 	console.log('yes');
// // }else{
// // 	console.log('no');
// // }
// console.log(b.indexOf('hello'));
// console.table(b);

// if(a.indexOf(7) !== -1){
// 	console.log('yes');
// }else{
// 	console.log('no');
// }
// let search = document.querySelector('.search')
// let btn = document.querySelector('.btn');

// btn.addEventListener('click', search1) 

// function search1(){
// 	console.log(search.value)
// }
// let car = {
// 	name: 'Renault',
// 	model: 'laguna',
// 	price: '1300'
// }
// console.log('car obj', car);
// let carStr = JSON.stringify(car);
// console.log('car obj', carStr);


// const a = [9, 8, 7, 5];
// console.log(a.indexOf(7));
// if (a.indexOf(7) !== -1){
// 	console.log('yes');
// }
// else {
// 	console.log('no');
// }

// const b = ['hi', 'hello'];
// console.log(b.indexOf('hello'));
// // if (a.indexOf('hi') !== -1){
// // 	console.log('yes');
// // }
// // else {
// // 	console.log('no');
// // }

// const a = [3, 9, 8, 7, 5, 7, 5, 2];
// // console.log(a.indexOf(8));
// // console.table(a)

// function indexOfEmul(ar, item, from = 0){
// 	for( let i = from; i < ar.length; i++){
// 		if (ar[i] === item){
// 			return i;
// 		}
// 	}
// 	return -1
// }

// console.log(indexOfEmul(a, 8));
// const a = [1, 2, 3, 4, 5, 6, 7, 8];
// a.forEach((elem) => {
// 	console.log(elem);
// })




// !!!
// const data = [
// 	{
// 		name : 'Alex',
// 		age : '25',
// 	},
// 	{
// 		name : 'Tom',
// 		age : '20',
// 	},
// ];
// const getAge = [];
// const getName = [];

// data.forEach(elem =>{
// 	getAge.push(elem.age)
// })
// console.log(getAge);


// data.forEach(elem =>{
// 	getName.push(elem.name)
// })
// console.log(getName);

// /////////////////////////////////

// const arr = ['a', 'b', 'c', 'd', 'e'];

// arr.forEach = (item) => {
// 	console.log(item);
// }
// console.log(arr);

// function dd (item){
// 	console.log(item);
// }
// const arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach((item,i,array) => {
// 	console.log(item,i,array);
// 	console.log('======');
// })




// test 2
// const items = [
// 	{ratingRevievs: "264 отзыва", price: {oldUan: "4 333 грн", newUan: "3 799 грн"}, name: "Motorola MOTO G4 (XT1622) Black"}, 
// 	{ratingRevievs: "1355 отзывов", price: "4 999 грн", name: "Samsung Galaxy J7 J700H/DS Black + карта памяти 16гб + чехол + защитное стекло!"},
// 	{ratingRevievs: "426 отзывов", price: "5 199 грн", name: "Samsung Galaxy J5 (2016) J510H/DS Black + защитное стекло + чехол!"}, 
// 	{ratingRevievs: "403 отзыва", price: "4 349 грн", name: "Xiaomi Redmi Note 4X 3/32GB Black"},
// 	{ratingRevievs: "488 отзывов", price: "6 199 грн", name: "Samsung Galaxy J7 (2016) J710F/DS Gold + защитное стекло + чехол!"}, 
// 	{ratingRevievs: "198 отзывов", price: {oldUan: "3 495 грн", newUan: "2 995 грн"}, name: "Lenovo K5 (A6020a40) Silver"}, 
// 	{ratingRevievs: "352 отзыва", price: {oldUan: "9 799 грн", newUan: "7 999 грн"}, name: "Apple iPhone 5s 16GBSpace Gray"}, 
// 	{ratingRevievs: "59 отзывов", price: "5 999 грн", name: "Nokia 5 Dual Sim Tempered Blue"}, 
// 	{ratingRevievs: "119 отзывов", price: "11 999 грн", name: "Samsung Galaxy A5 2017 Duos SM-A520 Black + карта памяти 128гб!"}, 
// 	{ratingRevievs: "1106 отзывов", price: "3 999 грн",name: "Samsung Galaxy J5 J500H/DS Black + чехол + защитное стекло!"}, 
// 	{ratingRevievs: "380 отзывов", price: "2 199 грн", name: "Huawei Y3 II Tiffany (White-Blue) + чехол + защитное стекло!"},
// 	{ratingRevievs: "86 отзывов", price: {oldUan: "24 999 грн", newUan: "22 999 грн"}, name: "Samsung Galaxy S8 64GB Midnight Black + картапамяти 64гб + оригинальный чехол!"}, 
// 	{ratingRevievs: "177 отзывов", price: "6 499 грн", name: "Huawei P8 Lite 2017 White + УМБ Huawei AP08Q + защитное стекло + чехол!"}, 
// 	{ratingRevievs: "347 отзывов", price: "4 299 грн", name: "Xiaomi Redmi 4X 3/32GB Black (Международная версия)"}, 
// 	{ratingRevievs: "709 отзывов", price: "2799 грн", name: "Samsung Galaxy J1 2016 SM-J120H Black + защитное стекло + чехол!"}, 
// 	{ratingRevievs: "527 отзывов", price: "3 999 грн", name: "Huawei Y6 Pro Gold + чехол + защитное стекло!"}, 
// 	{ratingRevievs: "66 отзывов", price: "16 499 грн", name: "Apple iPhone 6s 32GB Gold"},
// 	{ratingRevievs: "14 отзывов", price: "11 499 грн", name: "Apple iPhone 6 32GB Space Gray"}, 
// 	{ratingRevievs: "70 отзывов", price: {oldUan: "7 399 грн", newUan: "5 999 грн"}, name: "Asus ZenFone 2 32GB (ZE551ML) Black"}, 
// 	{ratingRevievs: "45 отзывов", price: "4 299 грн", name: "Nokia 3 Dual Sim Silver White + сертификаты 500 грн!"}, 
// 	{ratingRevievs: "376 отзывов", price: "3 899 грн", name: "Meizu M3 Note 32GB Grey (Международная версия)"}, 
// 	{ratingRevievs: "111 отзывов", price: {oldUan: "9 999 грн", newUan: "7 999 грн"}, name: "Sony Xperia X Dual (F5122) White"}, 
// 	{ratingRevievs: "40 отзывов", price: "2 222 грн", name: "Lenovo Vibe C (A2020) Black + УМБ PowerPlant 5200 mAh в подарок!"},
// 	{ratingRevievs: "93 отзыва", price: "18 999 грн", name: "Apple iPhone 7 32GB Black"},
// 	{ratingRevievs: "33 отзыва", price: "16 999 грн", name: "Huawei P10 4/32GB Black + сертификат 2500грн + чехол Huawei Smart View Cover!"}, 
// 	{ratingRevievs: "71 отзыв", price: {oldUan: "2 399 грн", newUan: "1 999 грн"}, name: "LG K5 X220ds Gold"}, 
// 	{ratingRevievs: "39 отзывов", price: "2 995 грн", name: "Lenovo C2 Power (K10a40) Black"},
// 	{ratingRevievs: "156 отзывов", price: "2 599 грн", name: "Nous NS 5006 Gold"}, 
// 	{ratingRevievs: "40 отзывов", price: "19 689 грн", name: "LG G6 Mystic White"}, 
// 	{ratingRevievs: "24 отзыва", price: "5 995 грн", name: "Motorola MOTO G5 (XT1676) Grey"}, 
// 	{ratingRevievs: "7 отзывов", price: {oldUan: "10 999 грн", newUan: "9 999 грн"}, name: "HTC One X10 Dual Sim Silver"}, 
// 	{ratingRevievs: "18 отзывов", price: {oldUan: "5 999 грн", newUan: "4 999 грн"}, name: "Sony Xperia L1 Dual Black"}
// ];

// function sort (arr) {
// 	const temp = JSON.parse(JSON.stringify(arr))
	
// 	temp.forEach(item => {
// 		item.ratingRevievs = +item.ratingRevievs.replace(/\D/g, '');
// 	});
// 	temp.sort((a, b) => a.ratingRevievs > b.ratingRevievs ? 1 : -1);
// 	console.log(temp);
// }
// sort(items)

// тест 3

// const mixData = [ 
// 	10, 
// 	'Pussy', 
// 	{
// 		name: 'Kitty',
// 	 	year: 3
// 	},
// 	['мяу', 'мур', 'РрррР',
// 		{
// 			name: 'Lucky', 
// 			year: 3,
// 			family: ['papa', 'mama']
// 		}	
// 	]
// ];
// console.log(mixData[2].name); // достали Kitty
// console.log(mixData[3][0]); // достали мяу
// console.log(mixData[3][3].family[1]); 

//	test 4
// const object = {
// 	firstName: 'Tom',
// 	lastName: 'Gans',
// 	adress: {
// 		street: 'Sputnik 1',
// 		city: 'Minsk',
// 		postCode: 1011100
// 	},
// 	phoneNumper: [
// 		'1 23 456 789',
// 		'9 87 654 321'
// 	]
// }
// const json = JSON.stringify(object)
// console.log(json);
// const parse = JSON.parse(json)
// console.log(parse);