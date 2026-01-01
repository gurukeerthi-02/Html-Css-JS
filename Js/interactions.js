let userName = prompt("Enter your name:");
let userConfiramtion = confirm(`Is your name ${userName}?`);
if (!userConfiramtion) {
    alert("Please refresh the page and enter your name again.");
}
alert(`Welcome ${userName}! Enjoy your stay on our website.`);
