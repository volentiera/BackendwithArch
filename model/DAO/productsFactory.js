import ProductsDBMongo from './productsDBMongo.js'

class ProductsFactoryDAO {
    static get(tipo) {
        switch(tipo) {
            case 'MONGO': return new ProductsDBMongo('mibase','noticias')
            default: return new ProductsDBMongo
        }
    }
}

export default ProductsFactoryDAO