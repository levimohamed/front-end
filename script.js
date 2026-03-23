const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

// ========================
// trend products
// ========================
const trendingProducts = [
    {
        id: 1,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 5,
        reviews: 2197,
        name: "Drop Shoulder Hoodie",
        color: "Black",
        price: 59.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 2,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 3,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 4,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 5,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 6,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 7,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 8,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 9,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 10,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
]

function renderTrendingProducts() {
    const container = document.querySelector('.trend_products_shop');

    trendingProducts.forEach(product => {
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);

        const card = `
            <a href="product.html?id=${product.id}" class="product-card">
                <div class="product-img-container">
                    <img class="img-main" src="${product.image}" alt="${product.name}">
                    <img class="img-hover" src="${product.image2}" alt="${product.name}">
                    <div class="product-sizes">
                        ${product.sizes.map(size => `<span>${size}</span>`).join('')}
                    </div>
                </div>
                <div class="product-info">
                    <span class="stars">${stars}</span>
                    <span class="reviews-count">${product.reviews} reviews</span>
                    <p class="product-name">${product.name}</p>
                    <p class="product-color">${product.color}</p>
                    <p class="product-price">$${product.price}</p>
                </div>
            </a>
        `;
        container.innerHTML += card;
    })
}
renderTrendingProducts()

// ===================================
// Scroll Buttons Trending ===========
const leftBtn = document.querySelector('.left_btn');
const rightBtn = document.querySelector('.right_btn');
const shop = document.querySelector('.trend_products_shop');

leftBtn.addEventListener('click', () => {
    shop.scrollBy({ left: -300, behavior: 'smooth' });
})

rightBtn.addEventListener('click', () => {
    shop.scrollBy({ left: 300, behavior: 'smooth' });
})

// ==============================
// New Arrivals =================
// ==============================
const newArrivalsProducts = [
    {
        id: 1,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 5,
        reviews: 2197,
        name: "Drop Shoulder Hoodie",
        color: "Black",
        price: 59.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 2,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 3,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 4,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 5,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 6,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 7,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 8,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 9,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
    {
        id: 10,
        image: "images/Mobile_banner3_-_Jan.webp",
        image2: "images/Mobile_banner2_-_Jan-1.jpg",
        rating: 4,
        reviews: 1043,
        name: "Classic Sweatsuit",
        color: "Grey",
        price: 89.99,
        sizes: ["S", "M", "L", "XL", "XXL"]
    },
];

function renderNewArrivals() {
    const container = document.querySelector('.new_arrivals_shop');

    newArrivalsProducts.forEach(product => {
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);

        const card = `
            <a href="product.html?id=${product.id}" class="product-card">
                <div class="product-img-container">
                    <img class="img-main" src="${product.image}" alt="${product.name}">
                    <img class="img-hover" src="${product.image2}" alt="${product.name}">
                    <div class="product-sizes">
                        ${product.sizes.map(size => `<span>${size}</span>`).join('')}
                    </div>
                </div>
                <div class="product-info">
                    <span class="stars">${stars}</span>
                    <span class="reviews-count">${product.reviews} reviews</span>
                    <p class="product-name">${product.name}</p>
                    <p class="product-color">${product.color}</p>
                    <p class="product-price">$${product.price}</p>
                </div>
            </a>
        `;

        container.innerHTML += card;
    });
}

renderNewArrivals();

// Scroll Buttons New Arrivals ===
const newLeftBtn = document.querySelector('.new_left_btn');
const newRightBtn = document.querySelector('.new_right_btn');
const newShop = document.querySelector('.new_arrivals_shop');

newLeftBtn.addEventListener('click', () => {
    newShop.scrollBy({ left: -300, behavior: 'smooth' });
});

newRightBtn.addEventListener('click', () => {
    newShop.scrollBy({ left: 300, behavior: 'smooth' });
});
// ==============================
// Community Reviews ============
// ==============================
const communityReviews = [
    {
        image: "images/Mobile_banner3_-_Jan.webp",
        rating: 5,
        title: "One of the best puffer vests",
        text: "Hours is one of my favorite brands because of the comfort, style and quality of their products.",
        name: "Jake C."
    },
    {
        image: "images/Mobile_banner3_-_Jan.webp",
        rating: 5,
        title: "Never taking this sweatsuit off",
        text: "I know you already know Hours has the best sweatsuits. I'm on my 5th sweatsuit set already.",
        name: "Arnold R."
    },
    {
        image: "images/Mobile_banner3_-_Jan.webp",
        rating: 5,
        title: "Such a unique piece",
        text: "I've never bought anything like this before. It's pretty dope, it's a workwear vest and reverses into another piece inside.",
        name: "Carter"
    },
    {
        image: "images/Mobile_banner3_-_Jan.webp",
        rating: 5,
        title: "So glad I copped this flannel",
        text: "Seen on the hunt for a new flannel that wasn't boring lately, this is it.",
        name: "Reed"
    },
    {
        image: "images/Mobile_banner3_-_Jan.webp",
        rating: 5,
        title: "My everyday bag",
        text: "It's hard to find a bag that can't has the right amount of pockets. Had to grab immediately.",
        name: "Mike T."
    },
];

function renderCommunityReviews() {
    const container = document.querySelector('.community_reviews_content');

    communityReviews.forEach(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        const card = `
            <div class="review-card">
                <img src="${review.image}" alt="${review.name}">
                <div class="review-info">
                    <span class="review-stars">${stars}</span>
                    <p class="review-title">${review.title}</p>
                    <p class="review-text">${review.text}</p>
                    <p class="review-name">— ${review.name}</p>
                </div>
            </div>
        `;

        container.innerHTML += card;
    });
}

renderCommunityReviews();

// Scroll Buttons Community ======
const communityLeftBtn = document.querySelector('.community_left_btn');
const communityRightBtn = document.querySelector('.community_right_btn');
const communityShop = document.querySelector('.community_reviews_content');

communityLeftBtn.addEventListener('click', () => {
    communityShop.scrollBy({ left: -300, behavior: 'smooth' });
});

communityRightBtn.addEventListener('click', () => {
    communityShop.scrollBy({ left: 300, behavior: 'smooth' });
});