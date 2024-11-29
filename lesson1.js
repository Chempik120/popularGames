const result = document.querySelector("#result");
const year = document.querySelector("#year");


const checkYear = function(){
    const yearValue = year.value;
    if(yearValue % 4 === 0 && yearValue % 100 !== 0 || yearValue % 400 === 0){
      result.textContent = "Рік є високосним";
    }else {
        result.textContent = "Рік нє високосним";
    }
};

year.addEventListener("input", checkYear);