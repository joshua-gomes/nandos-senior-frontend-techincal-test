import { createRef } from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import DismissButton from "./DismissButton";

describe("DismissButton component", () => {
  afterEach(() => {
    cleanup();
  });

  test("calls the passed onClick handler when clicked", () => {
    const onClickHandler = jest.fn();

    const screen = render(<DismissButton onClick={onClickHandler} />);

    const dismissButton = screen.getByLabelText("Dismiss Button");
    fireEvent.click(dismissButton);

    expect(onClickHandler).toHaveBeenCalled();
  });

  test("is disabled when the disabled prop is set to true", () => {
    const screen = render(<DismissButton onClick={jest.fn()} disabled />);

    const dismissButton = screen.getByLabelText("Dismiss Button");

    expect(dismissButton).toBeDisabled();
  });

  test("forwards passed ref and assigns it", () => {
    const ref = createRef<HTMLButtonElement>();

    render(<DismissButton onClick={jest.fn()} ref={ref} />);

    expect(ref.current).toBeTruthy();
  });
});
