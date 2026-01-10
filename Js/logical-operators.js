let userType = prompt("Enter user type: ");

if(userType === "Admin"){
    let AdminPassword = prompt("Enter Admin Password: ");
    AdminPassword === "TheMaster" ? alert("Welcome Admin") 
    : AdminPassword === "" || AdminPassword === null ? alert("Canceled") 
    : alert("Wrong Password");
}
else if(userType === "" || userType === null){
    alert("Canceled");
}
else{
    alert("I don't know you");
}

let a = prompt("Enter a number: ");
let b = prompt("Enter b number: ");

alert( a??b);