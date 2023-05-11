import { configureStore } from "@reduxjs/toolkit"
import { DashboardReducer } from "./redux/reducer"
const store = configureStore({
    reducer: {
        Admin_Register: DashboardReducer

    }
})
export default store;




