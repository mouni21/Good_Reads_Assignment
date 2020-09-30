import React,{Component, Fragment} from 'react';
import * as booksbuilderactions from './Store/actions/Booksbuilder';
import Books from'./Container/BooksBuilder';
import  './App.css'
import Whishlist from './Components/Whishlist/wishlist';
import {connect} from 'react-redux';


class App extends Component {
  remove = (id)=>{
this.props.onRemoveWhishlist(id)
  }
  render () {

    return (
      <Fragment>
    <div className = "App">
    
     <Books/>
     <div className="whishlist">
       
       <Whishlist books={this.props.bookselected} remove={this.remove}/>
     </div>
      </div>
   
  
      </Fragment>
  );
}
}
const mapStatetoProps = state =>{
  return {
      bookselected:state.books.bookselected,
     
  };
}


const mapDispatchtoProps = dispatch =>{
  return {
     
     onRemoveWhishlist:(id) => dispatch(booksbuilderactions.RemoveWishlist(id)),
 
  };
}
export default connect(mapStatetoProps,mapDispatchtoProps)(App);
