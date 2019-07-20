export const getPrevQuerys = (query) =>{
    return{
       type: 'PREV',
       payload: query
    }
}