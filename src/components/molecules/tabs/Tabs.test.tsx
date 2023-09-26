import { render, screen } from '@testing-library/react';

import { Tab } from './components';
import Tabs from './Tabs';

describe("Tabs", () => {
  it("renders tabs with correct labels", () => {
    render(
      <Tabs>
        <Tab name='1' label='1' >1</Tab>
        <Tab name='2' label='2' >2</Tab>
      </Tabs>
    );
    expect(screen.getByTestId("tab-1")).toBeInTheDocument();
    expect(screen.getByTestId("tab-2")).toBeInTheDocument();
  });

    it("renders tab content", () => {
        render(
        <Tabs>
            <Tab name='1' label='tab label 1' >tab 1</Tab>
            <Tab name='2' label='tab label 2' >tab 2</Tab>
            <Tab name='3' label='tab label 3' >tab 3</Tab>
        </Tabs>
        );
        expect(screen.getByTestId("tab-content-1")).toBeInTheDocument();
        expect(screen.queryByText("tab-content-2")).not.toBeInTheDocument();
        expect(screen.queryByText("tab-content-3")).not.toBeInTheDocument();
    });

    it("renders tab content with correct label", () => {
        render(
        <Tabs>
            <Tab name='1' label='tab label 1' >tab 1</Tab>
            <Tab name='2' label='tab label 2' >tab 2</Tab>
        </Tabs>
        );
        expect(screen.getByText("tab 1")).toBeInTheDocument();
        expect(screen.queryByText("tab 2")).not.toBeInTheDocument();
    });
});

