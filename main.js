const productsArr = [
  {
    id: 0,
    imgSrc: './assets/products/product1.jpeg',
    name: 'Letra decorada con quilling o filigrana en papel.',
    materials: ['papel', 'cartulina'],
    description:
      'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    id: 1,
    imgSrc: './assets/products/product2.jpeg',
    name: 'Converse en fomix termoformado.',
    materials: ['fomix', 'cinta'],
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 2,
    imgSrc: './assets/products/product3.jpeg',
    name: 'Nacimiento y vela a base de fomix.',
    materials: ['fomix', 'pintura'],
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 3,
    imgSrc: './assets/products/product4.jpeg',
    name: 'Angel navideño',
    materials: ['bombillo', 'cinta', 'tela'],
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 4,
    imgSrc: './assets/products/product5.jpeg',
    name: 'Bouquet de fotos familiares.',
    materials: ['impresion', 'cartulina', 'cinta', 'flores'],
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    id: 5,
    imgSrc: './assets/products/product6.jpeg',
    name: 'CAMBIAR ESTE',
    materials: ['fomix', 'cinta'],
    description:
      'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
];

const productsList = document.getElementById('products-list');

for (let i = 0; i < productsArr.length; i += 1) {
  const product = document.createElement('article');
  product.className = 'product';
  const productInnerHTML = `
    <div class="product-img-wrapper">
      <img
        src="${productsArr[i].imgSrc}"
        alt="${productsArr[i].name}"
        class="product-img"
      />
    </div>
    <div class="product-content">
      <h3 class="product-title">
      ${productsArr[i].name}
      </h3>
      <p>
      ${productsArr[i].materials.join(" | ")}
      </p>
      <hr />
      <p>
      ${productsArr[i].description}
      </p>
    </div>
`;
  product.innerHTML = productInnerHTML;
  productsList.appendChild(product);
}
