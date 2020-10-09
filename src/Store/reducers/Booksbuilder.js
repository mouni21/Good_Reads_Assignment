import * as actionTypes from '../actions/actionsTypes';
import {updateObject} from '../Utility';
const initialState = {
    books:[],
    booksearched:[],
    bookselected:[],
    error: false,
    searchfield: '',
    filter: '',
    id:null,
    
   
    searching:false
}


const reducer = (state= initialState, action ) =>{
  if(action.type === actionTypes.Addwhishlist){
    console.log(state.bookselected)
    state.bookselected = state.bookselected.filter(book => book.id !== action.id)
    return updateObject(state, {id:action.id,
      bookselected: state.bookselected.concat(state.books.filter(book => book.id === action.id ) )})

    }
   
  if(action.type == actionTypes.REMOVEWISHLIST){
    return updateObject(state, {id:action.id,
      bookselected: state.bookselected.filter(book => book.id !== action.id ) 

    })
  }
   if(action.type === actionTypes.SEARCH_VALUE){
     if(action.searchval === null || action.searchval.length == 0 || action.searchval.trim().length == 0)
     {
       state.booksearched = []
     }
     let bookavailable = state.books.filter(book => book.volumeInfo.title.includes(action.searchval) && action.searchval != null && action.searchval.trim().length > 0)
     if(bookavailable.length ===0){
       state.error = true
     }if(action.searchval.length ==0){
       state.error = false
     }
   
    return updateObject(state,{ searchfield: action.searchval,
     booksearched: bookavailable
    } )

 };
if(action.type === actionTypes.SET_BOOKS){
    return {
        ...state,
        books: action.books,
        booksearched:[],
        error:false
      
    }
};
if(action.type === actionTypes.SEARCH_ERROR){
    return{
        ...state,
        error:true
    }
};

// if(action.type === actionTypes.ORDERED_BOOKS){
//  return updateObject(state,{
 
//    searching: true} )
// }

return state;
};

export default reducer;