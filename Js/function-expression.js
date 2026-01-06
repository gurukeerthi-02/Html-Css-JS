let sayName = function(){
    alert("Guru");
};

alert(sayName);


let animal = function(type,dog,cat){
    if(type.toLowerCase() === "dog") dog()
    else if(type.toLowerCase() === "cat") cat()
    else alert("Unknown Animal");
}

let animalType = prompt("Enter animal type:");
animal(animalType,
       function(){alert("Bark Bark")},
       function(){alert("Meow Meow")});


let voterAge = prompt("Enter your age:");

let checkVoterAge = (voterAge >= 18) ?
function(){
    alert("You are eligible to vote.");
}
: function(){
    alert("You are not eligible to vote.");
}

checkVoterAge();
