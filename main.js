const firstNumInput = document.querySelector('.first-num');
const secondNumInput = document.querySelector('.second-num');
const signSelect = document.querySelector('.sign');
const resultTitle = document.querySelector('.result-value');
const resultBtn = document.querySelector('.result-btn');
const resetBtn = document.querySelector('.reset-btn');

const OPERATIONS = {
  sum: '+', subtract: '-', multiply: '*', divide: '/',
};

const calculateData = {
  num1: '', num2: '', sign: '+', result: '',
};

function calculate({ num1, num2, sign }) {
  switch (sign) {
    case OPERATIONS.sum:
      calculateData.result = sum(num1, num2);
      break;
    case OPERATIONS.subtract:
      calculateData.result = subtract(num1, num2);
      break;
    case OPERATIONS.multiply:
      calculateData.result = multiply(num1, num2);
      break;
    case OPERATIONS.divide:
      calculateData.result = divide(num1, num2);
      break;
  }
}

function sum(num1, num2) {
  return (+num1) + (+num2);
}

function subtract(num1, num2) {
  return (+num1) - (+num2);
}

function multiply(num1, num2) {
  return (+num1) * (+num2);
}

function divide(num1, num2) {
  return (+num1) / (+num2);
}

function resetCalculate() {
  calculateData.num2 = '';
  calculateData.num1 = '';
  calculateData.sign = '+';
  calculateData.result = '';
  resultTitle.textContent = '...';
  firstNumInput.value = '';
  secondNumInput.value = '';
  signSelect.value = '+';
}



firstNumInput.addEventListener('keyup', function (e) {
  calculateData.num1 = e.target.value;
});

secondNumInput.addEventListener('keyup', function (e) {
  calculateData.num2 = e.target.value;
});

signSelect.addEventListener('change', function (e) {
  calculateData.sign = e.target.value;
});

resultBtn.addEventListener('click', function (e) {
  calculate(calculateData);
  resultTitle.textContent = calculateData.result;
});

resetBtn.addEventListener('click', resetCalculate);




function sum2() {
  console.log(sum2.arguments[5]);
  const paramaLengh = arguments.length - 1

  console.log(paramaLengh);
  let result = 0;
  for (let i = 0; i <= paramaLengh; i++) {
    const el = arguments[i]
    result += el
  }

  return result
}
let result = sum2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(result);




function formatUserName(str) {
  const lowerCase = str.toLowerCase().slice(1)
  const FirstLetter = str[0].toUpperCase()
  console.log(lowerCase);
  console.log(FirstLetter);
  return FirstLetter + lowerCase;
}

console.log(formatUserName('vLAD'));
// formatUserName('vLAD')


const user = document.querySelector('.user');
user.addEventListener('click', myFn);

function myFn() {
  const lowerCase = firstNumInput.value.toLowerCase().slice(1);
  const FirstLetter = firstNumInput.value[0].toUpperCase();
  firstNumInput.value = FirstLetter + lowerCase;
  resultTitle.innerHTML = firstNumInput.value;
}

