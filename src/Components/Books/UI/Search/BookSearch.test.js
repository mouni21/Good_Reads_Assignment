import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Booksearch from './Booksearch';


configure({adapter : new Adapter()});

describe('<Booksearch/>', ()=>{
         test("renders", ()=>{
             const wrapper =shallow(<Booksearch />);
             expect(wrapper.exists()).toBe(true);
         });
         test("user input is defined or not", ()=>{
             const wrapper = shallow(<Booksearch handlesearch={()=>{}}/>);
             expect(wrapper.find(".user-input").at(0).props('value')).toBeDefined();
         });
        test("user input changes", ()=>{
            const wrapper = shallow(<Booksearch searchfield="test" handlesearch={()=>{}}/>);
             
             
             expect(wrapper.find(".user-input").at(0).props().value).toEqual("test")
        })
    });   
