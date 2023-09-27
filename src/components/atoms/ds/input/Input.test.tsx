import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';


describe('Input Component', () => {
  it('renders the input with the correct label', () => {
    render(<Input label="Username" />);
    const label = screen.getByText('Username');
    expect(label).toBeInTheDocument();
  });

  it('renders the input with the correct value', () => {
    render(<Input value="test" />);
    const input = screen.getByDisplayValue('test');
    expect(input).toBeInTheDocument();
  });

  it('renders the input with the correct error message', () => {
    render(<Input error="Invalid input" />);
    const error = screen.getByText('Invalid input');
    expect(error).toBeInTheDocument();
  });


  it('renders the input with the correct description', () => {
    render(<Input description="Enter your username" />);
    const description = screen.getByText('Enter your username');
    expect(description).toBeInTheDocument();
  });

  it('calls the onChange function when the input value changes', () => {
    const onChange = jest.fn();
    const role = 'input';
    render(<Input role={role} onChange={onChange} />);
    const input = screen.getByRole(role);
    userEvent.type(input, 'test');
    expect(onChange).toHaveBeenCalledTimes(4);
  });

  it('renders the input with the correct type', () => {
    render(<Input type="number" />);
    const input = screen.getByRole('input');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('renders the input with the correct placeholder', () => {
    render(<Input placeholder="Enter your username" />);
    const input = screen.getByPlaceholderText('Enter your username');
    expect(input).toBeInTheDocument();
  });

  it('renders the input with the correct class', () => {
    render(<Input className="test" />);
    const input = screen.getByRole('input');
    expect(input).toHaveClass('test');
  });

  it('renders the input with the correct style', () => {
    render(<Input style={{ color: 'red' }} />);
    const input = screen.getByRole('input');
    expect(input).toHaveStyle({ color: 'rgb(51, 51, 51)' });
  });
});

