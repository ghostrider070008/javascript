function mathOperation(arg1, arg2, operation){
	console.log("arg1="+arg1);
	console.log("arg2="+arg2);
	switch (operation){
		case "+": {alert("Сложение="+(arg1+arg2));
		break;			
		}
		case "-": {alert("Вычитание="+(arg1-arg2));
		break;			
		}
		case "*": {alert("Вычитание="+(arg1*arg2));
		break;			
		}
		case "/": {alert("Вычитание="+(arg1/arg2));
		break;			
		}
	}
}
var a=Math.round((Math.random()*50-25)), b=Math.round((Math.random()*50-25)), operation=prompt("Введите операцию (+,-,*,/):");
mathOperation(a,b,operation);