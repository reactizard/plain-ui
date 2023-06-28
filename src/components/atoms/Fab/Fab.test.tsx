import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { IconPlus } from '@tabler/icons-react';

import Fab from './Fab';

describe('Fab component', () => {
  test('renders fab with icon and text', () => {
    render(<Fab text="Add" icon={<IconPlus data-testid="icon" />} />);
    const fabElement = screen.getByText(/Add/i);
    const iconElement = screen.getByTestId('icon');

    expect(fabElement).toBeInTheDocument();
    expect(iconElement).toBeInTheDocument();
  });

  test('renders fab with default props', () => {
    render(<Fab />);
    const iconElement = screen.getByTestId('icon');

    expect(iconElement).toBeInTheDocument();
  });

  test('renders fab with custom color', () => {
    render(<Fab color="primary" />);
    const fabElement = screen.getByTestId('fab');

    expect(fabElement).toHaveClass('bg-primary-500');
  });

  test('renders disabled fab', () => {
    render(<Fab disabled />);
    const fabElement = screen.getByTestId('fab');

    expect(fabElement).toHaveClass('opacity-50 cursor-not-allowed');
    expect(fabElement).not.toHaveAttribute('onClick');
  });
});
