import { createAction } from "@reduxjs/toolkit"

export const basketSumAction        = createAction( 'basketSumAction' )
export const unsetBasketSumAction   = createAction( 'unsetBasketSumAction ')
export const nullBasketSumAction    = createAction( 'nullBasketSumAction ')

export const basketCountAction      = createAction( 'basketCountAction' )
export const unsetBasketCountAction = createAction( 'unsetBasketCountAction')
export const nullBasketCountAction  = createAction( 'nullBasketCountAction')

export const coinsCountAction       = createAction( 'coinsCountAction' )
export const unsetCoinsCountAction  = createAction( 'unsetCoinsCountAction')
export const nullCoinsCountAction   = createAction( 'nullCoinsCountAction')



