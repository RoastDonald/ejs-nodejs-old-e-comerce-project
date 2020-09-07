const fs = require('fs');
const path = require('path');

const root = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const readProducts = (cb) => {
  fs.readFile(root, (error, data) => {
    if (!error) {
      return cb(JSON.parse(data));
    }
    cb([]);
  });
};

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    readProducts((products) => {
      products.push(this);
      fs.writeFile(root, JSON.stringify(products), (error) => {
        console.log(error);
      });
    });
  }

  static fetchAll(cb) {
    readProducts(cb);
  }
};
