var answer, ok, correct;
q_num=0;
correct=true;
alert("Приветствуем тебя, Дорогой друг на игре: \n \"Кто хочет стать миллионером!\"")

//цикл Вопросов
for (i=1; ((i<=15) && (correct=true)); i++) {
	do{
ok = conclusionQuestion(q_num);
	} while (ok == false);
correct = qwestionsChek(answer);
if (correct == false){
	alert ('Вы проиграли.\n Правильный ответ на вопрос был:\n'+qwestions[q_num].correct_answer+"\nСпасибо за игру!");
	break;
	}
	
if (answer == -1) {
		break;
}
if (answer == -2) {
		break;
}
if (q_num == 15){
	alert('Поздравляем Вы выиграли максимальную сумму в 3 000 000 рублей \n Спасибо за игру!\n Вы просто гений!')
	break;
}
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
		//i=16;
		return correct;
	}
}

// функция вывода вопроса
function conclusionQuestion(q_num){
	//answer = +prompt("Сумма вопроса:"+qwestions[q_num].summa+"\n"+qwestions[q_num].text_q+"\n"+qwestions[q_num].a1+"\n"+qwestions[q_num].a2+"\n"+qwestions[q_num].a3+"\n"+qwestions[q_num].a4);
	do {
	ok=false;
	answer = +prompt("Введите: \n \"-1\" - Для выхода из игры\n \"-2\" - Для взятия денег, за предыдущий вопрос \nВопрос на : "+qwestions[q_num].summa+' рублей'+"\n"+qwestions[q_num].text_q+"\n"+qwestions[q_num].a1+"\n"+qwestions[q_num].a2+"\n"+qwestions[q_num].a3+"\n"+qwestions[q_num].a4);
	//answer=+prompt(qwestions[1].text_q2+"\n"+qwestions[1].a1+"\n"+qwestions[1].a2+"\n"+qwestions[1].a3+"\n"+qwestions[1].a4);
	if (answer == -1) {
		alert('Вы закончили игру с выигрышом в 0 рублей');
		break;
	}
	if ((answer == -2) && (q_num>0)) {
		alert('Вы решили забрать деньги!\nВаш выигрыш составил '+ qwestions[q_num-1].summa+' рублей\nИгра закончена. Спасибо за игру!');
		break;
}	
	if ((answer == -2) && (q_num==0)) {
	alert('Вы не можете забрать деньги на первом вопросе игры!\nПожалуйста ответьте правильно хотя бы на один вопрос, чтобы выиграть минимальную сумму в 500 рублей!');
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