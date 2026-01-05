function addHabit(type) {
    const inputBox = document.getElementById(
        type === 'daily' ? 'daily-input' : 'non-daily-input'
    );

    const listContainer = document.getElementById(
        type === 'daily' ? 'daily-list-container' : 'non-daily-list-container'
    );

    if(inputBox.value === '') {
        alert("Write a habit down first!");
    } else {

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData(type);
}

document.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } 
    
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }

    if (e.target.closest("#daily-list-container")) {
        saveData("daily");
    }

    if (e.target.closest("#non-daily-list-container")) {
        saveData("nondaily");
    }

});

function saveData(type) {
    const list = document.getElementById(
        type === 'daily' ? 'daily-list-container' : 'non-daily-list-container'
    );

    localStorage.setItem(type + "-data", list.innerHTML);
}

function showHabit() {
    document.getElementById("daily-list-container").innerHTML =
        localStorage.getItem("daily-data") || "";

    document.getElementById("non-daily-list-container").innerHTML =
        localStorage.getItem("nondaily-data") || "";
}
showHabit();