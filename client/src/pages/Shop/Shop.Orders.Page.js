import React from 'react'
import {MainLayout} from "../../layouts/MainLayout"
import {ShopOrders} from "../../components/Shop/Shop.Orders/Shop.Orders"

const ShopOrdersPage = () => {
    return (
        <MainLayout>
            <ShopOrders />
        </MainLayout>
    )
}

export default ShopOrdersPage