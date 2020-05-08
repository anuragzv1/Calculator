

var expression = "";
var prevKey  = "";

var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var dot = document.getElementById("dot");
var multiply = document.getElementById("multiply");
var divide = document.getElementById("divide");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var equalto = document.getElementById("equalto");
var clear = document.getElementById("clear");
var plusminus = document.getElementById("plusminus");
var percentage = document.getElementById("percentage");

zero.addEventListener('click',function(){ 
    expression+="0";
    document.getElementById("main-screen").innerText = expression;

 });


one.addEventListener('click',function(){ 
    expression+="1";
    document.getElementById("main-screen").innerText = expression;

 });

 two.addEventListener('click',function(){ 
    expression+="2";
    document.getElementById("main-screen").innerText = expression;

 });

 three.addEventListener('click',function(){ 
    expression+="3";
    document.getElementById("main-screen").innerText = expression;

 });

 four.addEventListener('click',function(){ 
    expression+="4";
    document.getElementById("main-screen").innerText = expression;

 });

 five.addEventListener('click',function(){ 
    expression+="5";
    document.getElementById("main-screen").innerText = expression;

 });
 six.addEventListener('click',function(){ 
    expression+="6";
    document.getElementById("main-screen").innerText = expression;

 });
 seven.addEventListener('click',function(){ 
    expression+="7";
    document.getElementById("main-screen").innerText = expression;

 });
 eight.addEventListener('click',function(){ 
    expression+="8";
    document.getElementById("main-screen").innerText = expression;

 });
 nine.addEventListener('click',function(){ 
    expression+="9";
    document.getElementById("main-screen").innerText = expression;

 });

 dot.addEventListener('click',function(){ 
    expression+=".";
    document.getElementById("main-screen").innerText = expression;

 });

 equalto.addEventListener('click',function(){ 
    expression=eval(expression);
    document.getElementById("main-screen").innerText = expression;

 });


add.addEventListener('click',function(){ 
    expression+="+";
    document.getElementById("main-screen").innerText = expression;

 });
 subtract.addEventListener('click',function(){ 
    expression+="-";
    document.getElementById("main-screen").innerText = expression;

 });

multiply.addEventListener('click',function(){ 
   expression+="*";
   document.getElementById("main-screen").innerText = expression;

});
divide.addEventListener('click',function(){ 
    expression+="/";
    document.getElementById("main-screen").innerText = expression;

 });

 clear.addEventListener('click',function(){ 
    expression="";
    document.getElementById("main-screen").innerText = expression;

 });
 plusminus.addEventListener('click',function(){ 
    expression=-1*expression;
    document.getElementById("main-screen").innerText = expression;

 });
 percentage.addEventListener('click',function(){ 
    expression = eval(expression)/100;
    document.getElementById("main-screen").innerText = expression;

 });



window.addEventListener('keydown', function (event) {

    var ch = event.keyCode;
    console.log(ch);
    
    if (ch == 187) expression += "+";
    else if (prevKey == 16&&ch == 56) expression += "*";
    else if (ch == 191) expression += "/";
    else if (ch == 189) expression += "-";
    else if(ch==8){
        if(expression.length==1)expression="";
        expression = expression.substr(0 ,expression.length-1);
        document.getElementById("main-screen").innerText = expression;

    }
    else if(prevKey==16 && ch ==53){
        expression = eval(expression)/100;
        document.getElementById("main-screen").innerText = expression;

    }
    else if (ch == 27) {
        expression = "";
        document.getElementById("main-screen").innerText = expression;

    }

    else if (ch == 187 || ch == 13) {
        var ans = eval(expression);
        document.getElementById("main-screen").innerText = ans;
        expression = ans;
    }
    else if (ch >48 && ch <= 57) {
        expression += event.keyCode - 48;
        document.getElementById("main-screen").innerText = expression;
    }
    console.log(expression);
    prevKey = ch;
});