import { render, screen } from "@testing-library/react";
import {} from "react-router-dom";

import { NavigationItem } from "./components";
import Navigation from "./Navigation";

describe("Navigation", () => {
  it("should render without errors", () => {
    render(<Navigation router={[]} />);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });
  it("should render all navigation sections", () => {
    render(<Navigation router={[]} />);
    expect(screen.getByTestId("left-section")).toBeInTheDocument();
    expect(screen.getByTestId("center-section")).toBeInTheDocument();
    expect(screen.getByTestId("right-section")).toBeInTheDocument();
  });
  it("should log missing routes if not all routes exist in router", () => {
    const mockConsoleLog = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});
    const router = [{ path: "/home" }, { path: "/about" }];
    render(
      <Navigation router={router}>
        <NavigationItem
          position="center"
          label="home"
          data-testid="home-route"
          path="/home"
        />
        <NavigationItem
          position="center"
          label="about"
          data-testid="about-route"
          path="/about"
        />
        <NavigationItem
          position="center"
          label="contact"
          data-testid="contact-route"
          path="/contact"
        />
      </Navigation>
    );
    expect(screen.getByTestId("left-section")).toBeInTheDocument();
    expect(screen.getByTestId("center-section")).toBeInTheDocument();
    expect(screen.getByTestId("right-section")).toBeInTheDocument();
    expect(mockConsoleLog).toHaveBeenCalledWith(
      "%cMissing routes: /contact",
      "color: red; font-size: 1.2rem"
    );
    mockConsoleLog.mockRestore();
  });

  it("should not log missing routes if all routes exist in router", () => {
    const mockConsoleLog = jest
      .spyOn(console, "log")
      .mockImplementation(() => {});
    const router = [
      { path: "/home" },
      { path: "/about" },
      { path: "/contact" },
    ];
    render(
      <Navigation router={router}>
        <NavigationItem
          position="center"
          label="home"
          data-testid="home-route"
          path="/home"
        />
        <NavigationItem
          position="center"
          label="about"
          data-testid="about-route"
          path="/about"
        />
        <NavigationItem
          position="center"
          label="contact"
          data-testid="contact-route"
          path="/contact"
        />
      </Navigation>
    );
    expect(screen.getByTestId("left-section")).toBeInTheDocument();
    expect(screen.getByTestId("center-section")).toBeInTheDocument();
    expect(screen.getByTestId("right-section")).toBeInTheDocument();
    expect(mockConsoleLog).not.toHaveBeenCalled();
    mockConsoleLog.mockRestore();
  });
});
