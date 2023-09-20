var firstNumber =+ prompt("enter first number");
var secondNumber =+ prompt("enter second number");
var thirdNumber =+ prompt("enter third number");

if (firstNumber > secondNumber && firstNumber > thirdNumber){
    document.write("<h1><center style='margin-top:5rem'>your first number " +firstNumber+ " is greatest !</center></h1>");
}

else if (secondNumber > firstNumber && secondNumber > thirdNumber){
    document.write("<h1><center style='margin-top:5rem'>your second number " +secondNumber+ " is greatest !</center></h1>");
}

else if (thirdNumber > firstNumber && thirdNumber > secondNumber){
    document.write("<h1><center style='margin-top:5rem'>your third number " +thirdNumber+ " is greatest !</center></h1>");
}

else if (firstNumber == secondNumber && firstNumber > thirdNumber && secondNumber > thirdNumber){
    document.write("<h1><center style='margin-top:5rem'>your first number " +firstNumber+ " and second number "+secondNumber+" are greatest !</center></h1>");
}

else if (thirdNumber == secondNumber && thirdNumber > firstNumber && secondNumber > firstNumber){
    document.write("<h1><center style='margin-top:5rem'>your second number " +secondNumber+ " and third number "+thirdNumber+" are greatest !</center></h1>");
}

else if (firstNumber == thirdNumber && firstNumber > secondNumber && thirdNumber > secondNumber){
    document.write("<h1><center style='margin-top:5rem'>your first number " +firstNumber+ " and third number "+thirdNumber+" are greatest !</center></h1>");
}

else if (firstNumber == secondNumber && firstNumber == thirdNumber){
    document.write("<h1><center style='margin-top:5rem'>your all numbers are equal "+firstNumber+" "+secondNumber+" "+thirdNumber+"</center></h1>")
}

else {document.write("please enter a number !");}


