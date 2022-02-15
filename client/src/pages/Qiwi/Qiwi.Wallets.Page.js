import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import { QiwiWallets } from "../../components/Qiwi/Qiwi.Wallets/Qiwi.Wallets";


const QiwiWalletsPage = () => {
    return(
        <MainLayout >
            <QiwiWallets />
        </MainLayout>
    )
}

export default QiwiWalletsPage