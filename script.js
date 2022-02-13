const Clear = document.querySelector(".clear");
const equalSign = document.querySelector(".equalSign");
let equationViewer = document.querySelector(".screen")

const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const plus = document.querySelector(".plus");
const subtract = document.querySelector(".subtract");

//querySelectorall then foreach
const numberOne = document.querySelector(".one");
const numberTwo = document.querySelector(".two");
const numberThree = document.querySelector(".three");
const numberFour = document.querySelector(".four");
const numberFive = document.querySelector(".five");
const numberSix = document.querySelector(".six");
const numberSeven = document.querySelector(".seven");
const numberEight = document.querySelector(".eight");
const numberNine = document.querySelector(".nine");
const numberZero = document.querySelector(".zero");



Clear.addEventListener('click', cleanEquationViewer);
equalSign.addEventListener('click', result);

multiply.addEventListener('click', printOper);
divide.addEventListener('click', printOper);
plus.addEventListener('click', printOper);
subtract.addEventListener('click', printOper);


numberOne.addEventListener('click', (e)=>{
printNumber(e)
});
numberTwo.addEventListener('click', printNumber);
numberThree.addEventListener('click', printNumber);
numberFour.addEventListener('click', printNumber);
numberFive.addEventListener('click', printNumber);
numberSix.addEventListener('click', printNumber);
numberSeven.addEventListener('click', printNumber);
numberEight.addEventListener('click', printNumber);
numberNine.addEventListener('click', printNumber);
numberZero.addEventListener('click', printNumber);


let equation = [];
let currentValue = '';


//Clicking at any operation sign
let signs = ['/','*','+','-'];
function printOper(e){
    let lastIndex = equation.length-1;
    let sign = e.target.textContent;
    if(equation.length === 0 && currentValue ==='' ){
        equationViewer.textContent = 'start with a number';
        equation = [];
    }else if ((signs.includes(equation[lastIndex])) && currentValue === ''){
        equation.pop();    
    equation.push(sign);

    equationViewer.textContent = equation.join('');
}else{
    equation.push(currentValue);
    equation.push(sign);
    currentValue='';
    equationViewer.textContent = equation.join('');
}
}


//Clicking at any number
function printNumber(e){
    const num = e.target.textContent;
    currentValue= currentValue + num;
    equationViewer.textContent = equation.join('') + currentValue;
}




//Clean the equation viewer area
function cleanEquationViewer(){
    equationViewer.textContent = '00';
    equation = [];
    currentValue = '';

}


function result(){
    let sum =0;
    let newArr = [...equation, currentValue];
    currentValue = '';

    for (let i=0; i< newArr.length; i++){
        if (newArr[i] === '/'){
                sum = Number(newArr[i-1]) / Number(newArr[i+1])
                newArr.splice(i-1,3,sum)
                i=0;
            }
    }


    for (let i=0; i< newArr.length; i++){
        if (newArr[i] === '*'){
                sum = Number(newArr[i-1]) * Number(newArr[i+1])
                newArr.splice(i-1,3,sum)
                i=0;
            }
    }

    for (let i=0; i< newArr.length; i++){
        if (newArr[i] === '-'){
                sum = Number(newArr[i-1]) - Number(newArr[i+1])
                newArr.splice(i-1,3,sum)
                i=0;
            }
    }

    for (let i=0; i< newArr.length; i++){
        if (newArr[i] === '+'){
                sum = Number(newArr[i-1]) + Number(newArr[i+1])
                newArr.splice(i-1,3,sum)
                i=0;
            }
    }
        
    equationViewer.textContent = sum;
    currentValue = sum;
    sum = 0
    equation = []

}
