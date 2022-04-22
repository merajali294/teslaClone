const islogged = ( state=false, action ) => {
    switch (action.type) {
        case 'signin':
            return !state
            // break;
    
        default:
            return state;
            // break;
    }

}

export default islogged