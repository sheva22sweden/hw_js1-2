var userName = ['', '', '', '', ''];

userName['0'] = 'Діма';
userName['1'] = 'Вася';
userName['2'] = 'Вова';
userName['3'] = 'Андрей';
userName['4'] = 'Ігор';

for (var i = 0; i < userName.length; i++) {
  prompt("Введіть ім'я:");
}
  console.log(userName);


var user = prompt("Введіть ім'я користувача:");

if (user == 'Діма') {
	alert ('Діма, ви успішно увійшли');
} else if (user == 'Вася') {
	alert ('Вася, ви успішно увійшли');
} else if (user == 'Вова') {
	alert ('Вова, ви успішно увійшли');
} else if (user == 'Андрей') {
	alert ('Андрей, ви успішно увійшли');
} else if (user == 'Ігор') {
	alert ('Ігор, ви успішно увійшли');
} else {
	alert ('Не правильно введені дані!');
}

console.log ('Out of cicle!');

										// and of file







