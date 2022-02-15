import React, { useEffect, useState } from 'react'
import { ShopProductsTable } from "../Shop.Products.Table/Shop.Products.Table"
import { ShopCreateProduct } from "../Shop.Create.Product/Shop.Create.Product"
import { useDispatch, useSelector } from "react-redux"
import * as Actions from '../../../redux/Modals/Modals.action'
import { deleteProduct, getProducts } from "../../../utils/api"
import { notification } from "../../../utils/notification"
import { isShopCreateProductOpen, isShopUpdateProductOpen } from "../../../redux/Modals/Modal.selectors";

export const ShopProducts = () => {
    const [products, setProducts] = useState([])
    const [remove, setRemove] = useState(false)
    const dispatch = useDispatch()
    const modSelectorCreateProd = useSelector(isShopCreateProductOpen)
    const modSelectorUpdateProd = useSelector(isShopUpdateProductOpen)

    const openCreateProductModal = ( ) => {
        dispatch( Actions.modalCreateProductAction( { isOpen: true } ) )
    }

    const updateProduct = (id) => {
        dispatch( Actions.modalUpdateProductAction( { isOpen: true, id } ) )
    }


    useEffect( () => {
        getProducts()
            .then( ( { data } ) => {
                setProducts( data )
            })
            .catch( e => {
                notification( e.response.data.message, 'backGround: red' )
            })
    },[remove, modSelectorCreateProd, modSelectorUpdateProd])



    const removeProduct = ( id ) => {
        deleteProduct( id )
            .then( ( { data } ) => {
                setRemove(( prev) => !prev )
                notification( data.message, 'backGround: green')
            } )
            .catch( e => {
                console.error(e)
            })
    }

    return (
        <>
            <ShopCreateProduct openCreateProductModal={ openCreateProductModal }/>
            <ShopProductsTable
                    products={ products }
                    updateProduct={ updateProduct }
                    removeProduct={ removeProduct }
            />
        </>
    )
}