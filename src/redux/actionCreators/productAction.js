import { ADD_TO_CART, REMOVE_FORM_CART } from "../actionTypes/actionTypes"



export const AddToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export const RemoveFromCart = (product) => {
    console.log("remove", product)
    return {
        type: REMOVE_FORM_CART,
        payload: product
    }
}