import React from 'react';
import '../BookItems/Books.css';

const Bookcard = (props) =>{
console.log(props.author)
    return (
      
<div className = "book-card" >

    <img src={props.image} alt={props.title}/>
    <h2> {props.title.substring(0,35)}</h2>
    {(props.author) ? <h4> {props.author.slice(0,3)}</h4>:null }
    <p>
      publisher:  {props.publisher ? props.publisher : null} <br></br>
      Date:  {props.published ? props.published : null}
        
    </p>
        <h4>Desription:</h4>
        <p>
        {props.volumeInfo.description.slice(0,100)}....
    </p>
    <button onClick = {props.Addwhishlist}>Add</button>        
     {/* <div className="Summary" > */}
    
{/* </div> */}
   

     
  </div>
       
      
      
    )
};
export default Bookcard;

 