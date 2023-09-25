import { render, screen } from '@testing-library/react';
import React from 'react';

import Typography from './component';

describe('Typography', () => {
  it('renders the correct tag', () => {
    render(<Typography as="h1">Hello World</Typography>);
    expect(screen.getByText('Hello World').tagName).toBe('H1');
  });

  it('renders the correct text', () => {
    render(<Typography>Hello World</Typography>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders additional classes', () => {
    render(<Typography className="test-class">Hello World</Typography>);
    expect(screen.getByText('Hello World')).toHaveClass('test-class');
  });    

  it('renders additional props', () => {
    render(<Typography data-testid="test-id">Hello World</Typography>);
    expect(screen.getByTestId('test-id')).toBeInTheDocument();
  });
});