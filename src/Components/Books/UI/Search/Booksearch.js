import { node } from 'prop-types';
import React from 'react';
import './Booksearch.css';
//import Bookfilter from './Bookfilter';
//import Books from '../../Container/BooksBuilder';

const Booksearch = (props) =>{
    return (
        <form onSubmit = {props.submit}>
        <div className = "Search">
            <input onChange={props.handlesearch} className="user-input" type="text" value={props.searchfield}
           
            placeholder="Book Title" />
        {/* <button type="submit" onClick = {props.searchBook} > Search </button> */}
           
        </div>
        </form>
    );
}

export default Booksearch;