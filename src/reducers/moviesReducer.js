const initState = {
    popular: [],
    popularTv: [],
    searched: []
}

const moviesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_MOVIES":
            return {
                ...state,
                popular: action.payload.popular,
                popularTv: action.payload.popularTv
            }
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched
            }
        case "CLEAR_SEARCH":
            return {
                ...state,
                searched: []
            }
        default:
            return {...state}
    }
}

export default moviesReducer