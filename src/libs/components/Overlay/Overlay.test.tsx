import { render } from "@testing-library/react";
import Overlay from "./Overlay";

describe("Overlay component", () => {
  it("renders it's children", () => {
    const childComponentText = "Child Component";
    const ChildComponent = () => <p>{childComponentText}</p>;

    const screen = render(
      <Overlay>
        <ChildComponent />
      </Overlay>
    );

    const childComponent = screen.getByText(childComponentText);

    expect(childComponent).toBeInTheDocument();
  });
});
