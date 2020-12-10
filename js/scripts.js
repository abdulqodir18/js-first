var elSumForm = document.querySelector(`.js-form`);
var elSumInput = elSumForm.querySelector(`.js-input`);
var elResult = document.querySelector(`.js-result`);
var elSelect = document.querySelector(`.select`);
var elUserResult = elSumForm.addEventListener(`submit`, function (evt){
  var elResultUser = elSumInput.value * elSelect.value
  evt.preventDefault();
  elResult.textContent = elResultUser;
})



var elForm = document.querySelector(`.js-form2`);
var elInput = elForm.querySelector(`.js-input2`);
var elresults = document.querySelector(`.js-result2`);


elForm.addEventListener(`submit`, function (evt){
  evt.preventDefault();
  var inputValue = elInput.value

  if (inputValue % 3 === 0 ){
    elresults.textContent =`FIZZ`
  }
  else if (inputValue % 5 === 0 ){
    elresults.textContent =`BIZZ`
  }
  else if (inputValue % 5 === 0 && inputValue % 3 === 0 ){
    elresults.textContent =`FIZZ BIZZ`
  }
  else {
    elresults.textContent = elInput.value
  }
  
})  