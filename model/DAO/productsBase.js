class ProductsBaseDAO {

    getNext_Id(products) {
        let lg = products.length
        return lg? parseInt(products[lg-1]._id) + 1 : 1
    }

    getIndex(_id,products) {
        return products.findIndex(prod => prod? prod._id == _id: true)
    }
}

export default ProductsBaseDAO