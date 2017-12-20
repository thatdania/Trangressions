import React from 'react';
import renderer from 'react-test-renderer';
import sum from '../src/try.js';

// const somma = require('./try.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
