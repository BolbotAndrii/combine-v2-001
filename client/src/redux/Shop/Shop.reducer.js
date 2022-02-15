import * as actions from './Shop.action'
import { createReducer } from "@reduxjs/toolkit"
import { combineReducers } from "@reduxjs/toolkit"

const basketSumCreate = createReducer( Number(0), {
    [actions.basketSumAction]       : ( state, { payload } ) => state += payload,
    [actions.unsetBasketSumAction ] : ( state, { payload } ) => state -= payload,
    [actions.nullBasketSumAction ]  : ( state, { payload } ) => 0
} )

const basketCountCreate = createReducer( Number(0), {
    [actions.basketCountAction]         : ( state, { payload } ) => state += payload,
    [actions.unsetBasketCountAction]    : ( state, { payload } ) => state -= payload,
    [actions.nullBasketCountAction]     : ( state, { payload } ) => 0
} )

const coinsCountCreate = createReducer( Number(0), {
    [actions.coinsCountAction]      : ( state, { payload } ) => state += payload,
    [actions.unsetCoinsCountAction] : ( state, { payload } ) => state -= payload,
    [actions.nullCoinsCountAction]  : ( state, { payload } ) =>  Number(0)
} )

const shop = combineReducers( {
    basketSumCreate,
    basketCountCreate,
    coinsCountCreate
} )

export default shop