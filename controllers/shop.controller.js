const Product = require('../models/Shop/Products')
const Order = require('../models/Shop/Orders')
const Basket = require('../models/Shop/Baskets')
const User = require('../models/Users/Users')
// Product

const createProduct = async ( req, res ) => {
    try {

        const productDataBody = JSON.parse( JSON.parse( JSON.stringify( req.body ) ).productData)

        const product = await new Product({
            title:  	productDataBody.title,
            img: 		req.file.filename,
            price: 		productDataBody.price,
            count: 		productDataBody.count
        })

        const resultProduct = await product.save()

        if(resultProduct) {
            res.status( 200 ).json( { message: 'Product created' } )
        } else {
            res.status( 400 ).json ( { message: 'Product in\'t created' } )
        }

    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error!' } )
    }
}

const getProducts = async ( req, res ) => {
    try {
        const products = await Product.find()

        if(!products) {
            res.status( 400 ).json( { message: 'No products yet' } )
        }

        res.status( 200 ).json( products )

    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error!' } )
    }
}

const getProduct = async ( req, res ) => {
    try {
        const product = await Product.findOne({ _id: req.params.id } )

        if(!product) {
            res.status( 400 ).json( { message: 'No products yet' } )
        }

        res.status( 200 ).json( product )

    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error!' } )
    }
}

const deleteProduct = async ( req, res ) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        if ( product ) {
            res.status( 200 ).json( { message: 'Product removed!' } )
        }

    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error!' } )
    }
}

const updateProductById = async ( req, res ) => {
    try {
        const filter = { _id: req.params.id }

        const productUpdateDataBody = JSON.parse( JSON.parse( JSON.stringify( req.body ) ).productData)

        if (req.file)  {
            const updatedProduct = await Product.findOneAndUpdate( filter, {
                title:  	productUpdateDataBody.title,
                img: 		req.file.filename,
                price: 		productUpdateDataBody.price,
                count: 		productUpdateDataBody.count
            }, {
                new: true
            } )

            if(!updatedProduct) {
                return res.status( 200 ).json( { message: 'Product not updated' } )
            }

            return res.status( 200 ).json( { message: 'Product updated' } )

        }  else {
            const updatedProduct = await Product.findOneAndUpdate( filter, {
                title:  	productUpdateDataBody.title,
                price: 		productUpdateDataBody.price,
                count: 		productUpdateDataBody.count
            }, {
                new: true
            } )

            if(!updatedProduct) {
                return res.status( 200 ).json( { message: 'Product not updated' } )
            }
            return  res.status( 200 ).json( { message: 'Product updated' } )
        }


    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error!' } )
    }
}


//Order

const createOrder = async ( req, res ) => {
    try {

        const { orderProducts, orderUserMark, orderSum,  orderUser } = req.body

        const createdOrder = await new Order({
            user: orderUser,
            mark: orderUserMark,
            sum: orderSum,
            products: orderProducts
        }).save()

        if( createdOrder ) {
            await Basket.findByIdAndUpdate({ _id: orderUser }, {
                products: []
            })


            await User.findOneAndUpdate({ _id: orderUser }, {
                $inc: {
                    userCoins: - orderSum
                }
            } )

            await Promise.all( orderProducts.map( async (item)  => {
                const productCount = -1

                await Product.findByIdAndUpdate( { _id: item }, {
                    $inc: {
                        count: productCount
                    }
                })
            }))

           return res.status( 200 ).json( { message: 'Order created!' } )
        }
return
    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error!' } )
    }
}

const getOrders = async ( req, res ) => {
    try {

        const orders = await Order.find()
        if(orders) {
            res.status( 200 ).json( orders )
        }

    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error!' } )
    }
}

const getOrderById = async ( req, res ) => {
    try {

        const foundOrder = await Order.findById( { _id: req.params.id } )

        if( foundOrder ) {
         return  res.status( 200 ).json( foundOrder )
        }

    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error!' } )
    }
}

const updateOrderById = async ( req, res ) => {
    try {
        const  { orderStatus } = req.body

        const updatedOrder = await Order.findOneAndUpdate({ _id: req.params.id },
            {
                status: orderStatus
            })
        if(updatedOrder) {
            return res.status( 200 ).json( { message: 'Status updated!' } )
        }

        return res.status( 200 ).json( { message: 'Status updating error!' } )
    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error!' } )
    }
}

const deleteOrderById = async ( req, res ) => {
    try {
        const product = await Order.findByIdAndDelete({_id: req.params.id})

        if ( product ) {
            res.status( 200 ).json( { message: 'Order has been removed!' } )
        }

    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error!' } )
    }
}


//Basket

const getBasket = async ( req, res ) => {
    try {
        const basket = await Basket.findById({ _id: req.params.id } )

        if(!basket) {
            return res.status(400).json( { message: 'Basket is empty yet' } )
        }

        return res.status(200).json(basket)

    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error !' } )
    }
}

const createBasket = async ( req, res ) => {
    try {

        const basket = await Basket.findOne({ user: req.params.id } )

        const { productId } = req.body
        const userId = req.params.id


        if( !basket ) {
            const createdBasket = new Basket ( {
                _id: userId,
                user: userId,
                products: productId
            } )
            createdBasket.save()
            return  res.status(200).json({ message: 'Product successfully added to ur basket'})

        } else {
            let userBasket = await Basket.findOneAndUpdate({
                    user: req.params.id
                },
                {
                    $addToSet: {
                        products: productId
                    }
                })

            return res.status(200).json({ message: 'Product successfully added to ur basket'})
        }

    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error !' } )
    }
}

const updateBasket = async ( req, res ) => {
    try {

    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error !' } )
    }
}

const deleteProductFromBasket = async ( req, res ) => {
    try {

        const { productId } = req.body

        await Basket.findOneAndUpdate({
                _id: req.params.id
            },
            {
                $pull: {
                    products: productId
                }
            })
        return res.status(200).json( { message: 'Product was successfully deleted' } )
    } catch (e) {
        return res.status( 500 ).json( { message: 'Server error !' } )
    }
}

module.exports = {
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
    createBasket,
    updateBasket,
    deleteProductFromBasket,
    getBasket
}