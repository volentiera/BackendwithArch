import ProductsDBMongo from './productsDBMongo.js'

class ProductsFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO': return new ProductsDBMongo('myDB','ecommerce')
            default: return new ProductsDBMongo('myDB','ecommerce')
        }
    }
}

export default ProductsFactoryDAO