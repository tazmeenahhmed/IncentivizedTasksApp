/* Adding a new item to a checklist*/

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

/* Adding a new item to the wishlist*/
const popupForm = document.getElementById("popupForm");
const openPopupBtn = document.getElementById("openPopup");
const closePopupBtn = document.getElementById("closePopup");
const form = document.getElementById("popupInfoForm");
const submitBtn = document.getElementById("submitInformation");
const formDiv = document.getElementById("wishlist-add");
const wishlistDiv = document.getElementById("wishlist-card-area");

openPopupBtn.addEventListener('click', function() {
    popupForm.style.display = 'flex';
});

closePopupBtn.addEventListener('click', function() {
    popupForm.style.display = 'none';
});

submitBtn.addEventListener('click', function() {
    popupForm.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if(event.target == popupForm) {
        popupForm.style.display = 'none';
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const itemName = document.getElementById('title');
    const itemDesc = document.getElementById('description');
    const itemPrice = document.getElementById('price');
    const itemImage = document.getElementById('fileUpload');

    const outerDiv = document.createElement('div');
    outerDiv.setAttribute('id', 'wishlist-card');

    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('class', 'wishlist-child');

    const img = document.createElement('img');
    const imgUpload = document.getElementById('fileUpload');
    const image = imgUpload.files[0];
    if (!image.type.includes('image')) {
        return alert('Only images are allowed!');
    }
    img.src = URL.createObjectURL(image);
    img.setAttribute('class', 'wishlist-img');
    img.setAttribute('alt', 'picture of ' + itemName.value);
    imgDiv.appendChild(img);

    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'wishlist-child');

    const titleP = document.createElement('p');
    titleP.textContent = itemName.value;

    const descP = document.createElement('p');
    descP.textContent = itemDesc.value;

    const priceP = document.createElement('p');
    priceP.textContent = "PRICE: $" + itemPrice.value;

    contentDiv.appendChild(titleP);
    contentDiv.appendChild(descP);
    contentDiv.appendChild(priceP);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";

    outerDiv.appendChild(imgDiv);
    outerDiv.appendChild(contentDiv);
    outerDiv.appendChild(span);

    wishlistDiv.insertBefore(outerDiv, formDiv);
    form.reset();
});

/* Updating the total money count */


