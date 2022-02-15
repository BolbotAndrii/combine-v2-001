import React from 'react'
import {Shop} from "../../components/Shop/Shop"
import {WithoutBCLayout} from "../../layouts/NoBreadcrumbsLayout";

const ShopPage = () => {
    return (
        <WithoutBCLayout>
            <Shop />
        </WithoutBCLayout>
    )
}

export default ShopPage