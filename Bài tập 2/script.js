function numberOneTriangle() {
    var inputNumber = document.getElementById('input-number').value;
    var resultElement = document.getElementById('result');

    if (inputNumber < 1 || inputNumber > 10) {
        resultElement.innerHTML = 'Please enter a number between 1 and 10.';
        return;
    }

    var triangle = '';

    for (var i = 1; i <= inputNumber; i++) {
        for (var j = 1; j <= i; j++) {
            triangle += '*';
        }
        triangle += '<br>';
    }

    resultElement.innerHTML = triangle;
}