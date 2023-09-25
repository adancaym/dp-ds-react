import { render, screen } from '@testing-library/react';

import Container from './component';

describe("Container component", () => {
  it("renders without crashing", () => {
    render(<Container />);
    expect(screen.getByRole("container")).toBeInTheDocument();
  });

  it("renders with children", () => {
    render(<Container>Test</Container>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders with id", () => {
    render(<Container id="test" />);
    expect(screen.getByRole("container")).toHaveAttribute("id", "test");
  });

  it("renders with className", () => {
    render(<Container className="test" />);
    expect(screen.getByRole("container")).toHaveClass("test");
  });

  it("renders with other props", () => {
    render(<Container data-testid="test" />);
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
