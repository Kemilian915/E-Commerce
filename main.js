const productContainer = document.querySelector('.shopContainer');
const samsungContainer = document.querySelector('.samsung');
const appleContainer = document.querySelector('.apple');
const xiaomiContainer = document.querySelector('.xiaomi');
const googleContainer = document.querySelector('.google');
const productDetailPage = document.querySelector('.proDetails');
const cartPage = document.querySelector('.cart');



if (productContainer) {
    displayProducts();
}
if (samsungContainer) {
   displaySamsungProducts();
}
if (appleContainer) {
    displayAppleProducts();
}
if (xiaomiContainer) {
    displayXiaomiProducts();
}
if (googleContainer) {
    displayGoogleProducts();
}
else if (productDetailPage) {
    displayProductDetail();
} else if (cartPage) {
    displayCart();
}

/* Product Function */

function displayProducts() {
    products.forEach(product1 => {
        const productCard = document.createElement('div');
        productCard.classList.add('pro');
        productCard.innerHTML= `
            <div class="mainImage">
                <img src="${product1.mainImage}" alt="${product1.name}">
            </div>
            <h5 class="name">${product1.name}</h5>
            <h4 class="price">${product1.price}</h4>
            `;
        productContainer.appendChild(productCard);

        const imgBox = productCard;
        imgBox.addEventListener('click', () => {
            sessionStorage.setItem('selectedProduct', JSON.stringify(product1));
            window.location.href = '/product-detail.html';
        });
    });
}

function displaySamsungProducts() {
    const samsungProducts = products.filter(product => product.name.toLowerCase().includes('samsung'));
    samsungProducts.forEach(product1 => {
        const productCard = document.createElement('div');
        productCard.classList.add('pro');
        productCard.innerHTML= `
            <div class="mainImage">
                <img src="${product1.mainImage}" alt="${product1.name}">
            </div>
            <h5 class="name">${product1.name}</h5>
            <h4 class="price">${product1.price}</h4>
            `;
        samsungContainer.appendChild(productCard);

        const imgBox = productCard;
        imgBox.addEventListener('click', () => {
            sessionStorage.setItem('selectedProduct', JSON.stringify(product1));
            window.location.href = '/product-detail.html';
        });
    });
}

function displayAppleProducts() {
    const appleProducts = products.filter(product => product.name.toLowerCase().includes('apple'));
    appleProducts.forEach(product1 => {
        const productCard = document.createElement('div');
        productCard.classList.add('pro');
        productCard.innerHTML= `
            <div class="mainImage">
                <img src="${product1.mainImage}" alt="${product1.name}">
            </div>
            <h5 class="name">${product1.name}</h5>
            <h4 class="price">${product1.price}</h4>
            `;
        appleContainer.appendChild(productCard);

        const imgBox = productCard;
        imgBox.addEventListener('click', () => {
            sessionStorage.setItem('selectedProduct', JSON.stringify(product1));
            window.location.href = '/product-detail.html';
        });
    });
}

function displayXiaomiProducts() {
    const xiaomiProducts = products.filter(product => {
        const name = product.name.toLowerCase();
        return name.includes('xiaomi') || name.includes('poco');
    });
    xiaomiProducts.forEach(product1 => {
        const productCard = document.createElement('div');
        productCard.classList.add('pro');
        productCard.innerHTML= `
            <div class="mainImage">
                <img src="${product1.mainImage}" alt="${product1.name}">
            </div>
            <h5 class="name">${product1.name}</h5>
            <h4 class="price">${product1.price}</h4>
            `;
        xiaomiContainer.appendChild(productCard);

        const imgBox = productCard;
        imgBox.addEventListener('click', () => {
            sessionStorage.setItem('selectedProduct', JSON.stringify(product1));
            window.location.href = '/product-detail.html';
        });
    });
}

function displayGoogleProducts() {
    const googleProducts = products.filter(product => product.name.toLowerCase().includes('google'));
    googleProducts.forEach(product1 => {
        const productCard = document.createElement('div');
        productCard.classList.add('pro');
        productCard.innerHTML= `
            <div class="mainImage">
                <img src="${product1.mainImage}" alt="${product1.name}">
            </div>
            <h5 class="name">${product1.name}</h5>
            <h4 class="price">${product1.price}</h4>
            `;
        googleContainer.appendChild(productCard);

        const imgBox = productCard;
        imgBox.addEventListener('click', () => {
            sessionStorage.setItem('selectedProduct', JSON.stringify(product1));
            window.location.href = '/product-detail.html';
        });
    });
}


/* Product Detail Page Function */

function displayProductDetail() {
    const productData1 = JSON.parse(sessionStorage.getItem('selectedProduct'));

    const nameEl = document.querySelector('.name');
    const priceEl = document.querySelector('.price');
    const cameraEL = document.querySelector('.camera');
    const storageEl = document.querySelector('.storage');
    const batteryEl = document.querySelector('.battery');
    const colourEl = document.querySelector('.colour');
    const descriptionEl = document.querySelector('.description');
    const addToCartBtn = document.querySelector('.addToCart');


  function updateProductDisplay(productData) {
    // Get main image and small image container
    const mainImageEl = document.querySelector('.mainImage1');
    const smallImageEl = document.querySelector('.smallImageGroup');

    // Clear existing thumbnails
    smallImageEl.innerHTML = "";

    // Create the main image
    const mainImg = document.createElement('img');
    mainImg.src = productData.mainImage;
    mainImg.alt = productData.name;
    mainImg.classList.add('mainImage1');

    // Remove existing main image (but not .smallImageGroup)
    const existingImg = mainImageEl.querySelector('img');
    if (existingImg) {
        existingImg.remove();
    }

    // Insert the new main image above small images
    mainImageEl.insertBefore(mainImg, smallImageEl);

    // Add small images
    const allImages = productData.smallImageGroup.slice(0, 4);
    allImages.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        img.alt = productData.name;
        img.classList.add('smallImageGroup.img');

        img.addEventListener('click', () => {
            mainImg.src = image;
        });

        smallImageEl.appendChild(img);
    });
  }

    nameEl.innerText = productData1.name;
    priceEl.innerText = productData1.price;
    cameraEL.innerText = productData1.camera;
    storageEl.innerText = productData1.storage;
    batteryEl.innerText = productData1.battery;
    colourEl.innerText = productData1.colour;
    descriptionEl.innerText = productData1.description;

    updateProductDisplay(productData1);

    addToCartBtn.addEventListener('click', () => {
        addCart(productData1);
    });
}

function addCart(cartProduct) {
    let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const existingItem = cart.find(item => item.id === cartProduct.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: cartProduct.id,
            name: cartProduct.name,
            price: cartProduct.price,
            image: cartProduct.mainImage,
            storage: cartProduct.storage,
            colour: cartProduct.colour,
            quantity: 1
        });
    }
    sessionStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();

}


/* Cart Function */

function displayCart() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];

    const cartItemsEl = document.querySelector('.cartItems');
    const subtotalEl = document.querySelector('.subtotal');
    const totalEl = document.querySelector('.totalPrice');

    cartItemsEl.innerHTML = '';

    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p>Your cart is empty</p>';
        subtotalEl.textContent = '$0';
        totalEl.textContent = '$0';
        return;
    }

    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = parseFloat(item.price.replace('$', '')) * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.classList.add('item');
        cartItem.innerHTML = `
            <div class="cartProduct">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cartProductInfo">
                        <p>${item.name}</p>
                        <p>${item.storage}, ${item.colour}</p>
                    </div>
                </div>
                <p class="cartPrice">${item.price}</p>
                <div class="cartQuantity"><input type="number" value="${item.quantity}" min="1" data-index="${index}"></div>
                <p class="cartTotal">${itemTotal}</p>
                <p class="removeItem" data-index="${index}"><i class="far fa-times-circle"></i></p>
        `;
        cartItemsEl.appendChild(cartItem);
    });

    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    totalEl.textContent = `$${subtotal.toFixed(2)}`; 

    removeCartItem();
    updateCartQuantity();
}

function removeCartItem() {
    document.querySelectorAll('.removeItem').forEach(button => {
        button.addEventListener('click', function() {
            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            const index = this.getAttribute('data-index');
            cart.splice(index, 1);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
            updateCartBadge();
        });
    });
}

function updateCartQuantity() {
    document.querySelectorAll('.cartQuantity input').forEach(input => {
        input.addEventListener('change', function() {
            let cart = JSON.parse(sessionStorage.getItem('cart')) || [];
            const index = this.getAttribute('data-index');
            cart[index].quantity = parseInt(this.value);
            sessionStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
            updateCartBadge();
        });
    });
}

function updateCartBadge() {
    const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.querySelector('.cartCount');

    if(badge){
        if (cartCount > 0) {
            badge.textContent = cartCount;
            badge.style.display = 'block';
        } else {
            badge.style.display = 'none';
        }
    }
}
updateCartBadge();


/* Pagination Function*/

function getPageList(totalPages, page, maxLength){
    function range(start, end){
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth ){
        return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }
    
    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
}

function setupPagination(productSelector, paginationSelector) {
    var $products = $(productSelector + ' .pro');
    var numberOfItems = $products.length;
    var limitPerPage = 5;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7;
    var currentPage = 1;

    function showPage(whichPage){
        if(whichPage < 1 || whichPage > totalPages) return false;
        currentPage = whichPage;

        $products.hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        var $pagination = $(paginationSelector);
        $pagination.find('li.pageItem').not('.prevPage, .nextPage').remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $('<li>').addClass('pageItem').addClass(item ? 'currentPage' : 'dots')
            .toggleClass('active', item === currentPage)
            .append($('<a>').addClass('pageLink').attr({href: 'javascript:void(0)'}).text(item || '...'))
            .insertBefore($pagination.find('.nextPage'));
        });

        $pagination.find('.prevPage').toggleClass('disable', currentPage === 1);
        $pagination.find('.nextPage').toggleClass('disable', currentPage === totalPages);

        return true;
    }

    var $pagination = $(paginationSelector);
    $pagination.empty().append(
        $('<li>').addClass('pageItem prevPage').append($('<a>').addClass('pageLink').attr({href: 'javascript:void(0)'}).text('Prev')),
        $('<li>').addClass('pageItem nextPage').append($('<a>').addClass('pageLink').attr({href: 'javascript:void(0)'}).text('Next'))
    );

    showPage(1);

    $pagination.off('click').on('click', 'li.pageItem', function(e){
    e.preventDefault();

    var $li = $(this);

    if ($li.hasClass('disable') || $li.hasClass('active') || $li.hasClass('dots')) {
        // Do nothing for disabled, active, or dots items
        return;
    }

    if ($li.hasClass('nextPage')) {
        showPage(currentPage + 1);
    } else if ($li.hasClass('prevPage')) {
        showPage(currentPage - 1);
    } else {
        var pageNum = parseInt($li.text());
        if (!isNaN(pageNum)) {
            showPage(pageNum);
        }
    }
});

}

// Call for each container + pagination
$(function() {
    setupPagination('.shopContainer', '.shopPagination');
    setupPagination('.samsung', '.samsungPagination');
    setupPagination('.apple', '.applePagination');
    setupPagination('.xiaomi', '.xiaomiPagination');
    setupPagination('.google', '.googlePagination');
});
