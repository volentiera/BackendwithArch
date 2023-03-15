import axios from "axios";
let url = "http://localhost:8080/api/productos"

///////////////////////////////npm run testmocha ///////////////////////////////////////////////

const saveProduct = (product) => axios.post(url, product)
const getProducts = () => axios.get(url)
const deleteProduct = (id)=> axios.delete(`${url}/${id}`)
const updateProduct = (id, product)=> axios.put(`${url}/${id}`, product)

describe('Checking if server works', ()=>{
    before(()=>{
        console.log('Test start')
    })
    after(()=>{
        console.log('Test end')
    })
    beforeEach(()=>{
        console.log('Singular test start');
    })
    afterEach(()=>{
        console.log('Singular test end');
    })

    it('Should get all products', async ()=>{
        const allData = await getProducts()
        console.log(allData.data)
    })

    it('Should save one product', async ()=>{
        let product = {
            tittle: 'Pelota F-5',
            desc: 'Puma f23',
            img: 'https://i.postimg.cc/bvLrpbfw/pelota-Puma.jpg',
            price: '15000'
        }
        const productSaved = await saveProduct(product)
        console.log(productSaved.data)
    })

    it('Should update the last product', async ()=>{
        const allProducts = await getProducts()
        const getlastId = allProducts.data[allProducts.data.length -1]._id
        const productUpdated = await updateProduct(getlastId, {price: "15654"})
        console.log(productUpdated.data)
    })

    it('Should delete the last product', async ()=>{
        const allProducts = await getProducts()
        const getlastId = allProducts.data[allProducts.data.length -1]._id
        const productDeleted = await deleteProduct(getlastId)
        console.log(productDeleted.data)
    })
})