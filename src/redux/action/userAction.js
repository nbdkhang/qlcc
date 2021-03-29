
export const addUser = (user)=>
{
    return {
        type:'ADD_USER',
        payload:user,
    }
}
export const deleteUser = (index) => {
    return{
       type: 'DELETE_USER',
       payload: index
    }
 }
 export const addApart = (apart)=>
{
    return {
        type:'ADD_APART',
        payload:apart,
    }
}
export const deleteApart = (index) => {
    return{
       type: 'DELETE_APART',
       payload: index
    }
 }
 