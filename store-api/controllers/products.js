const Product = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    const products = await Product.find({}).select('name price')
    res.status(200).json({products, nbHits: products.length  })
}

const getAllProducts = async (req,res) => {
    const { featured, company, name, sort, fields, numericFilters } = req.query;
    const queryObject = {}

    if(featured){
        queryObject.featured = featured === 'true'? true:false
    }

    if(company){
        queryObject.company = company
    }

    if(name){
        queryObject.name = {$regex: name, $options: 'i'}
    }

    if(numericFilters){

        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte',
        }
        const regEx = /\b(<|>|>=|=|<|<=)\b/g
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`)
        
        const options = ['price', 'rating'];
        
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-')
            if(options.includes(field)){
                queryObject[field] = {[operator]:Number(value)}
            }
        });
        
    }

    console.log(queryObject);    
    let result = Product.find(queryObject)

    // sort
    if(sort){
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    }else{
        result = result.sort('createdAt')
    }

    if(fields){
        const filedList = fields.split(',').join(' ');
        result = result.select(filedList)
    }

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit;

    // 23 items - so if the use decides to limitto only 7 products then we will have 4 pages 7,7,7,2. SO if the user wants to go to page 2 we will skip 7 items. 

    result = result.skip(skip).limit(limit)
     
    const products = await result

    // console.log(req.query);

    res.status(200).json({products, nbHits: products.length  })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}