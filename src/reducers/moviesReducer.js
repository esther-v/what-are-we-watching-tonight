const initState = {
    popular: [],
    popularTv: []
}

const moviesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_MOVIES":
            return {
                ...state,
                popular: action.payload.popular,
                popularTv: action.payload.popularTv
            }
        default:
            return {...state}
    }
}

export default moviesReducer