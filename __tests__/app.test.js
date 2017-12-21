import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '../src/App';
// import {concatStrings} from '../src/App.js';
import { mount } from 'enzyme'
import { shallow } from 'enzyme'
import '../src/setupTests.js'
import { concatStrings } from '../src/App'

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('String Concatenation', () => {
  it('concatenates two strings', () => {
    // console.log(<App />)
    // const wrapper = mount(<App />);
    // const inst = wrapper.instance();
    expect(concatStrings("hi", "Oleg")).toEqual("hi Oleg");
  });
});
