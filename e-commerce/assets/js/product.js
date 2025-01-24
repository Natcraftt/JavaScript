const products = [
    {
        name: 'ColorFul Pattern Shirts',
        category: 'Clothing',
        price: 238.85,
        reduction: '',
        star: 5,
        image : "assets/img/product-2-1.jpg",
        id : "154",
    },
    {
        name: 'ColorFul Pattern Shirts',
        category: 'Clothing',
        price: 238.85,
        reduction: '',
        star: 5,
        image : "assets/img/product-2-1.jpg",
        id : "1865",
    },
    {
        name: 'ColorFul Pattern Shirts',
        category: 'Clothing',
        price: 238.85,
        reduction: '',
        star: 5,
        image : "assets/img/product-2-1.jpg",
        id : "1868",
    },
    {
        name: 'ColorFul Pattern Shirts',
        category: 'Clothing',
        price: 238.85,
        reduction: '',
        star: 5,
        image : "assets/img/product-2-1.jpg",
        id : "186165",
    },
    {
        name: 'ColorFul Pattern Shirts',
        category: 'Clothing',
        price: 238.85,
        reduction: '',
        star: 5,
        image : "assets/img/product-2-1.jpg",
        id : "1849",
    },
    {
        name: 'ColorFul Pattern Shirts',
        category: 'Clothing',
        price: 238.85,
        reduction: '',
        star: 5,
        image : "assets/img/product-2-1.jpg",
        id : "489",
    },
    {
        name: 'ColorFul Pattern Shirts',
        category: 'Clothing',
        price: 238.85,
        reduction: '',
        star: 5,
        image : "assets/img/product-2-1.jpg",
        id : "1894"
    },
    {
        name: 'ColorFul Pattern Shirts',
        category: 'Clothing',
        price: 238.85,
        reduction: '',
        star: 5,
        image : "assets/img/product-2-1.jpg",
        id : "58946",
    }
];

const productsContainer = document.getElementById("product");
let index = 0;

products.forEach(product => {
  const star = product.star
  let starhtml = '';
  for(i=0;i<star;i++) {
    starhtml += `<i class="fi fi-rs-star"></i>` 
  }
  const btnId = `Cart-${index}`;
  const productHTML = `
      <div class="productitem">
                <div class="productbanner">
                  <a href="details.html" class="productimages">
                    <img src="${product.image}" alt="${product.image}" class="productimg default">
                  </a>
                  <div class="productactions">
                    <a href="#" class="actionbtn" aria-label="Quick View">
                      <i class="fi fi-rs-eye"></i>
                    </a>
                    <a href="#" class="actionbtn" aria-label="Add to Wishlist">
                      <i class="fi fi-rs-heart"></i>
                    </a>
                    <a href="#" class="actionbtn" aria-label="Compare">
                      <i class="fi fi-rs-shuffle"></i>
                    </a>
                  </div>
                  <div class="productbadge light-green">Hot</div>
                </div>
                <div class="productcontent">
                  <span class="productcategory">${product.category}</span>
                  <a href="details.html">
                    <h3 class="producttitle">${product.name}</h3>
                  </a>
                  <div class="productrating">
                    ${starhtml}
                  </div>
                  <div class="productprice flex">
                    <span class="newprice">${product.price}</span>
                    <span class="newprice">${product.price}</span>
                  </div>
                  <button id="${btnId}" class="" aria-label="Add To Cart">
                    <i class="fi fi-rs-shopping-bag-add"></i>
                  </button>
                </div>
              </div>

            `;


  productsContainer.innerHTML += productHTML;
  index++
  const idPorduct = product.id
  addCart(btnId,product);
});

function addCart(id,product) {
    const btn = document.getElementById(id)
    console.log(product)
    btn.addEventListener("click" , function(e){
        alert(product.name)
    })

}

