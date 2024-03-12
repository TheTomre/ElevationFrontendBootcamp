const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let date = new Date();

const dayName = days[date.getDay()-1];
const monthName = months[date.getMonth()];
const day = date.getDate();
const year = date.getFullYear();

console.log(`Today is ${dayName} the ${day} of ${monthName} ${year}`);