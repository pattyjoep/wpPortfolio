import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Graphics from './Graphics';

describe('<Graphics />', () => {
  test('it should mount', () => {
    render(<Graphics />);
    
    const graphics = screen.getByTestId('Graphics');

    expect(graphics).toBeInTheDocument();
  });
});