import * as actionTypes from './actionsTypes';
import axios from '../../axios-purchase';

export const Addwhishlist =(id) =>{
    return{
        type:actionTypes.Addwhishlist,
        id:id
    }
}

export const RemoveWishlist = (id)=>{
    return {
        type:actionTypes.REMOVEWISHLIST,
        id:id
    }
}
export const searchHandler = (searchvalue) =>{
    return {
        type: actionTypes.SEARCH_VALUE,
        searchval: searchvalue,
    };
};

export const filterHandler = (filtervalue) =>{
    return{
        type:actionTypes.FILTER_HANDLER,
        filterval:filtervalue
    };
};
export const setBooks = (books) =>{
    return {
        type: actionTypes.SET_BOOKS,
        books: books
    }

};

export const search_error =() =>{
    return {
        type: actionTypes.SEARCH_ERROR,

    }
};


export const searchbook =() =>{
    return dispatch =>{
        // axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchfield}`)
        axios('sampleJSONResponse.json')
            .then(data => {
             console.log(data.data.items)
             dispatch(setBooks(data.data.items) )
           
            })
            .catch(error => {
                dispatch(search_error())
          
            });
    };
};

export const orderedbooks = (id,book) =>{
    
    return  {
        type: actionTypes.ORDERED_BOOKS,
        book: book,
        id: id
    }
}