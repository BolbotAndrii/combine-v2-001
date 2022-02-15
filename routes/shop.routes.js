const {Router} = require('express')
const {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProductById,
    createOrder,
    getOrders,
    getOrderById,
    updateOrderById,
    deleteOrderById,
    getBasket,
    createBasket,
    updateBasket,
    deleteProductFromBasket
} = require('../controllers/shop.controller')

const { upload } = require('../middlewares/multer')

const router = Router()

router.post(
    '/product/create/',
    upload,
    createProduct
    )

router.get(
    '/product',
    getProducts
)

router.get(
    '/product/:id',
    getProduct
)

router.delete(
    '/product/:id',
    deleteProduct
)

router.put(
    '/product/update/:id',
    upload,
    updateProductById
)

//order

router.post(
    '/order/create/',
    createOrder
)

router.get(
    '/order/',
    getOrders
)

router.get(
    '/order/:id',
    getOrderById
)

router.put(
    '/order/:id',
    updateOrderById
)

router.delete(
    '/order/remove/:id',
    deleteOrderById
)

// basket


router.get(
    '/basket/:id',
    getBasket
)


router.post(
    '/basket/:id',
    createBasket
)

router.put(
    '/basket/:id',
    updateBasket
)

router.post(
    '/basket/delete/:id',
    deleteProductFromBasket
)

module.exports = router