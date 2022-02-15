import React from 'react'
import s from './Shop.Products.Table.module.css'
import { UPLOADS_ROUTE } from "../../../utils/consts";

export const ShopProductsTable = ( { products, updateProduct, removeProduct } ) => {
    return (


        <>
            <div className={ s.tableContainer }>
                <div className={ s.tableHeader }>
                    <span>id</span>
                    <span>Picture</span>
                    <span>Title</span>
                    <span>Price</span>
                    <span>Count</span>
                    <span>Change</span>
                    <span>Delete</span>
                </div>
                {
                    products && products.map( item => (
                        <div className={ s.tableRow } key={ item._id }>
                            <span>{ item._id }</span>
                            <span className={ s.productImg }>
                                <img src={  UPLOADS_ROUTE + item.img } alt={ item.title } loading="lazy"/>
                            </span>
                            <span>{ item.title }</span>
                            <span>{ item.price }</span>
                            <span>{ item.count }</span>
                            <span className={ s.buttonCont }>
                                <button type='submit' className={ `blue-text ${ s.tableBtn }` } onClick={ () => updateProduct(item._id) }>Change</button>
                            </span>
                            <span className={ s.buttonCont }>
                                <button type='submit' className={ `red-text ${ s.tableBtn }` } onClick={ () => removeProduct(item._id) }>Delete</button>
                            </span>
                        </div>
                    ) )
                }
            </div>
        </>
    )
}