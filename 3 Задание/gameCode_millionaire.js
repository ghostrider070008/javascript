var answer, ok;
// первый вопрос
do {
	ok=false;
	answer=+prompt("Сумма вопроса:"+qwestions[0].summa+"\n"+qwestions[0].text_q1+"\n"+qwestions[0].a1+"\n"+qwestions[0].a2+"\n"+qwestions[0].a3+"\n"+qwestions[0].a4);
	if (answer == -1) {
		alert('Вы закончили игру с выигрышом в 0 рублей');
		break;
	}
	else {
		ok = isAnswer(4, answer);
	}
	} while (!ok);
switch (answer){
	case qwestions[0].correct: 
	do {
	ok=false;
	answer=+prompt(qwestions[1].text_q2+"\n"+qwestions[1].a1+"\n"+qwestions[1].a2+"\n"+qwestions[1].a3+"\n"+qwestions[1].a4);
	if (answer == -1) {
		alert('Вы закончили игру с выигрышом в 0 рублей');
		break;
	}
	else {
		ok = isAnswer(4, answer);
	}
	} while (!ok);
	// Второй вопрос
		switch (answer){
			case qwestions[1].correct: 
				do { // Вывод третьего вопроса
					ok=false;
					answer=+prompt(qwestions[2].text_q2+"\n"+qwestions[2].a1+"\n"+qwestions[2].a2);
					if (answer == -1) {
					alert('Вы закончили игру с выигрышом в 0 рублей');
					break;
							};
					if (answer == -2) {
					alert("Вы решили забрать деньги! \n Ваш выигрыш составил "+qwestions[0].summa+"\n Правильный ответ на вопрос был"+qwestions[1].a4+"Спасибо за игру!");
					break;
					}
					if (answer>0) {
							ok = isAnswer(4, answer);
						}
				} while (!ok);
					break;
			case -1:
				break;
			default:
	alert('Вы ответили не правильно. Правильный ответ:'+qwestions[1].a1+"\n Ваш выигрыш составил 0 рублей");
};
	
	break;
	case -1:
	break;
	default:
	alert('Вы ответили не правильно. Правильный ответ:'+qwestions[0].a1+"\n Ваш выигрыш составил 0 рублей");
};
	
	//функция проверки ответа
function isAnswer(q, answer) {
    if (isNaN(answer) || !isFinite(answer)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (answer < 1 || answer > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true; 
}