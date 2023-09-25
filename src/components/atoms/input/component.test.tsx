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


    it('renders the input with the correct type', () => {
        render(<Component type="number" />);
        const input = screen.getByRole('input');
        expect(input).toHaveAttribute('type', 'number');
    });

    it('renders the input with the correct placeholder', () => {
        render(<Component placeholder="Enter your username" />);
        const input = screen.getByPlaceholderText('Enter your username');
        expect(input).toBeInTheDocument();
    });

    it('renders the input with the correct class', () => {
        render(<Component className="test" />);
        const input = screen.getByRole('input');
        expect(input).toHaveClass('test');
    });

    it('renders the input with the correct style', () => {
        render(<Component style={{ color: 'red' }} />);
        const input = screen.getByRole('input');
        expect(input).toHaveStyle({ color: 'red' });
    });
});