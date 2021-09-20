document.getElementById("btnSubmit").addEventListener("click", runNumbers);

function runNumbers(){

    let firstNum = parseInt(document.getElementById("firstValue").value);
    let secondNum = parseInt(document.getElementById("secondValue").value);
    let count = 0;
    let result = [];
    let str = [];
    let tempStr = "";

    if((firstNum <1 || firstNum > 100) || (secondNum < 1 || secondNum > 100)){
        alert("Numbers must be 1 to 100");
        return;
    }

    for(let i = 1; i <= 100; i++){

        if(i % firstNum === 0 && i % secondNum === 0){
            tempStr = "FizzBuzz";
        }
        else if (i % firstNum === 0) {
            tempStr = "Fizz";
        }
        else if (i % secondNum === 0) {
            tempStr = "Buzz";
        }
        else {
            tempStr = i;
        }
        str += `<td>${tempStr}</td>`;
        count ++;
        if(count === 5){
            result += `<tr>${str}</tr>`;
            count = 0;
            str = [];
        }
    }
    document.getElementById("results").innerHTML = result;    
}