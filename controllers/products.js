const Product = require('../models/Product');

exports.renderProdPage = (req, res, next) => {
  res.render('admin/add-products', { title: 'add', path: 'add-products' });
};

exports.postProdPage = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.renderShopPage = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/product-list', { products, title: 'shop', path: 'shop' });
  });
};
