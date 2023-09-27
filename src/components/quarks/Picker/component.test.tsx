import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Picker from './component';

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

describe('Picker', () => {
  it('renders options correctly', () => {
    render(<Picker options={options} />);
    const selectElement = screen.getByRole('picker');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveClass('picker');
    expect(selectElement).toHaveAttribute('role', 'picker');

    options.forEach((option) => {
      const optionElement = screen.getByRole('option', { name: option.label });
      expect(optionElement).toBeInTheDocument();
      expect(optionElement).toHaveAttribute('value', option.value);
    });
  });

  it('calls onChange when an option is selected', () => {
    const onChange = jest.fn();
    render(<Picker options={options} onChange={ e => onChange(e.target.value)} />);
    const selectElement = screen.getByRole('picker');
    fireEvent.change(selectElement, { target: { value: 'option2' } });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith('option2');
  });
});