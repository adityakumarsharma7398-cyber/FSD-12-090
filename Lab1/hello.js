console.log("Aditya kumar Sharma");
document.write("Aditya Kumar Sharma");

function sum(a,b){
    return a+ b;

}

const add =(a,b)=>{
    return a+b;

};

const add2 = (a,b) => a+b;

console.log(sum(20,10));
console.log(sum(20, 20));
console.log(sum(20, 30));


function numberToWord(num) {
    switch (num) {
        case 0: return "Zero";
        case 1: return "One";
        case 2: return "Two";
        case 3: return "Three";
        case 4: return "Four";
        case 5: return "Five";
        case 6: return "Six";
        case 7: return "Seven";
        case 8: return "Eight";
        case 9: return "Nine";
        default: return "Invalid Number";
    }
}

let n = 5;
console.log(numberToWord(n));