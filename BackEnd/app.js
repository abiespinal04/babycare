const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')
const userRoutes = require('./api/routes/user');

mongoose.connect(
    'mongodb+srv://test:'+ process.env.MONGO_ATLAS_PW+'@test-gatr3.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true }
    )

app.use(morgan('dev'));

// Use for reading the body of a request
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

//CORS Handling
app.use((req,res,next) => {
    /*
    //This header allows access to only the specified client
    // res.header('Access-Control-Allow-Origin', 'http:/my-cool-page.com');
    */
    //This header allows access to every client domain
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next();
});

//Middleware //every request is tunneled through here
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/user', userRoutes)
//If you get to this middleware, it means the above routes didnt handle their response properly(hence and error)
app.use((req,res,next) => {
    const error = new Error('Not Found');
    error.status= 404 ;
    next(error);
});
//next means go to the next middleware
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message:error.message
        }
    })
});

module.exports = app; 