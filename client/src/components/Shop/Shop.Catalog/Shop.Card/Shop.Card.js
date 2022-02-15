import React from 'react'
import s from './Shop.Card.module.css'
import {UPLOADS_ROUTE_PROD} from "../../../../utils/consts";


export const ShopCard = ( { addToBasket, item } ) => {
    return (
        <div className={ s.container } >
            <div className={ s.round }></div>
            <div className={ s.roundTwo }></div>
            <div className={ s.imgContainer }>
                <img src={ UPLOADS_ROUTE_PROD + item.img } alt="" />
            </div>
            <h4 className={ s.productName }>{ item.title }</h4>
            <div className={ s.priceContainer }>
                <p className={ s.price }>{ item.price } EC</p>
                <button className={ s.addToCard } onClick={ () => { addToBasket ( item._id ) } }>
                    <i className='material-icons'>shopping_cart</i>
                </button>
            </div>
        </div>
    )
}