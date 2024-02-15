
let valueDisplays = document.querySelectorAll(".num")
let interval = 4100;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-target"));
    
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
            
        }
    },duration);

});


let displayvalue = document.querySelectorAll('.num1')

let intervals = 10000;


displayvalue.forEach((valueDisplays) =>{
    let startValues = 0;
    let endValues = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValues);
    let counter = setInterval(function () {
        startValues += 10;
    
        valueDisplays.textContent = startValues;
        if (startValues == endValues) {
            clearInterval(counter);
        }
        
    },duration);

});


// let num = 10000;
// let numcama = num.toLocaleString('en-US')
// elseif(endValues == num){ 
//     return numcama ;
//   }