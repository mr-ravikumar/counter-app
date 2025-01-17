let plusIcon = document.querySelector('.plus-icon');
let minusIcon = document.querySelector('.minus-icon');
let numberText = document.querySelector('.number-text');
let resetBtn = document.querySelector('.reset-btn');

plusIcon.addEventListener('click', function () {
    let text = numberText.innerHTML;
    let num = parseInt(text)
    num = num+1;
    text = num.toString();
    numberText.innerHTML = text;
})

minusIcon.addEventListener('click', function () {
    let text = numberText.innerHTML;
    let num = parseInt(text)
    num = num-1;
    text = num.toString();
    numberText.innerHTML = text;
})

resetBtn.addEventListener('click', function() {
    let text = numberText.innerHTML;
    let num = parseInt(text);
    num = 0;
    text = num.toString();
    numberText.innerHTML = text;
})
