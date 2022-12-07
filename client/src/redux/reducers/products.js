const initialState = {
    products: []
}


export const todoReducer = ( state = initialState, action ) => {


    switch ( action.type ) {
        case 'Add':
            return [ ...state, action.payload ];

        case 'Remove':
            return state.filter( todo => todo.id !== action.payload );

        
    
        default:
            return state;
    }


}

