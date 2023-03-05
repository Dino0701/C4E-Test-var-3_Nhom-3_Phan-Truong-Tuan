function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

function calculate() {
  const numberA = document.getElementById("number-a").value;
  const numberB = document.getElementById("number-b").value;
  let sum = 0;

  for (let i = parseInt(numberA); i <= parseInt(numberB); i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  const resultElement = document.getElementById("result");
  resultElement.innerText = `Tổng các số nguyên tố từ ${numberA} đến ${numberB} là ${sum}`;
}

const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", calculate);
