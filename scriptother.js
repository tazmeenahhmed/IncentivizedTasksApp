/* Money counter */


/* Checkbox toggling */
const listContainer = document.getElementsByClassName("check-container");

document.addEventListener('click', function(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
    } 

    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);

/* Timer countdown */
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

const targetDate = new Date('January 10 2026 00:00:00').getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;

    if (distance < 0) {
        daysElement.innerHTML = "00";
        hoursElement.innerHTML = "00";
        minutesElement.innerHTML = "00";
        secondsElement.innerHTML = "00";
    }
}
setInterval(timer, 1000);

/* Add habit popup form */
const habitPopupForm = document.getElementById("habitPopup");
const openHabitPopupBtn = document.getElementById("openHabitPopup");
const closeHabitPopupBtn = document.getElementById("closeHabitPopup");
const submitHabitBtn = document.getElementById("submitHabitInformation");
const habitForm = document.getElementById("habitPopupForm");
const habitsDiv = document.getElementById("habits-box");


openHabitPopupBtn.addEventListener('click', function() {
    habitPopupForm.style.display = 'flex';
});

closeHabitPopupBtn.addEventListener('click', function() {
    habitPopupForm.style.display = 'none';
});

submitHabitBtn.addEventListener('click', function() {
    habitPopupForm.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if(event.target == habitPopupForm) {
        habitPopupForm.style.display = 'none';
    }
});

habitForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const habitName = document.getElementById('habitTitle');
    const habitFrequency = document.getElementById('habitFrequency');
    const habitDescription = document.getElementById('habitDescription');
    const habitValue = document.getElementById('habitAmount');

    const outerDiv = document.createElement('div');
    outerDiv.setAttribute('class', 'individual-habit');

    const span = document.createElement('span');
    span.setAttribute('class', 'habit-span');
    span.innerHTML = "&times;";
    outerDiv.appendChild(span);

    const hide = document.createElement('p');
    hide.setAttribute('class', 'hide');
    hide.textContent = "Delete this habit.";
    outerDiv.appendChild(hide);

    const ul = document.createElement('ul');
    ul.setAttribute('class', 'check-container');
    const li = document.createElement('li');
    li.setAttribute('class', 'check-item');
    li.textContent = habitName.value;
    ul.appendChild(li);
    outerDiv.appendChild(ul);

    const textDiv = document.createElement('div');
    textDiv.setAttribute('class', 'centered-items');
    const frequency = document.createElement('h3');
    frequency.textContent = "Frequency: " + habitFrequency.value;
    const holder = document.createElement('p');
    holder.textContent = '|';
    const value = document.createElement('h3');
    value.textContent = "Value: $" + habitAmount.value;
    textDiv.appendChild(frequency);
    textDiv.appendChild(holder);
    textDiv.appendChild(value);
    outerDiv.appendChild(textDiv);

    const description = document.createElement('p');
    description.textContent = habitDescription.value;
    outerDiv.appendChild(description);

    const time = document.createElement('h3');
    time.textContent = "TIME REMAINING";
    outerDiv.appendChild(time);

    const timeDiv = document.createElement('div');
    timeDiv.setAttribute('class', 'timer-box');

    const daysDiv = document.createElement('div');
    daysDiv.setAttribute('class', 'time');
    const daysTime = document.createElement('h3');
    daysTime.setAttribute('id', 'days');
    const daysP = document.createElement('p');
    daysP.textContent = "Days";
    daysDiv.appendChild(daysTime);
    daysDiv.appendChild(daysP);
    timeDiv.appendChild(daysDiv);

    const hoursDiv = document.createElement('div');
    hoursDiv.setAttribute('class', 'time');
    const hoursTime = document.createElement('h3');
    hoursTime.setAttribute('id', 'hours');
    const hoursP = document.createElement('p');
    hoursP.textContent = "Hours";
    hoursDiv.appendChild(hoursTime);
    hoursDiv.appendChild(hoursP);
    timeDiv.appendChild(hoursDiv);

    const minutesDiv = document.createElement('div');
    minutesDiv.setAttribute('class', 'time');
    const minutesTime = document.createElement('h3');
    minutesTime.setAttribute('id', 'minutes');
    const minutesP = document.createElement('p');
    minutesP.textContent = "Minutes";
    minutesDiv.appendChild(minutesTime);
    minutesDiv.appendChild(minutesP);
    timeDiv.appendChild(minutesDiv);

    const secondsDiv = document.createElement('div');
    secondsDiv.setAttribute('class', 'time');
    const secondsTime = document.createElement('h3');
    secondsTime.setAttribute('id', 'seconds');
    const secondsP = document.createElement('p');
    secondsP.textContent = "Seconds";
    secondsDiv.appendChild(secondsTime);
    secondsDiv.appendChild(secondsP);
    timeDiv.appendChild(secondsDiv);

    outerDiv.appendChild(timeDiv);
    habitsDiv.appendChild(outerDiv);
    habitForm.reset();
});

