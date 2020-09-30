import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Whishlist from './wishlist';

configure({adapter : new Adapter()});

describe('<Wishlist/>', ()=>{
         test("renders", ()=>{
             const wrapper =shallow(<Whishlist books={[]}/>);
             expect(wrapper.exists()).toBe(true);
         })
    });