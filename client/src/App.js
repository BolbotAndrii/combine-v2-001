import React, {Suspense} from 'react'
import {BrowserRouter as Router} from "react-router-dom"
import {useAuth} from "./hooks/AuthHook"
import {Provider} from 'react-redux'
import store from './redux/store'
import {CustomContext} from './context/Custom.Context'
import {Spinner} from "./common/Loader/Loader"

import {AuthContext} from "./context/Auth.Context"
import {useRouterComponent} from "./components/Routes/Router"
import jwt from 'jsonwebtoken'


import {UserEditComponent} from './components/Modals/Modal.Components/Modal.User.Edit.Components'
import {GroupEditComponent} from "./components/Modals/Modal.Components/Modal.Group.Edit.Components"
import {GroupPermissionsComponent} from "./components/Modals/Modal.Components/Modal.Group.Permissions.Component"
import {CampaignChangeComponent} from "./components/Modals/Modal.Components/Modal.Keitaro.ChangeCampaign.Components"
import {QiwiWalletsComponent} from "./components/Modals/Modal.Components/Modal.Wallets.Add.Components"
import {QiwiWalletsUpdateComponent} from "./components/Modals/Modal.Components/Modal.Wallets.UpdateComponents";
import {QiwiWalletsTransferComponent} from "./components/Modals/Modal.Components/Modal.Wallets.Transfer.Component";

import 'materialize-css'
import {ShopBasketComponent} from "./components/Modals/Modal.Components/Modal.Shop.Basket.Component";
import {ModalShopCreateProductComponent} from "./components/Modals/Modal.Components/Modal.Shop.Create.Product.Component";
import {ModalShopUpdateProductComponent} from "./components/Modals/Modal.Components/Modal.Shop.Update.Product.Component";
import {ModalShopOrderChangeComponent} from "./components/Modals/Modal.Components/Modal.Shop.Order.Change.Component";


export const App = () => {
        const { token, login, logout, userId, mark, name, userCoins, group } = useAuth()

        const isAuthenticated = !!token
        const routes = useRouterComponent(isAuthenticated)

    return (
        <Suspense fallback={<Spinner/>}>
            <AuthContext.Provider value={
                { token, login, logout, userId, isAuthenticated, mark, userRole: group, name, userCoins }
            }>

            <CustomContext>
                    <Provider store={store}>
                        <Router>
                            {routes}
                        </Router>
                        <UserEditComponent/>
                        <GroupPermissionsComponent/>
                        <GroupEditComponent/>
                        <CampaignChangeComponent/>
                        <QiwiWalletsComponent/>
                        <QiwiWalletsUpdateComponent/>
                        <QiwiWalletsTransferComponent/>
                        <ShopBasketComponent />
                        <ModalShopCreateProductComponent />
                        <ModalShopUpdateProductComponent />
                        <ModalShopOrderChangeComponent />
                    </Provider>


            </CustomContext>
            </AuthContext.Provider>
        </Suspense>
    )

}

