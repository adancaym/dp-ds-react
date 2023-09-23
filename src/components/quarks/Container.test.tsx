import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from "src/components"


test("Render", () => {
  render(<Container>Test 1</Container>);
  const linkElement = screen.getByText(/Test 1/i);
  expect(linkElement).toBeInTheDocument();
});