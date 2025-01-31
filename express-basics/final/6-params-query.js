const express = require('express')
const app = express()
const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})

app.get('/api/products', (req,res) => {
    const newProducts = products.map((product) => {
        const {id, name, image} = product;
        return {id, name, image};
    })
    res.json(newProducts)
})

app.get('/api/products/:productId', (req, res) => {
    // console.log(req.params);
    const {productId} = req.params;

    const singleProduct = products.find((product) => product.id === Number(productId));
    res.json(singleProduct ? singleProduct : res.status(404).send("Product Does not exists"));
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    console.log(req.params);
    res.send("Amazing product")
})


app.get('/api/v1/query', (req,res) => {
    // console.log(req.query);
    const {search, limit} = req.query;
    let sortedProducts = [...products];
    
    if(search){
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search)
        })
    }

    if(limit){
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }

    if(sortedProducts.length < 1){
        // res.status(200).send("NO products found")
        return res.status(200).json({sucess:true, data:[]}) // return so that the funcion ends and we do not get an error 
    }

    res.status(200).json(sortedProducts)
})


app.listen(5000, () => {
    console.log('Server is listening on port 5000...');    
})
