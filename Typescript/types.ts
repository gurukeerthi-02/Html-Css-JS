type isLoggedIn = true | false;

let isUserLoggedIn : isLoggedIn = true;

type gender = "male" | "female" | "other";

let userGender : gender = "male";

function calculateLength (obj : string | string[])  {
    return obj.length;
}

console.log(calculateLength("Guru"));