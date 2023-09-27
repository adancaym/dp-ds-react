import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "./Select";


describe("Select", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("renders the label and options correctly", () => {
    render(<Select label="Select an option" options={options} />);
    const label = screen.getByText("Select an option");
    expect(label).toBeInTheDocument();

    const option1 = screen.getByText("Option 1");
    expect(option1).toBeInTheDocument();

    const option2 = screen.getByText("Option 2");
    expect(option2).toBeInTheDocument();

    const option3 = screen.getByText("Option 3");
    expect(option3).toBeInTheDocument();
  });

  it("calls the onChange handler when an option is selected", () => {
    const handleChange = jest.fn();
    render(
    <Select 
        label="Select an option" 
        options={options} 
        onChange={(event: React.ChangeEvent<HTMLSelectElement>) => handleChange(event.target.value)}
    />
    );
    const select = screen.getByRole("picker");
    userEvent.selectOptions(select, "option2");
    expect(handleChange).toHaveBeenCalledWith("option2");
  });

  it("displays an error message when the error prop is set", () => {
    render(<Select label="Select an option" options={options} error="Please select an option" />);
    const errorMessage = screen.getByText("Please select an option");
    expect(errorMessage).toBeInTheDocument();
  });

  it("displays a description when the description prop is set", () => {
    render(<Select label="Select an option" options={options} description="Please select an option from the list" />);
    const description = screen.getByText("Please select an option from the list");
    expect(description).toBeInTheDocument();
  });
});