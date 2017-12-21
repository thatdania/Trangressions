import React from 'react'
import ReactDOM from 'react-dom'
import App from '../src/App';
// import {concatStrings} from '../src/App.js';
import ReactTestUtils from 'react-dom/test-utils';
import '../src/setupTests.js'
import { concatStrings } from '../src/App'
import renderer from 'react-test-renderer';

describe('Addition', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('FEATURE - App', () => {
  it('it renders Loading Players... to the page', () => {
    const rendered = renderer.create(
      <App />
    );
    console.log(rendered.toJSON())
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
