import React from 'react';
import './Pagination.css';


const Pagination = ( props) => {
  const pageNumbers = [];
  let totalBookscount=0;
  const pageNumber = props.currentPage +1;
  const pageNumberprev=props.currentPage -1;
  let prev;
  let next;
  if(!props.totalBooks){
   totalBookscount=0;
 }else{
  totalBookscount = props.totalBooks
 }
// {!props.totalBooks ? totalBookscount = 0: totalBookscount = props.totalBooks}
  for (let i = 1; i <= Math.ceil(totalBookscount / props.Booksperpage); i++) {
    pageNumbers.push(i);
  }
  if(pageNumberprev <= 0){
    prev=false;
  }if(pageNumber >1 && pageNumber<pageNumbers.length){
    next =false;
  }

  return (
    <nav className='pagination'>
      <ul >
      {pageNumbers.length > 1 && pageNumberprev >= 1 ? 
        <li onClick = {props.Pagination} className='page-item'>
        <a onClick={() => props.paginate(pageNumberprev)} href='!#' className='page-link' > Prev </a>
        
        </li> : null
}
        {pageNumbers.map(number => (
          <li key={number} onClick={props.Pagination} className='page-item'>
             
             <a onClick={() => props.paginate(number)} href='!#' className='page-link' >
             {number}
             </a>
           </li>
          
        ))}
        {(pageNumbers.length > 1 && pageNumber<=pageNumbers.length) ? 
        <li onClick = {props.Pagination} className='page-item'>
        <a onClick={() => props.paginate(pageNumber)} href='!#' className='page-link' > Next </a>
        </li> : null
}
      </ul>
    </nav>
  );
};

export default Pagination;