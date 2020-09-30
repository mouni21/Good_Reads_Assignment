import React from 'react';
import Bookcard from './Bookcard';
import Aux from '../../../HOC/Auxhoc';




const BookItems = (props) => {
    
   
    return (
        <div className="book-list">
            {
               
                props.books.map((book, i) => {
                   
              
                    return (
                     
                        <Aux key = {i}>
                       
                        <Bookcard 
                                id={book.id}
                                image ={book.volumeInfo.imageLinks.thumbnail}
                                title = {book.volumeInfo.title}
                                author = {book.volumeInfo.authors}
                                published = {book.volumeInfo.publishedDate}
                                publisher = {book.volumeInfo.publisher}
                               Addwhishlist = {()=>props.Addwhishlist(book.id)}
                                {...book}
                                />
                                </Aux>
                                )
            
                })
           }
           
            
        </div>
       
    );
}


export default BookItems;