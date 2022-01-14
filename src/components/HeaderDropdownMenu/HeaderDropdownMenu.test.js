import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderDropdownMenu from './HeaderDropdownMenu';

describe('<HeaderDropdownMenu />', () => {
  test('it should mount', () => {
    render(<HeaderDropdownMenu />);
    
    const headerDropdownMenu = screen.getByTestId('HeaderDropdownMenu');

    expect(headerDropdownMenu).toBeInTheDocument();
  });
});