import axios from 'axios'

// Users

export const createUser = ( datas ) => {
	return axios.post( '/api/users/create', datas )
}

export const getUsers = () => {
	return axios.get( '/api/users' )
}

export const getUsersByOptions = (fv) => {
	return axios.get( `/api/users/mark/${fv}` )
}

export const getUserById = ( id ) => {
	return axios.get( `/api/users/${ id }` )
}

export const deleteUser = ( id ) => {
	return axios.delete( `/api/users/${ id }` )
}

export const updateUser = ( datas ) => {
	return axios.put( `/api/users/${ datas._id }`, datas )
}

// Groups

export const createUserGroup = ( data ) => {
	return axios.post( '/api/groups', data )
}

export const getUserGroups = () => {
	return axios.get( `/api/groups` )
}

export const getUserGroup =  ( id ) => {
	return axios.get( `/api/groups/${ id }` )
}

export const getUserGroupByName =  ( name ) => {
	return axios.get( `/api/groups/name/${ name }` )
}

export const getGroupPerm = ( id ) => {
	return axios.get( `/api/groups/${ id }` )
}

export const deleteUserGroup = ( id ) => {
	return axios.delete( `/api/groups/${ id }` )
}

export const updateUserGroup = ( id ) => {
	return axios.put( `/api/groups/${ id }` )
}


// Applications
// crate new application
export const createApplication = ( data ) => {
	return axios.post( "/api/apps", data, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	} )
}

// get all applications
export const getApps = () => {
	return axios.get( '/api/apps' )
}

// get application by id
export const getApp = ( id ) => {
	return axios.get( `/api/apps/${ id }`)
}


// Cloud Flare
// create new account
export const createCFAccount = ( data ) => {
	return axios.post( '/api/cf', data )
}

// get all accounts
export const getCFAccounts = () => {
	return axios.get( '/api/cf' )
}

// delete account by id
export const deleteCFAccount = ( id ) => {
	return axios.delete( `/api/cf/${ id }` )
}

// connect to account by id
export const connectCFAccount = ( id ) => {
	return axios.get( `/api/cf/connect/${ id }` )
}

// get account by id
export const getCFAccount = ( id ) => {
	return axios.get( `/api/cf/${ id }` )
}


// Keitaro
// Campaings

export const getCampaings = () => {
	return axios.get(`/api/keitaro/campaigns`)
}

export const getCampaing = ( id ) => {
	return axios.get(`/api/keitaro/campaigns/${id}`)
}

export const getCampaignsNames = ( ) => {
	return axios.get(`/api/keitaro/campaigns/names`)
}

export const getCampaignName = ( id ) => {
	return axios.get(`/api/keitaro/campaigns/names/${id}`)
}

// Landings

export const getLandings = () => {
	return axios.get(`/api/keitaro/landings`)
}

export const getLanding = ( id ) => {
	return axios.get(`/api/keitaro/landings/${id}`)
}

// Offers

export const getOffers = () => {
	return axios.get(`/api/keitaro/offers/`)
}

export const getOffer = ( id ) => {
	return axios.get(`/api/keitaro/offers/${id}`)
}




// Domains

export const getDomains = () => {
	return axios.get(`/api/keitaro/domains/`)
}

export const getDomain = ( id ) => {
	return axios.get(`/api/keitaro/domains/${id}`)
}

export const deleteDomain = ( id ) => {
	return axios.delete(`/api/keitaro/domains/${id}`)
}

export const setNewCampaign = ( campData ) => {
	return axios.put(`/api/keitaro/domains/`, campData)
}

// Qiwi

export const getQiwiWallets = () => {
	return axios.get(`/api/qiwi/wallets`)
}

export const getQiwiWalletsByMark = (mark) => {
	return axios.get(`/api/qiwi/wallets/mark/${mark}`)
}

export const getQiwiWalletsByLeadMark = (leadMark) => {
	return axios.get(`/api/qiwi/wallets/lead-mark/${leadMark}`)
}

export const getQiwiWalletFromDB = ( id ) => {
	return axios.get(`/api/qiwi/wallets/db/${id}`)
}

export const getQiwiWallet = ( id ) => {
	return axios.get(`/api/qiwi/wallets/${id}`)
}

export const createQiwiWallet = ( data ) => {
	return axios.post(`/api/qiwi/wallets/`, data )
}

export const updateQiwiWallet = ( id, data ) => {
	return axios.put(`/api/qiwi/wallets/${id}`, data )
}

export const transferQiwiWallet = ( id, data ) => {
	return axios.post(`/api/qiwi/wallets/${id}`, data )
}

export const deleteQiwiWallet = ( id ) => {
	return axios.delete(`/api/qiwi/wallets/${id}` )
}

// Auth

export const userLogin = ( data ) => {
	return axios.post( '/api/auth/login', data )
}

// Logs

export const getQiwiLogs = () => {
	return axios.get( `/api/logs/qiwi` )
}

export const getQiwiLog = ( id ) => {
	return axios.get( `/api/logs/qiwi:${id}` )
}

export const createQiwiLog = ( whoData, data ) => {
	const logElem = {
		from: whoData,
		to: data
	}
	return axios.post( `/api/logs/qiwi`, logElem )
}

// Exchanger

export const getCurrency = () => {
	return axios.get('/api/currency' )
}


// Shop - products

export const createProduct = ( data ) => {
	return axios.post(`/api/shop/product/create`, data, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	} )
}

export const updateProductData = ( data, id ) => {
	return axios.put(`/api/shop/product/update/${id}`, data, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	} )
}

export const getProducts = () => {
	return axios.get(`/api/shop/product/`)
}

export const getProduct = ( id ) => {
	return axios.get(`/api/shop/product/${ id }` )
}

export const deleteProduct = ( id ) => {
	return axios.delete(`/api/shop/product/${ id }`)
}

export const getUserCoins = ( id ) => {
	return axios.get(`/api/coins/${id}`)
}





// Shop basket

export const getUserBasket = ( id ) => {
	return axios.get(`/api/shop/basket/${id}` )
}

export const setProductToBasket = ( user_id, id ) => {
	return axios.post(`/api/shop/basket/${user_id}`, { productId: id} )
}

export const deleteProductFromBasket = ( user_id, id ) => {
	return axios.post(`/api/shop/basket/delete/${user_id}`, { productId: id} )
}

export const updateProductInBasket = ( id ) => {
	return axios.put(`/api/shop/basket/${id}`)
}

// Shop - orders

export const createUserOrder = ( data ) => {
	return axios.post(`/api/shop/order/create/`, data )
}

export const getAllOrders = () => {
	return axios.get(`/api/shop/order/`)
}

export const getOrder = (id) => {
	return axios.get(`/api/shop/order/${id}`)
}

export const updateOrder = (id, data) => {
	return axios.put(`/api/shop/order/${id}`, data)
}

export const removeOrderById = (id) => {
	return axios.delete(`/api/shop/order/remove/${id}`)
}

