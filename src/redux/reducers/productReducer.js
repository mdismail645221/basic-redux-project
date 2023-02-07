import { ADD_TO_CART, REMOVE_FORM_CART } from "../actionTypes/actionTypes";

const initailState = {
    cart: []
};

export const productReducer = (state = initailState, action) => {
    // console.log("state", state)
    const selectedProduct = state.cart.find((product)=> product._id === action.payload._id);
    console.log("selectedProduct", selectedProduct)
    switch(action.type){
        case ADD_TO_CART:
        if(selectedProduct){

            const newCart = state.cart.filter(product => product._id !== selectedProduct._id)

            selectedProduct.quantity = selectedProduct.quantity + 1
            return {
                ...state,
                cart: [...newCart, selectedProduct]
            }
        } 
        return {
            ...state,
            cart: [...state.cart, {...action.payload, quantity: 1}]
        }
        case REMOVE_FORM_CART: 
            if (selectedProduct) {

                const newCart = state.cart.filter(product => product._id !== selectedProduct._id)

                selectedProduct.quantity = selectedProduct.quantity + 1
                return {
                    ...state,
                    cart: [...newCart, selectedProduct]
                }
            } 
        default:
            return state
    }
}