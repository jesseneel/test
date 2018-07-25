var nam = document.querySelector('#name');
var checkBox = document.querySelector('#checkse');
var btn1 = document.querySelector('#btn1');

function getAge() {
	var getValue = document.getElementById('age').value;
	return getValue;
}


console.log('age');

function cheksB() {
	if (checkBox.checked) {
		if( getAge() >= 18){
			alert('Доступ разрешен');
		}
		else {
			alert('Доступ запрещен Вам нет 18 лет');
		}
	}
	else {
		alert( 'Доступ запрещен, оформите подписку на рассылку' );
	}
}

btn1.addEventListener('click', cheksB);

