import * as actions from './Modals.action'
import { createReducer } from '@reduxjs/toolkit'
import { combineReducers } from '@reduxjs/toolkit'


const updateUserData = createReducer({ isOpen: false, id: null }, {
	[actions.modalEditUserAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})

const showGroupPermissions = createReducer({ isOpen: false, id: null }, {
	[actions.modalGetPermAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})

const updateGroupData = createReducer({ isOpen: false, id: null }, {
	[actions.modalEditGroupAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})

const changeCampaign = createReducer({ isOpen: false, id: null }, {
	[actions.modalChangeCampaignAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})

const createNewQiwiWallet = createReducer({ isOpen: false, id: null }, {
	[actions.modalCreateQiwiWalletAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})

const updateQiwiWallet = createReducer({ isOpen: false, id: null }, {
	[actions.modalUpdateQiwiWalletAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})

const transferQiwiWallet = createReducer({ isOpen: false, id: null }, {
	[actions.modalTtransferQiwiWalletAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})

const shopBasket = createReducer({ isOpen: false, id: null }, {
	[actions.modalShopBasketAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})

const shopCreateProduct = createReducer({ isOpen: false }, {
	[actions.modalCreateProductAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})

const shopUpdateProduct = createReducer({ isOpen: false, id: null }, {
	[actions.modalUpdateProductAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})


const createBalance = createReducer(Number(0), {
	[actions.balance]: ( state, { payload } ) => state += payload,
	[actions.unsetBalance]: ( state, { payload } ) =>   0
})


const shopUpdateOrder = createReducer({ isOpen: false, id: null }, {
	[actions.modalUpdateOrderAction]: ( state, { payload } ) => {
		return { ...state, ...payload }
	}
})


const editModal = combineReducers({
	updateUserData,
	showGroupPermissions,
	updateGroupData,
	changeCampaign,
	createNewQiwiWallet,
	updateQiwiWallet,
	transferQiwiWallet,
	createBalance,
	shopBasket,
	shopCreateProduct,
	shopUpdateProduct,
	shopUpdateOrder
} )


export default editModal

