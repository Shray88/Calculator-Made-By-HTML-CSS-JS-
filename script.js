//-------------All Variables------------------// 
const numbers = document.querySelectorAll("#numbers");
const operators = document.querySelectorAll("#operators");
const del = document.querySelector("#delete");
const show = document.querySelector("#inputtext");
const c = document.querySelector("#c");
const button = document.querySelectorAll("button");
const equal = document.querySelector("#equal-btn");
//-------------All Variables------------------// 
//---------Funtions of taking Input-----------//
numbers.forEach(number => {
    number.addEventListener("click",() => {
        show.value += Number(number.innerHTML);
    });
});
operators.forEach(operator => {
    operator.addEventListener("click", () =>{
        const lastchar = show.value.slice(-1);
        const operat = /[+\-*\/]/;
        if (operat.test(lastchar)) {
            return;
        } else {
            show.value += operator.innerHTML;    
        };
        
    })
});
del.addEventListener("click",() =>{
    show.value = show.value.slice(0,-1);
});
c.addEventListener("click",()=>{
    show.value = "";
});
equal.addEventListener("click",() => {
    show.value = calculate(show.value) ;
});
//-----------------------------------//
//------Main Calculation Funtion-----//
function calculate(string){
        let result;
        try {
            result = eval(string)
        } catch (error) {
            result = 'Error';
        }
        return result;
};
//-------Made By Shray Sagar--------//
//----------------------------------//