const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/add-product', productsController.renderProdPage);
router.post('/add-product', productsController.postProdPage);

module.exports = router;
