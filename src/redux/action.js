import * as types from './types'


export const setUser = (payload) => ({ type: types.SETUSERDETAILS, payload });
export const setActiveUser = (payload) => ({ type: types.SETACTIVEUSER, payload });