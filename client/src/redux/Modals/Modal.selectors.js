//modals
export const isUpdateUserDataOpen = (state) => state.modal.updateUserData.isOpen
export const updateUserDataId = (state) => state.modal.updateUserData.id


export const isShowGroupPermOpen = (state) => state.modal.showGroupPermissions.isOpen
export const showGroupPermId = (state) => state.modal.showGroupPermissions.id

export const isUpdateGroupDataOpen = (state) => state.modal.updateGroupData.isOpen
export const updateGroupsDataId = (state) => state.modal.updateGroupData.id

export const isChangeCampaignOpen = (state) => state.modal.changeCampaign.isOpen
export const changeCampaignId = (state) => state.modal.changeCampaign.id

export const isCreateQiwiWalletOpen = (state) => state.modal.createNewQiwiWallet.isOpen
export const createQiwiWalletId = (state) => state.modal.createNewQiwiWallet.id


export const isUpdateQiwiWalletOpen = (state) => state.modal.updateQiwiWallet.isOpen
export const updateQiwiWalletId = (state) => state.modal.updateQiwiWallet.id


export const isTransferQiwiWalletOpen = (state) => state.modal.transferQiwiWallet.isOpen
export const transferQiwiWalletId = (state) => state.modal.transferQiwiWallet.id

//shop
export const isShopBasketOpen = (state) => state.modal.shopBasket.isOpen
export const shopBasketId = (state) => state.modal.shopBasket.id

export const isShopCreateProductOpen = (state) => state.modal.shopCreateProduct.isOpen

export const isShopUpdateProductOpen = (state) => state.modal.shopUpdateProduct.isOpen
export const shopUpdatingProductId = (state) => state.modal.shopUpdateProduct.id

// Order

export const isShopUpdateOrderOpen = (state) => state.modal.shopUpdateOrder.isOpen
export const shopUpdatingOrderId = (state) => state.modal.shopUpdateOrder.id

//qiwi
export const getBalance = (state) => state.modal.createBalance.toFixed(2)
