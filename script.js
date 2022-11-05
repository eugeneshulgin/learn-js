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

////////						 test 2

let number = 7;
switch (number) {
	case 0:
		console.log('Вы ввели число 0');
		break;
	case 1:
		console.log('Вы ввели число 1');
		break;
	case 2:
	case 3:
		console.log('Вы ввели число 2, а может и 3');
		break;
	default:
		console.log('Вы ввели число большее 3');
}