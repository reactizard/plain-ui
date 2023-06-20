import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Chip from './Chip';

describe('Chip component', () => {
  test('renders properly', () => {
    const { getByText } = render(<Chip text="Test Chip" />);
    const chipText = getByText('Test Chip');
    expect(chipText).toBeInTheDocument();
  });

  test('shows same UI as expected', () => {
    const { container } = render(<Chip text="Test Chip" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('changing props reflects on the UI', () => {
    const { getByText, rerender } = render(
      <Chip text="Test Chip" variant="outlined" color="primary" disabled />
    );
    const chipText = getByText('Test Chip');

    expect(chipText).toBeInTheDocument();
    expect(chipText).not.toHaveClass('bg-primary-500');
    expect(chipText).toHaveClass('border-primary-700');
    expect(chipText).toHaveClass('text-primary-700');
    expect(chipText).toBeDisabled();

    // Re render with updated props
    rerender(<Chip text="Updated Chip" variant="filled" color="primary" />);

    expect(chipText).toHaveTextContent('Updated Chip');
    expect(chipText).toHaveClass('bg-primary-500');
    expect(chipText).toHaveClass('text-white', 'bg-primary-500');
    expect(chipText).not.toBeDisabled();
  });
});
