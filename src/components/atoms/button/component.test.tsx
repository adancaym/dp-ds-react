import { render, screen } from '@testing-library/react';

import Button from './component';

describe("Button", () => {
  it("renders button text", () => {
    const buttonText = "Click me";
    render(<Button>{buttonText}</Button>);

    const element = screen.getByText(buttonText);
    expect(element).toBeInTheDocument();
  });

  it("renders button with type submit", () => {
    const buttonText = "Click me";
    render(<Button type="submit">{buttonText}</Button>);

    const element = screen.getByRole("button");
    expect(element).toHaveAttribute("type", "submit");
  });

  it("renders button with type button", () => {
    const buttonText = "Click me";
    render(<Button type="button">{buttonText}</Button>);

    const element = screen.getByRole("button");
    expect(element).toHaveAttribute("type", "button");
  });

  it("renders button with type reset", () => {
    const buttonText = "Click me";
    render(<Button type="reset">{buttonText}</Button>);

    const element = screen.getByRole("button");
    expect(element).toHaveAttribute("type", "reset");
  });

  it("renders button with description", () => {
    const buttonText = "Click me";
    const buttonDescription = "This is a button";
    render(<Button description={buttonDescription}>{buttonText}</Button>);

    const element = screen.getByText(buttonDescription);
    expect(element).toBeInTheDocument();
  });

  it("renders button with variant primary", () => {
    const buttonText = "Click me";
    render(<Button variant="primary">{buttonText}</Button>);
    const element = screen.getByRole("button");
    expect(element).toHaveClass("primary");
  });

  it("renders button with variant secondary", () => {
    const buttonText = "Click me";
    render(<Button variant="secondary">{buttonText}</Button>);
    const element = screen.getByRole("button");
    expect(element).toHaveClass("secondary");
  });
});
