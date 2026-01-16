document.addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false);

const wishlistPopupForm = document.getElementById("wishlistPopup");
const openWishlistPopupBtn = document.getElementById("openWishlistPopup");
const closeWishlistPopupBtn = document.getElementById("closeWishlistPopup");
const submitWishlistBtn = document.getElementById("submitWishlistInformation");
const wishlistForm = document.getElementById("wishlistPopupForm");
const wishlistDiv = document.getElementById("wishlist-card-area");


openWishlistPopupBtn.addEventListener('click', function() {
    wishlistPopupForm.style.display = 'flex';
});

closeWishlistPopupBtn.addEventListener('click', function() {
    wishlistPopupForm.style.display = 'none';
});

submitWishlistBtn.addEventListener('click', function() {
    wishlistPopupForm.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if(event.target === wishlistPopupForm) {
        wishlistPopupForm.style.display = 'none';
    }
});

wishlistForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const itemName = document.getElementById('wishlistTitle');
    const itemDesc = document.getElementById('wishlistDesc');
    const itemPrice = document.getElementById('wishlistPrice');
    const itemLink = document.getElementById('wishlistLink');

    const outerDiv = document.createElement('div');
    outerDiv.setAttribute('class', 'wishlist-card');

    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('class', 'wishlist-img');
    const imgUpload = document.getElementById('wishlistFileUpload');
    const image = imgUpload.files[0];
    if (!image.type.includes('image')) {
        return alert('Only images are allowed!');
    }
    img.src = URL.createObjectURL(image);
    imgDiv.appendChild(img);

    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'wishlist-card-child');

    const a = document.createElement('a');
    a.setAttribute('href', itemLink.value);
    a.setAttribute('target', 'blank');
    const contentP = document.createElement('p');
    contentP.textContent = itemName.value;
    a.appendChild(contentP);
    contentDiv.appendChild(a);

    const descP = document.createElement('p');
    descP.textContent = itemDesc.value;
    contentDiv.appendChild(descP);

    const priceP = document.createElement('p');
    priceP.textContent = 'PRICE: $' + itemPrice.value;
    contentDiv.appendChild(priceP);

    const span = document.createElement('span');
    span.setAttribute('class', 'wishlist-span');
    span.innerHTML = "&times;";

    outerDiv.appendChild(imgDiv);
    outerDiv.appendChild(contentDiv);
    outerDiv.appendChild(span);
    wishlistDiv.appendChild(outerDiv);
    wishlistForm.reset();
});