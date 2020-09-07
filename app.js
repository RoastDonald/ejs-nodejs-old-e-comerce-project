const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');

//exports
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
// app.engine('hbs', handlebars());
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);



app.use((req, res, next) => errorController.getErrorPage);

app.listen(3000);
