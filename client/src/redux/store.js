import modal from './Modals/Modal.reducer'
import shop from './Shop/Shop.reducer'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		modal,
		shop
	}
})


export default store
