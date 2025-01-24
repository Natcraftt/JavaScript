const productsData = [
    {
      title: "Hot Releases",
      items: [
        {
          image: "./assets/img/showcase-img-1.jpg",
          name: "Floral Print Casual Cotton Dress",
          new_price: "238.85",
          old_price: "245.80",
        },
        {
          image: "./assets/img/showcase-img-2.jpg",
          name: "Ruffled Solid Long Sleeve Blouse",
          new_price: "238.85",
          old_price: "245.80",
        },
        {
          image: "./assets/img/showcase-img-3.jpg",
          name: "Multi-Color Print V-neck T-shirt",
          new_price: "238.85",
          old_price: "245.80",
        },
      ],
    },
    {
      title: "Deals & Outlet",
      items: [
        {
          image: "./assets/img/showcase-img-4.jpg",
          name: "Fish Print Patched T-shirt",
          new_price: "238.85",
          old_price: "245.80",
        },
        {
          image: "./assets/img/showcase-img-5.jpg",
          name: "Fintage Floral Print Dress",
          new_price: "238.85",
          old_price: "245.80",
        },
        {
          image: "./assets/img/showcase-img-6.jpg",
          name: "Multi-Color Stripe Circle T-shirt",
          new_price: "238.85",
          old_price: "245.80",
        },
      ],
    },
    {
        title: "Top Selling",
        items: [
          {
            image: "./assets/img/showcase-img-4.jpg",
            name: "Geometric Printed Long Sleeve Blouse",
            new_price: "238.85",
            old_price: "245.80",
          },
          {
            image: "./assets/img/showcase-img-8.jpg",
            name: "Print Patchwork Maxi Dress",
            new_price: "238.85",
            old_price: "245.80",
          },
          {
            image: "./assets/img/showcase-img-9.jpg",
            name: "Daisy Floral Print Straps Jumpsuit",
            new_price: "238.85",
            old_price: "245.80",
          },
        ],
      },
      {
        title: "Trendy",
        items: [
          {
            image: "./assets/img/showcase-img-7.jpg",
            name: "Floral Print Casual Cotton",
            new_price: "238.85",
            old_price: "245.80",
          },
          {
            image: "./assets/img/showcase-img-8.jpg",
            name: "Solid Long Sleeve",
            new_price: "238.85",
            old_price: "245.80",
          },
          {
            image: "./assets/img/showcase-img-9.jpg",
            name: "Multi-Color Print V-neck",
            new_price: "238.85",
            old_price: "245.80",
          },
        ],
      },
  ];
  
  const productCategories = document.getElementById('showcaseProduct'); 
  
  productsData.forEach(part => {
    let productSection = `<div class="showcase__wrapper">
                        <h3 class="section__title">${part.title}</h3>`;
  
    part.items.forEach(item => {  
      productSection += `
        <div class="showcase__item">
          <a href="details.html" class="showcase__img-box">
            <img
              src="${item.image}"
              alt="${item.name}"
              class="showcase__img"
            />
          </a>
          <div class="showcase__content">
            <a href="details.html">
              <h4 class="showcase__title">${item.name}</h4>
            </a>
            <div class="showcase__price flex">
              <span class="new__price">$${item.new_price}</span>
              <span class="old__price">$${item.old_price}</span>
            </div>
          </div>
        </div>
      `;
    });
  
    productCategories.innerHTML += productSection;  
  });
  