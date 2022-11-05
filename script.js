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



//////////////////////////////////////////////////////////////////////