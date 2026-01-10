// while loop

let i = 0;
while(i<6){
    alert(`while : ${i}`);
    i++;
}

// do...while loop
let j=0;
do{
    alert(`do : ${j}`);
    j++;
}while(j<6);

// for loop
// label break
outer: for(let k=0; k<6; k++){
    for(let l=0; l<3; l++){
        if(l==2){
            break outer;
        }    
        alert(`for : ${k}, ${l}`);
    }
}