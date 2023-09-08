/* 
    && and
    || or
    ! not
*/


/*let age;

do {
    if (age !== undefined){
        console.log("You don't have 18+: ")
        console.log("Please repeat")
    }
    age = prompt("Enter your real age: " ) 
} while (age < 18)

console.log("You have access")
*/
/*let N = prompt("Enter the first number: ");
if (isNaN(N)){
    console.log("You did not enter the number ")
    console.log("Please repeat: ")
}
N = prompt("Enter the first number: ");
console.log("First number: ", N);

M = prompt("Enter the second number: ");
if (isNaN(M) || Number.isInteger){
    console.log("You did not enter the number ")
    console.log("Please repeat")
}
M = prompt("Enter the first number: ");
console.log("Second number: ", M);
*/

/*i = 0;

for(i; i<25; i++){
    console.log('i:', i);


    if(i > 100){
        break;
    }
}*/


/*let N = Numner (prompt("Enter the first number: "));

while (!Number.isInteger(N)){
    console.log("You have entered incorrect number: ")
    console.log(N)
}*/




let N = Number(prompt("Enter the first number: "));


while (!Number.isInteger(N) || isNaN(N) || N < 0){

    console.log("Enter the right number")
    console.log("Try again: ")
    N = Number(prompt("Try again: "));
}

console.log("The first number is: ", N);   

let M = Number(prompt("Enter the second number: "));

while (!Number.isInteger(M) || isNaN(M) || M <= N){

    console.log("You did not enter the number or you have entered an integer number")
    console.log("Try again: ")
    M = Number(prompt("Try again: "));
}


console.log("The second number is: ", M);


let skip = confirm('Skip pair numbers?');
let result = 0;

for (let i = N; i <= M; i++) {
	if (skip && i % 2 === 0) {
	  continue;
	}
	result += i;
 }


console.log('The result: ', result);













/*const N = 0
const M = 100
const number = prompt("Please enter the number: ", '');

(number < N)?console.log("You do not have access"):console.log("Your access are valid")
*/

/*const role = 'admin';

switch(role) {
    case 'admin':
        console.log("Admin enter the chat");
        break;
    case 'client':
        console.log("Client enter the chat");
        break;
    default:
        console.log("You don't have access");
        break;
}*/