import { render, screen } from '@testing-library/react'
import React from 'react'

import Text from './Text'

describe('Typography', () => {
  it('renders the correct tag', () => {
    render(<Text as="h1">Hello World</Text>)
    expect(screen.getByText('Hello World').tagName).toBe('H1')
  })

  it('renders the correct text', () => {
    render(<Text>Hello World</Text>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('renders additional classes', () => {
    render(<Text className="test-class">Hello World</Text>)
    expect(screen.getByText('Hello World')).toHaveClass('test-class')
  })

  it('renders additional props', () => {
    render(<Text data-testid="test-id">Hello World</Text>)
    expect(screen.getByTestId('test-id')).toBeInTheDocument()
  })

  it('renders the correct role', () => {
    render(<Text>Hello World</Text>)
    expect(screen.getByText('Hello World')).toHaveAttribute('role', 'typography')
  })

  it('renders the correct role when passed', () => {
    render(<Text role="test-role">Hello World</Text>)
    expect(screen.getByText('Hello World')).toHaveAttribute('role', 'test-role')
  })
})
