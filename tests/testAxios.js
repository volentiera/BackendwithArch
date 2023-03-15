import axios from "axios";


///////////////////////////////npm run testaxios ///////////////////////////////////////////////


let url = "http://localhost:8080/api/productos"

//cambiar ids dependiendo de el id que genera mongo
let id = "6411cb257709b1d73370e8dc"
let id2 = "640dcb93c191e79f4996429e"

//para crear producto nuevo
let product = {
    tittle: 'Pelota F-5',
    desc: 'Puma f23',
    img: 'https://i.postimg.cc/bvLrpbfw/pelota-Puma.jpg',
    price: '15000'
}

//para moduficar producto
let updatedProduct = {
    tittle: 'Pelota F-555',
}

//get
axios.get(url)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))

//post product
axios.post(url, product)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))

//update product
axios.put(`${url}/${id}`, updatedProduct)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))

//delete product
axios.delete(`${url}/${id2}`)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))

