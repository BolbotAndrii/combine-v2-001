import { lazy } from 'react'
import {
    APPS_ROUTE,
    CF_ROUTE,
    HOME_ROUTE,
    KEITARO_ROUTE,
    QIWI_ROUTE,
    REGISTRAR_ROUTE,
    SHOP_ROUTE,
    USER_ROUTE
} from "../../utils/consts";

const authRoutes = [
    {
        label: 'Home',
        path: HOME_ROUTE,
        component: lazy(() => import('../../pages/Common/Home.Page')),
        exact: true,
    },
    {
        label: 'Registrar',
        path: REGISTRAR_ROUTE,
        component: lazy(() => import ('../../pages/Registrator/Registrator.Page')),
        exact: true,
    },
    {
        label: 'CloudFlare',
        path: CF_ROUTE,
        component: lazy(() => import ('../../pages/CloudFlare/CloudFlare.Page')),
        exact: true,
    },
    {
        label: 'CloudFlare',
        path: CF_ROUTE + '/add',
        component: lazy(() => import ('../../pages/CloudFlare/CloudFlare.Add.Page')),
        exact: true,
    },
    {
        label: 'Keitaro',
        path: KEITARO_ROUTE,
        component: lazy(() => import ('../../pages/Keitaro/Keitaro.Page')),
        exact: true,
    },
    {
        label: 'Keitaro Campaings',
        path: KEITARO_ROUTE + '/campaigns',
        component: lazy(() => import ('../../pages/Keitaro/Keitaro.Campaings.Page')),
        exact: true,
    },
    {
        label: 'Keitaro landings',
        path: KEITARO_ROUTE + '/landings',
        component: lazy(() => import ('../../pages/Keitaro/Keitaro.Landings.Page')),
        exact: true,
    },
    {
        label: 'Keitaro Offers',
        path: KEITARO_ROUTE + '/offers',
        component: lazy(() => import ('../../pages/Keitaro/Keitaro.Offers.Page')),
        exact: true,
    },
    {
        label: 'Keitaro Domains',
        path: KEITARO_ROUTE + '/domains',
        component: lazy(() => import ('../../pages/Keitaro/Keitaro.Domains.Page')),
        exact: true,
    },
    {
        label: 'Qiwi',
        path: QIWI_ROUTE,
        component: lazy(() => import ('../../pages/Qiwi/Qiwi.Wallets.Page')),
        exact: true,
    },
    {
        label: 'Qiwi',
        path: QIWI_ROUTE + '/wallets',
        component: lazy(() => import ('../../pages/Qiwi/Qiwi.Wallets.Page')),
        exact: true,
    },
    {
        label: 'Qiwi',
        path: QIWI_ROUTE + '/cards',
        component: lazy(() => import ('../../pages/Qiwi/Qiwi.Cards.Page')),
        exact: true,
    },
    {
        label: 'Qiwi',
        path: QIWI_ROUTE + '/logs',
        component: lazy(() => import ('../../pages/Logs/Qiwi.Logs.Page')),
        exact: true,
    },
    {
        label: 'Users',
        path: USER_ROUTE,
        component: lazy(() => import ('../../pages/Users/Users.Page' )),
        exact: true,
    },
    {
        label: 'Add user',
        path: USER_ROUTE + '/create',
        component: lazy(() => import ('../../pages/Users/Users.Add.Page' )),
        exact: true,
    },
    {
        label: 'Create groups',
        path: USER_ROUTE + '/groups/create',
        component: lazy(() => import ('../../pages/Groups/Groups.Create.Page' )),
        exact: true,
    },
    {
        label: 'All groups',
        path: USER_ROUTE + '/groups',
        component: lazy(() => import ('../../pages/Groups/Groups.Page' )),
        exact: true,
    },
    {
        label: 'Applications',
        path: APPS_ROUTE,
        component: lazy(() => import ('../../pages/Apps/Application.Page' )),
        exact: true,
    },
    {
        label: 'New application',
        path: APPS_ROUTE + '/create',
        component: lazy(() => import ('../../pages/Apps/Application.Add.Page' )),
        exact: true,

    },
    {
        label: 'Application detail',
        path: APPS_ROUTE + '/:id',
        component: lazy(() => import ('../../pages/Apps/Application.Detail.Page' )),
        exact: true,

    },
    {
        label: 'Shop',
        path: SHOP_ROUTE,
        component: lazy(() => import ('../../pages/Shop/Shop.Page' )),
        exact: true,
    },
    {
        label: 'Shop',
        path: SHOP_ROUTE + '/products',
        component: lazy(() => import ('../../pages/Shop/Shop.Products.Page' )),
        exact: true,

    },
    {
        label: 'Orders',
        path: SHOP_ROUTE + '/orders',
        component: lazy( () => import ('../../pages/Shop/Shop.Orders.Page' )),
        exact: true,
    }
]

export default authRoutes