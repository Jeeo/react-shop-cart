const fs   = require('fs');
const qnt  = 20; // Change here
const path = './src/js/seed.js';

fs.writeFile(path, `const mockDB = [ ${genProduct(qnt).toString()}\n]\n export default mockDB`, (err) => {
  if(err) {
    throw err;
  }
  console.log('success');
});


function genProduct(qnt) {
  productList = [];

  for(let i = 0; i < qnt; i++) {
    let x = {
      id: i,
      name: `Product ${i+1}`,
      imgSrc: '/src/img/p.png',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, doloribus?',
      price: genPrice(),
      quantity: Math.floor(Math.random() * Math.ceil(10)) + 1,
      toString: function() {
      return `
  {
    id: ${this.id},
    name: '${this.name}',
    imgSrc: '${this.imgSrc}',
    desc: '${this.desc}',
    price: ${this.price},
    quantity: ${this.quantity}
  }`
      }
    }
    productList.push(x)
  }

  function genPrice() {
    let rndPrice = Math.floor(Math.random() * 100000);
    return rndPrice / 100;
  }
  return productList;
}