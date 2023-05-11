import * as types from "./types"
let initialState = {
    activeUser:{},
    users: []
}

export const DashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SETUSERDETAILS:
              return { ...state, users: [...state.users, action.payload]};
             
        case types.SETACTIVEUSER:
              return { ...state, activeUser:action.payload};
             

        default:
            return state;
    }




}