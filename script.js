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

//////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////

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

// //////////////////////////////////////////////////////////////////////

// // 			2 пример применение кавычек

// const text2 = `I enjoy sport, 'watch TV' and often 'write code'`;
// const text2q = "I enjoy sport, \'watch TV\' and often \"write code\"";
// console.log(text2);
// console.log(text2q);

// //////////////////////////////////////////////////////////////////////

// // 			3 пример мультистроки

// const text3 = `
// I enjoy sport
// watch TV
// write code
// `
// console.log(text3);

// //////////////////////////////////////////////////////////////////////

// // 			4 пример Интерполяция - переменные

// const n4 = 'коды';
// const text4 = `Кто пишет ${n4}, тот ночью не спит`;
// const text4q = 'Кто пишет ' + n4 + ', тот ночью не спит';
// console.log(text4);
// console.log(text4q);

// //////////////////////////////////////////////////////////////////////

// // 			5 пример Интерполяция - выражения

// function test(){
// 	return 1000;
// }
// const n5 = 15;
// const text5 = `Кто пишет ${n5 + 100 + Math.random() + test()}, тот ночью не спит`;
// console.log(text5);

// //////////////////////////////////////////////////////////////////////

// // 			6 пример HTML шаблоны

// const header = 'шаблонные строки';
// const tags = ['шаблонные строки', 'шаблонные литералы', 'ES6'];

// let html = `<h2>${header}</h2><ul>`;
// for (const x of tags){
// 	html += `<li>${x}</li>`
// }
// html += `</ul>`;

// document.querySelector('.out').innerHTML = html;