import { FETCH_PRODUCTS } from "../types"
export const productsReducer = (state ={},action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            console.log("something")
            return { items: action.payload}
        default:
            return state
            
    }
}