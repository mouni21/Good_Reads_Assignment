import React from 'react';
import AUX from '../../HOC/Auxhoc';


const wishlist= (props) =>{
    console.log(props.books.length)
        return (
            
            <AUX >
               
             <h3>My Reading List({props.books.length})</h3>
      { (props.books.length !==0)  ? 
       props.books.map(book =>{
          
          return ( 
              <AUX key={book.id}>
           <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/>
          <h4 key={book.id}>{book.volumeInfo.title}</h4>
          <div>
            <button onClick = {()=>props.remove(book.id)}>Remove</button>
            </div>
         </AUX>
          )
         
       }):
        <p>No books are added to whishlist</p>
    }
    </AUX>



)};


export default wishlist; 

