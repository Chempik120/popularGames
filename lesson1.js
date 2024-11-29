const result = document.querySelector("#result");
const year = document.querySelector("#year");
const randomNumber = document.querySelector("#randomNumber");
const randomResult = document.querySelector("#randomResult");

const checkYear = function(){
    const yearValue = year.value;
    if(yearValue % 4 === 0 && yearValue % 100 !== 0 || yearValue % 400 === 0){
      result.textContent = "Рік є високосним";
    }else {
        result.textContent = "Рік нє високосним";
    }
};

year.addEventListener("input", checkYear);



const random = Math.floor(Math.random() * 10) + 1;
const checkRandom = function(event){
  event.preventDefault();
  const randomValue = Number(randomNumber.elements.input.value);
  if(random === randomValue){
    randomResult.textContent = "Ви перемогли";
  } else{
    randomResult.textContent = `Ви програли,комп'ютер загадав число ${random}` ;
  }
}

randomNumber.addEventListener("submit", checkRandom);