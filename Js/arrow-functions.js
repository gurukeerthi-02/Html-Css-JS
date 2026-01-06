//arrow function syntax

let sum = (a,b) => a+b;

alert(sum()); // returns NaN because a and b are undefined
alert(sum(2,3)); // returns 5

// function declaration syntax

function summ(a,b){
    return a+b;
}

alert(summ(10,5));


// function expression syntax

let summation = function(a,b){
    alert(a+b);
}
alert(summation(7,8));

// callback function syntax

let multipy = (x,y) => function(){
    alert(x*y);
}

multipy(4,5)(); // returns 20