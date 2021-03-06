import React, {Component} from'react';
import Aux from '../HOC/Auxhoc';
import Booksearch from '../Components/Books/UI/Search/Booksearch';
import Bookfilter from '../Components/Books/Bookfilter';
import axios from 'axios';
//import WithErrorHandler from '../HOC/WithErrorHandler/WithErrorHandler';
import * as booksbuilderactions from '../Store/actions/Booksbuilder';

import { connect } from  'react-redux';

class BooksBuilder extends Component{
    constructor(props){
        super(props);
       this.state={
            filter: '',  
           
            currentpage:1,
            booksPerPage:6,
            pagination:true
     
        }
    }
 componentDidMount(){
  this.props.onsearchbook()
 }
 

submit = (e)=>{
    e.preventDefault()
    console.log(e)
return this.props.onSearchHandler(this.props.searchfield)
}
searchHandler = (e) =>{
    e.preventDefault(); 
    console.log(e) 
    this.props.onSearchHandler(e.target.value);
    }
filterHandler = (e) =>{
      
    this.setState ({filter: e.target.value})
     
    }
Addwhishlist = (id) =>{
    console.log(id)
       this.props.onAddwhishlist(id);
         this.setState({info: true});
      
    }

   CurrentPage = numPage =>{
        this.setState({currentpage: numPage});

    }
    render(){
console.log(this.props.booksearched)
    let booksavailability =<p style={{ color: "red", textAlign: "center", fontSize: "30px"}}>Provide Book title...</p>
   console.log(this.props.booksearched)
    if(this.props.booksearched.length !== 0){
        booksavailability = (
            <Bookfilter pagination={this.state.pagination} searching={this.props.searching} isAuth={this.props.isAuth}  id = {this.props.id} 
              
            books = {this.props.booksearched} type={this.state.filter} Addwhishlist={this.Addwhishlist} information ={this.bookInfoHandler}/> 
        
        );
    }else{
        console.log(this.props.error)
        if(this.props.error)
        booksavailability = <p > Books are not available</p>
    }
// }else{
//     booksavailability=  <p> No Books are available</p>
// }
        return(
           
            <Aux>
                <div className="Books">
               <Booksearch submit={this.submit} handlesearch = {this.searchHandler}  />
             
                {booksavailability}
               
                </div>
             
            
            </Aux>
        );
    };
}

const mapStatetoProps = state =>{
    return {
      books: state.books.books,
       searchfield: state.books.searchfield,
       error: state.books.error,
        bookselected:state.books.bookselected,
        id: state.books.id,
        //  searching: state.books.searching,
         booksearched: state.books.booksearched
    };
}

const mapDispatchtoProps = dispatch =>{
    return {
        onSearchHandler: (searchvalue) => dispatch(booksbuilderactions.searchHandler(searchvalue)),
       onsearchbook: () => dispatch(booksbuilderactions.searchbook()),
       onAddwhishlist:(id) => dispatch(booksbuilderactions.Addwhishlist(id)),      
    };
}
export default connect(mapStatetoProps, mapDispatchtoProps)(BooksBuilder) 
