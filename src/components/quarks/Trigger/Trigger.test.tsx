import { fireEvent, render, screen } from '@testing-library/react'

import Trigger from './Trigger'

describe('Trigger', () => {
  it('renders children', () => {
    render(<Trigger>Click me</Trigger>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Trigger onClick={handleClick}>Click me</Trigger>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies className prop', () => {
    render(<Trigger className="test-class">Click me</Trigger>)
    expect(screen.getByRole('button')).toHaveClass('test-class')
  })
})
