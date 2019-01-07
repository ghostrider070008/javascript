var answer, ok, correct, correct_str;
q_num=0;
correct=true;
for (i=1; ((i<=15) && (correct=true)); i++) {
conclusionQuestion(q_num);
correct = qwestionsChek(answer);
if (correct == false){
	alert ('Вы закончили игру с выигрышом в 0 рублей\n Правильный ответ на вопрос был: '+qwestions[q_num].correct+"Спасибо за игру!");
}
/*
if (answer == -1) {
		alert('Вы закончили игру с выигрышом в 0 рублей');
		i=16;
}*/
}

//функция проверки ответа
function qwestionsChek(answer){
	var correct;
	if ((answer==qwestions[q_num].correct) && (answer>0) && (answer<5) ) { 
		correct =  true;
	++q_num;
		return correct;
	}
	if ((answer>0) && (answer<5) && (answer!=qwestions[q_num].correct)) {
		correct = false;
		i=16;
		return correct;
	}
}

// функция вывода вопроса
function conclusionQuestion(q_num){
	//answer = +prompt("Сумма вопроса:"+qwestions[q_num].summa+"\n"+qwestions[q_num].text_q+"\n"+qwestions[q_num].a1+"\n"+qwestions[q_num].a2+"\n"+qwestions[q_num].a3+"\n"+qwestions[q_num].a4);
	do {
	ok=false;
	answer = +prompt("Сумма вопроса:"+qwestions[q_num].summa+"\n"+qwestions[q_num].text_q+"\n"+qwestions[q_num].a1+"\n"+qwestions[q_num].a2+"\n"+qwestions[q_num].a3+"\n"+qwestions[q_num].a4);
	//answer=+prompt(qwestions[1].text_q2+"\n"+qwestions[1].a1+"\n"+qwestions[1].a2+"\n"+qwestions[1].a3+"\n"+qwestions[1].a4);
	if (answer == -1) {
		alert('Вы закончили игру с выигрышом в 0 рублей');
		break;
	}
	else {
		ok = isAnswer(4, answer);
	}
	} while (!ok);
	//isAnswer(4,answer);
}
// функция проверки на корректность
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