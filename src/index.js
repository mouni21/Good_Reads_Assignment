import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux'; 
import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import BooksReducer from './Store/reducers/Booksbuilder';


const rootReducer =combineReducers({
    books: BooksReducer,
})
const store = createStore(rootReducer, applyMiddleware(thunk));
const app= (
    <Provider store ={store}>
    <BrowserRouter >
        <App/>
    </BrowserRouter>
    </Provider>
);
ReactDOM.render(app, document.getElementById('root'));
