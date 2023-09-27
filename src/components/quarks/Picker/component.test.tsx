import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Picker from './component';

describe('Picker', () => {
  const options = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' },
  ];

  it('renders the options correctly', () => {
    render(<Picker>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</Picker>);
    const option1 = screen.getByText('Option 1');
    const option2 = screen.getByText('Option 2');
    const option3 = screen.getByText('Option 3');
    expect(option1).toBeInTheDocument();
    expect(option2).toBeInTheDocument();
    expect(option3).toBeInTheDocument();
  });

  it('calls onChange when an option is selected', () => {
    const onChange = jest.fn();
    render(<Picker onChange={onChange}>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</Picker>);
    userEvent.selectOptions(screen.getByRole('picker'), '2');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ target: expect.objectContaining({ value: '2' }) }));
  });
});