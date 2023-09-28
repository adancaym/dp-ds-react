import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './playground/App'

test('renders app', () => {
  render(<App />)
  const linkElement = screen.getByText(/Github/i)
  expect(linkElement).toBeInTheDocument()
})
