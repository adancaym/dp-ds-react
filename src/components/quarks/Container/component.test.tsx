import React from "react";
import { render, screen } from "@testing-library/react";
import Container from "./component";

describe("Container component", () => {
  it("renders without crashing", () => {
    const view = render(<Container />);
    expect(view).toBeTruthy();
  });

  it("renders without crashing with children", () => {
    const view = render(<Container>Test</Container>);
    expect(view).toBeTruthy();
  });

  it("renders with default props", () => {
    const view = render(<Container />);
    expect(view.container.querySelector(".container")).toBeInTheDocument();
    expect(view.container.querySelector(".container")).toHaveTextContent("");
  });

  it("renders children", () => {
    render(<Container>Test</Container>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders with additional props", () => {
    const view = render(
      <Container id="test" className="container">
        Test
      </Container>
    );

    expect(view.container.querySelector(".container")).toBeInTheDocument();
    expect(view.container.querySelector("#test")).toBeInTheDocument();
    expect(view.container.querySelector(".container")).toHaveTextContent(
      "Test"
    );
    expect(view.container.querySelector(".container")).toHaveAttribute(
      "id",
      "test"
    );
  });
});
