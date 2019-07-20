

export const initialState = {
    prevQuerys: [ ]
}

const reducer = (state = initialState, action) =>{

    if(action.type === 'PREV'){
       
        return{
            ...state,
            prevQuerys: [...state.prevQuerys, action.payload]
        }
    }else {
        return state
    }

}
export default reducer