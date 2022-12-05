const initialState = { products: [] }

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addProduct':
            return {
                ...state, products: [
                    ...state.products, action.payload
                ]
            }

        case 'getAllProducts':

            break;

        case 'getProductById':

            return state.products.find(e => e.id === action.payload)


        case 'updateProduct':

            return state.product


        case 'deleteProduct':

            return state.products.filter(e => e.id !== action.payload);

        default:
            return state

    }
}