import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookItems from './BookItems/BooItems';
import Pagination from '../Pagination/Pagination';
import Aux from '../../HOC/Auxhoc';

class Bookfilter extends Component {
state= {
    currentPage:1,
    booksPerPage:6
}
          Pagination = (e) =>{
            e.preventDefault();
          }   
render(){
   
   const indexOfLastBook = this.state.currentPage * this.state.booksPerPage;
const indexOfFirstBook = indexOfLastBook - this.state.booksPerPage;
const currentbooks = this.props.books.slice(indexOfFirstBook, indexOfLastBook);


const paginate = (pageNumber) =>{
  
      this.setState({currentPage:pageNumber})
    }
return (
 <Aux>
    <BookItems   books = {currentbooks} Addwhishlist={this.props.Addwhishlist} information={this.props.information}/>
    {this.props.pagination?
    <Pagination 
    currentPage ={this.state.currentPage}
            Booksperpage = {this.state.booksPerPage} 
            totalBooks={this.props.books.length} 
            paginate={paginate} Pagination={this.Pagination} />: null}
    </Aux>
    
);
}
}

Bookfilter.propTypes ={
type : PropTypes.string.isRequired
};

export default Bookfilter;
