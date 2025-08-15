// Sample products data
const products = [
    // Pizza Mini
    { category: 'mini', title: 'Mini Përshutë', ingredients: 'Placeholder', price: '2.50€', image: 'assets/placeholder.jpg' },
    { category: 'mini', title: 'Mini Peperoni', ingredients: 'Placeholder', price: '2.50€', image: 'assets/placeholder.jpg' },
    { category: 'mini', title: 'Mini Margarita', ingredients: 'Placeholder', price: '2.50€', image: 'assets/placeholder.jpg' },
    { category: 'mini', title: 'Mini Fungi', ingredients: 'Placeholder', price: '2.50€', image: 'assets/placeholder.jpg' },
    { category: 'mini', title: 'Mini Shtëpisë', ingredients: 'Placeholder', price: '2.50€', image: 'assets/placeholder.jpg' },
    { category: 'mini', title: 'Mini Tuna', ingredients: 'Placeholder', price: '2.50€', image: 'assets/placeholder.jpg' },
    { category: 'mini', title: 'Mini Ed\'s', ingredients: 'Placeholder', price: '2.50€', image: 'assets/placeholder.jpg' },

    // Pizza 30cm
    { category: '30cm', title: 'Pizza Ed\'s', ingredients: 'Placeholder', price: '3.50€', image: 'assets/placeholder.jpg' },
    { category: '30cm', title: 'Pizza Margarita', ingredients: 'Placeholder', price: '3.50€', image: 'assets/placeholder.jpg' },
    { category: '30cm', title: 'Pizza Peperoni', ingredients: 'Placeholder', price: '3.50€', image: 'assets/placeholder.jpg' },
    { category: '30cm', title: 'Pizza Tuna', ingredients: 'Placeholder', price: '3.50€', image: 'assets/placeholder.jpg' },
    { category: '30cm', title: 'Pizza Fungi', ingredients: 'Placeholder', price: '3.50€', image: 'assets/placeholder.jpg' },
    { category: '30cm', title: 'Pizza Shtëpisë', ingredients: 'Placeholder', price: '3.50€', image: 'assets/placeholder.jpg' },
    { category: '30cm', title: 'Pizza Përshutë', ingredients: 'Placeholder', price: '3.50€', image: 'assets/placeholder.jpg' },
    { category: '30cm', title: 'Pizza Vegjetariane', ingredients: 'Placeholder', price: '3.50€', image: 'assets/placeholder.jpg' },

    // Pizza 50cm
    { category: '50cm', title: 'Family Përshutë', ingredients: 'Placeholder', price: '9.50€', image: 'assets/placeholder.jpg' },
    { category: '50cm', title: 'Family Peperoni', ingredients: 'Placeholder', price: '9.50€', image: 'assets/placeholder.jpg' },
    { category: '50cm', title: 'Family Margarita', ingredients: 'Placeholder', price: '9.50€', image: 'assets/placeholder.jpg' },
    { category: '50cm', title: 'Family Tuna', ingredients: 'Placeholder', price: '9.50€', image: 'assets/placeholder.jpg' },
    { category: '50cm', title: 'Family 4 Stinët', ingredients: 'Placeholder', price: '9.50€', image: 'assets/placeholder.jpg' },
    { category: '50cm', title: 'Family Fungi', ingredients: 'Placeholder', price: '9.50€', image: 'assets/placeholder.jpg' },
    { category: '50cm', title: 'Family Shtëpisë', ingredients: 'Placeholder', price: '9.50€', image: 'assets/placeholder.jpg' },
    { category: '50cm', title: 'Family Vegjetariane', ingredients: 'Placeholder', price: '9.50€', image: 'assets/placeholder.jpg' },
    { category: '50cm', title: 'Family Ed\'s', ingredients: 'Placeholder', price: '9.50€', image: 'assets/placeholder.jpg' },

    // Pizza Calzone
    { category: 'calzone', title: 'Calzone Tuna', ingredients: 'Placeholder', price: '3.00€', image: 'assets/placeholder.jpg' },
    { category: 'calzone', title: 'Calzone Përshutë', ingredients: 'Placeholder', price: '3.00€', image: 'assets/placeholder.jpg' },
    { category: 'calzone', title: 'Calzone Suxhuk', ingredients: 'Placeholder', price: '3.00€', image: 'assets/placeholder.jpg' },
    { category: 'calzone', title: 'Calzone Mix', ingredients: 'Placeholder', price: '3.00€', image: 'assets/placeholder.jpg' },

    // Drinks
    { category: 'drinks', title: 'CocaCola', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Schwepes', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Sprite', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Fanta Orange', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Fanta Exotic', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Ice Tea', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Golden Eagle', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Relax Pjeshkë', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Relax Dredhëz', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Relax Mollë', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Relax Vishnje', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Relax Boronicë', ingredients: 'Placeholder', price: '1.20€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Ujë i thjeshtë', ingredients: 'Placeholder', price: '0.50€', image: 'assets/placeholder.jpg' },
    { category: 'drinks', title: 'Ujë i gazuar', ingredients: 'Placeholder', price: '0.80€', image: 'assets/placeholder.jpg' }
];

// Sample products data (same as you have now)
function renderProducts(category) {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    const filtered = products.filter(p => p.category === category);
    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div class="product-title">${product.title}</div>
            <div class="product-ingredients">${product.ingredients}</div>
            <div class="product-price">${product.price}</div>
        `;
        container.appendChild(card);
    });
}

// Category button click
const categoryButtons = document.querySelectorAll('.category');
categoryButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        // Hide welcome and show menu
        document.getElementById('welcome-section').style.display = 'none';
        document.getElementById('menu-section').style.display = 'block';

        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.category);
    });
});

// Hide Offers button if no offers
const offersButton = document.querySelector('[data-category="offers"]');
if (!products.some(p => p.category === 'offers')) {
    offersButton.style.display = 'none';
}

// On load → only show welcome page
document.getElementById('welcome-section').style.display = 'flex';
document.getElementById('menu-section').style.display = 'none';

// Bounce the categories carousel to show it's scrollable
function bounceCategoriesCarousel() {
    const carousel = document.querySelector('.categories-carousel');

    if (!carousel || carousel.scrollWidth <= carousel.clientWidth) return; // skip if not scrollable

    let bounceCount = 0;
    const maxBounces = 2;

    function bounceOnce() {
        carousel.scrollTo({ left: 100, behavior: 'smooth' });
        setTimeout(() => {
            carousel.scrollTo({ left: 0, behavior: 'smooth' });
            bounceCount++;
            if (bounceCount < maxBounces) {
                setTimeout(bounceOnce, 500);
            }
        }, 500);
    }

    setTimeout(bounceOnce, 800); // delay to allow page render
}

// Call it once on page load
window.addEventListener('load', bounceCategoriesCarousel);

function setLayoutVars() {
    const header = document.querySelector('header');
    const navbar = document.querySelector('.navbar');
    const root = document.documentElement;

    root.style.setProperty('--header-height', `${header.offsetHeight}px`);
    root.style.setProperty('--navbar-height', `${navbar.offsetHeight}px`);
}

window.addEventListener('load', setLayoutVars);
window.addEventListener('resize', setLayoutVars);
