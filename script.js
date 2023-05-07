/*Create a function that checks to see if two numbers sum are
less than 100*/

function lessThan(num1, num2){
var total = num1 + num2

    if (total < 100){
        return true
    }
    else{
        return false
    }

}

console.log(lessThan(22, 86))