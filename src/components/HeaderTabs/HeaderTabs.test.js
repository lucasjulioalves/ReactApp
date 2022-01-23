import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderTabs from './HeaderTabs';

describe('<HeaderTabs />', () => {
  test('it should mount', () => {
    render(<HeaderTabs />);
    
    const headerTabs = screen.getByTestId('HeaderTabs');

    expect(headerTabs).toBeInTheDocument();
  });
});