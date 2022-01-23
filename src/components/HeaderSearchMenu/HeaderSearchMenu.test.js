import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderSearchMenu from './HeaderSearchMenu';

describe('<HeaderSearchMenu />', () => {
  test('it should mount', () => {
    render(<HeaderSearchMenu />);
    
    const headerSearchMenu = screen.getByTestId('HeaderSearchMenu');

    expect(headerSearchMenu).toBeInTheDocument();
  });
});