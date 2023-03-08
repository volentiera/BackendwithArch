import productDTO from '../DTO/productsDTO.js'

import mongodb from 'mongodb'
import ProductsBaseDAO from './productsBase.js'
const { MongoClient , ObjectId } = mongodb;

class ProductsDBMongoDAO extends ProductsBaseDAO {

    constructor(database, collection) {
        super()
        ;( async () => {
            console.log('Contectando a la Base de datos...')
            /* ---------------------------------------------------------------- */
            /*              Conexión a la base de datos warriors                */
            /* ---------------------------------------------------------------- */
            // connecting at mongoClient
            
            const connection = await MongoClient.connect('mongodb://localhost:27017',{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            const db = connection.db(database);
            this._collection = db.collection(collection);
            /* ---------------------------------------------------------------- */
            console.log('Base de datos conectada')
        })()
    }

    getAll = async _id => {
        try {
            if(_id) {
                console.log(_id)
                const product = await this._collection.findOne({_id: ObjectId(_id)})
                return [product]
            }
            else {
                const product = await this._collection.find({}).toArray()
                return product;
            }
        }
        catch(error) {
            console.log('obtenerProducto error', error)
        }
    }

    save = async product => {
        try{
            console.log(product)
            await this._collection.insertOne(product);
            return product
        }
        catch(error) {
            console.log('guardarProducto error', error)
            return product
        }

    }

    update = async (_id,product) => {
        try {
            await this._collection.updateOne({_id:ObjectId(_id)}, {$set: product});
            return product
        }
        catch(error) {
            console.log('actualizarProducto error', error)
            return product
        }
    }

    delete = async _id => {
        let deletedProduct = productDTO({},_id,null)
        try {
            await this._collection.deleteOne({_id:ObjectId(_id)})
            return deletedProduct
        }
        catch(error) {
            console.log('borrarNoticia error', error)
            return deletedProduct
        }        
    }
}

export default ProductsDBMongoDAO