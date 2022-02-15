import { createAction } from '@reduxjs/toolkit'

export const modalEditUserAction = createAction('modalEditUserAction')
export const modalGetPermAction = createAction('modalGetPermAction')
export const modalEditGroupAction = createAction('modalEditGroupAction')
export const modalChangeCampaignAction = createAction('modalChangeCampaignAction')
export const modalCreateQiwiWalletAction = createAction('modalCreateQiwiWalletAction')
export const modalUpdateQiwiWalletAction = createAction('modalUpdateQiwiWalletAction')
export const modalTtransferQiwiWalletAction = createAction('modalTtransferQiwiWalletAction')

export const modalShopBasketAction = createAction('modalShopBasketAction')

export const modalCreateProductAction = createAction('modalCreateProductAction')
export const modalUpdateProductAction = createAction('modalUpdateProductAction')

// Order
export const modalUpdateOrderAction = createAction('modalUpdateOrderAction')



export const balance = createAction('balanceCounter')
export const unsetBalance = createAction('balanceNull')