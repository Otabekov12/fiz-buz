var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elResult = document.querySelector('.result');





elForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    var inputValue = Number(elInput.value.trim());

    if(inputValue % 3 == 0 && inputValue % 5 ==0 ){
        elResult.textContent = 'FizzBuzz !';
    }else if(inputValue % 3 == 0){
        elResult.textContent = 'Buzz !'
    }else if(inputValue % 5 == 0){
        elResult.textContent = 'Fizz !'
    }else{
        elResult.textContent = 'Xatolik bor !!!'
    }



})