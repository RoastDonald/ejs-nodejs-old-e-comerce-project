const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/', productsController.renderShopPage);

module.exports = router;
