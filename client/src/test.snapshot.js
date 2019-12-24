import React from 'react';
import renderer from 'react-test-renderer';
import { Counter } from '../TestComponent';

describe('Addition', () => {
    it('knows that 2 and 2 make 4', () => {
      expect(2 + 2).toBe(4);
    });
  });