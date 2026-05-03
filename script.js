// ==============================
// Header Scroll ================
// ==============================
const header = document.querySelector('header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 0));

// ==============================
// Bag Count ====================
// ==============================
document.getElementById("span-icon-bag").textContent = 0;

// ==============================
// Data =========================
// ==============================
const sizes = ["S", "M", "L", "XL", "XXL"];

const trendingProducts = [
    { id: 1, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 5, reviews: 2197, name: "Drop Shoulder Hoodie", color: "Black", price: 59.99 },
    { id: 2, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 3, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 4, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 5, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 6, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 7, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 8, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 9, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id:10, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
];

const newArrivalsProducts = [
    { id: 1, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 5, reviews: 2197, name: "Drop Shoulder Hoodie", color: "Black", price: 59.99 },
    { id: 2, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 3, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 4, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 5, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 6, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 7, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 8, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id: 9, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
    { id:10, image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", image2: "images/Mobile_banner2_-_Jan-1.jpg", rating: 4, reviews: 1043, name: "Classic Sweatsuit",     color: "Grey",  price: 89.99 },
];

const communityReviews = [
    { image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", rating: 5, title: "One of the best puffer vests",    text: "Hours is one of my favorite brands because of the comfort, style and quality of their products.", name: "Jake C."   },
    { image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", rating: 5, title: "Never taking this sweatsuit off", text: "I know you already know Hours has the best sweatsuits. I'm on my 5th sweatsuit set already.",    name: "Arnold R." },
    { image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", rating: 5, title: "Such a unique piece",             text: "I've never bought anything like this before. It's a workwear vest and reverses into another piece.", name: "Carter"    },
    { image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", rating: 5, title: "So glad I copped this flannel",   text: "Seen on the hunt for a new flannel that wasn't boring lately, this is it.",                       name: "Reed"      },
    { image: "images/DropShoulderHoodie-Espresso-product_1e6fe3d7-2c0c-4dd7-b6c7-d5d0603d1bda_400x.jpg", rating: 5, title: "My everyday bag",                 text: "It's hard to find a bag that has the right amount of pockets. Had to grab immediately.",          name: "Mike T."   },
];

// ==============================
// Helpers ======================
// ==============================
const stars = r => '★'.repeat(r) + '☆'.repeat(5 - r);

function productCard(p) {
    return `
        <a href="product.html?id=${p.id}" class="product-card">
            <div class="product-img-container">
                <img class="img-main" src="${p.image}" alt="${p.name}">
                <img class="img-hover" src="${p.image2}" alt="${p.name}">
                <div class="product-sizes">
                    ${sizes.map(s => `<span>${s}</span>`).join('')}
                </div>
            </div>
            <div class="product-info">
                <span class="stars">${stars(p.rating)}</span>
                <span class="reviews-count">${p.reviews} reviews</span>
                <p class="product-name">${p.name}</p>
                <p class="product-color">${p.color}</p>
                <p class="product-price">$${p.price}</p>
            </div>
        </a>`;
}

function reviewCard(r) {
    return `
        <div class="review-card">
            <img src="${r.image}" alt="${r.name}">
            <div class="review-info">
                <span class="review-stars">${stars(r.rating)}</span>
                <p class="review-title">${r.title}</p>
                <p class="review-text">${r.text}</p>
                <p class="review-name">— ${r.name}</p>
            </div>
        </div>`;
}

// ==============================
// Render =======================
// ==============================
document.querySelector('.trend_products_shop').innerHTML       = trendingProducts.map(productCard).join('');
document.querySelector('.new_arrivals_shop').innerHTML         = newArrivalsProducts.map(productCard).join('');
document.querySelector('.community_reviews_content').innerHTML = communityReviews.map(reviewCard).join('');

// ==============================
// Scroll Buttons ===============
// ==============================
[
    ['.left_btn',           '.right_btn',           '.trend_products_shop'],
    ['.new_left_btn',       '.new_right_btn',        '.new_arrivals_shop'],
    ['.community_left_btn', '.community_right_btn',  '.community_reviews_content'],
].forEach(([l, r, shop]) => {
    const el = document.querySelector(shop);
    document.querySelector(l).addEventListener('click', () => el.scrollBy({ left: -300, behavior: 'smooth' }));
    document.querySelector(r).addEventListener('click', () => el.scrollBy({ left:  300, behavior: 'smooth' }));
});