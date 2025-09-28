import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import assert from 'node:assert';
import Homepage from '../pages/index';

test('Check App component render', () => {
  const res = render(<Homepage />);
  assert(res !== null);
});
