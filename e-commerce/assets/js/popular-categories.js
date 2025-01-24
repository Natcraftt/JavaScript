const popularProduct = [
    {
        name: 'T-Shirt',
        image: 'assets/img/category-1.jpg'
    },
    {
        name: 'Bag',
        image: 'assets/img/category-2.jpg'
    },
    {
        name: 'Sandale',
        image: 'assets/img/category-3.jpg'
    },
    {
        name: 'Scarf-Cap',
        image: 'assets/img/category-4.jpg'
    },
    {
        name: 'Shoes',
        image: 'assets/img/category-5.jpg'
    },
    {
        name: 'Pillowcase',
        image: 'assets/img/category-6.jpg'
    },
    {
        name: 'Jumpsuit',
        image: 'assets/img/category-7.jpg'
    },
    {
        name: 'Hats',
        image: 'assets/img/category-8.jpg'
    }
];
const productContainer = document.getElementById("popularcategories")

popularProduct.forEach(product => {
    const productHTML = 
            `<a href="shop.html" class="category__item swiper-slide">
                    <img
                        src="${product.image}"
                        alt=""
                        class="category__img"
                    />
                    <h3 class="category__title">${product.name}</h3>
                    </a>`
    productContainer.innerHTML += productHTML;
});