import React from 'react'
import s from './Shop.Create.Product.module.css'

export const ShopCreateProduct = ( { openCreateProductModal } ) => {
    return (
        <>
            <button type='submit' className={s.btnCreate} onClick={ () => openCreateProductModal() } >Create product</button>
        </>
    )
}