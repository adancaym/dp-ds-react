import { fireEvent, render, screen } from '@testing-library/react'

import Reader from './Reader'

describe('Reader component', () => {
  it('should call onChange function when input value changes', () => {
    const onChange = jest.fn()
    render(<Reader onChange={onChange} />)
    const input = screen.getByRole('input')

    fireEvent.change(input, { target: { value: 'test' } })

    expect(onChange).toBeCalledTimes(1)
  })

  it('should not call onChange function when it is not provided', () => {
    render(<Reader />)
    const input = screen.getByRole('input')

    fireEvent.change(input, { target: { value: 'test' } })

    expect(input).toBeInTheDocument()
  })

  it('should render with custom className', () => {
    render(<Reader className="test" />)
    const input = screen.getByRole('input')

    expect(input).toHaveClass('test')
  })

  it('should render with default className', () => {
    render(<Reader />)
    const input = screen.getByRole('input')

    expect(input).toHaveClass('input')
  })
})
