let today = new Date();
let hourNow = today.getHours();

if (hourNow > 18) {
    greeting = 'Good Evening!';
} else if (hourNow > 12) {
    greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!';
} else {
    greeting = 'Welcome';
}

let greetingContent = document.getElementById('greeting');
greetingContent.innerText = greeting;

// another way to do this:
// document.getElementById('greeting').innerText = greeting;
