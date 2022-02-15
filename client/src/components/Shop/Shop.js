import React from 'react'
import {ShopControl} from "./Shop.Control/Shop.Control"
import {ShopCatalog} from "./Shop.Catalog/Shop.Catalog"

export const Shop = () => {
    return (
        <>
            <ShopControl />
            <ShopCatalog />
        </>
    )
}