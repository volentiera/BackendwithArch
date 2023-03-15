import config from './config/config.js';
import express from 'express'
import cors from 'cors'
import ProductsRoute from './router/productsRoute.js'
import MessagesRoute from './router/messagesRoute.js';

const app = express()

if(config.NODE_ENV == 'development') app.use(cors())

app.use(express.static('public'))
app.use(express.json())

const productsRoute = new ProductsRoute()
const messagesRoute = new MessagesRoute()

app.use('/api/productos', productsRoute.start())
app.use('/api/mensajes',messagesRoute.start())

const PORT = config.PORT || 8000
const server = app.listen(PORT, 
    () => console.log(
        `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV} - ${config.TIPO_PERSISTENCIA})`
))
server.on('error', error => console.log('Servidor express en error:', error) )