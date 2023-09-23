import React from "react";
import { render, screen } from "@testing-library/react";
import { Container } from ".";

test("renders Container", () => {
  render(<Container>Github</Container>);
  const linkElement = screen.getByText(/Github/i);
  expect(linkElement).toBeInTheDocument();
});
