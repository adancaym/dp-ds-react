import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

import Component from './component';

describe('Input Component', () => {
  it('renders the input with the correct label', () => {
    render(<Component label="Username" />);
    const label = screen.getByText('Username');
    expect(label).toBeInTheDocument();
  });

  it('renders the input with the correct value', () => {
    render(<Component value="test" />);
    const input = screen.getByDisplayValue('test');
    expect(input).toBeInTheDocument();
  });

  it('renders the input with the correct error message', () => {
    render(<Component error="Invalid input" />);
    const error = screen.getByText('Invalid input');
    expect(error).toBeInTheDocument();
  });

  it('renders the input with the correct description', () => {
    render(<Component description="Enter your username" />);
    const description = screen.getByText('Enter your username');
    expect(description).toBeInTheDocument();
  });

  it('calls the onChange function when the input value changes', () => {
    const onChange = jest.fn();
    const role = 'input';
    render(<Component role={role} onChange={onChange} />);
    const input = screen.getByRole(role);
    userEvent.type(input, 'test');
    expect(onChange).toHaveBeenCalledTimes(4);
  });
});