import {ADD_BIT}  from './actionTypes'








export function AuctionBit(bit){

    return dispatch=>{
        dispatch(addBit(bit))

    }
}


const addBit=(bit)=>({
  
type:ADD_BIT,
payload:'added bit'

})








