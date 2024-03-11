import { createRef } from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import Modal from "./Modal";

describe("BaseModal component", () => {
  afterEach(() => {
    cleanup();
  });

  test("displays the modal title", () => {
    const modalTitle = "Modal Title";

    const screen = render(
      <Modal modalTitle={modalTitle} onClickDismiss={jest.fn()}>
        Modal Text
      </Modal>
    );

    const heading = screen.getByRole("heading", {
      name: modalTitle,
    });

    expect(heading).toBeInTheDocument();
  });

  test("displays the passed children content", () => {
    const childComponentText = "Modal Text";
    const ChildComponent = () => <p>{childComponentText}</p>;

    const screen = render(
      <Modal modalTitle="Modal Title" onClickDismiss={jest.fn()}>
        <ChildComponent />
      </Modal>
    );

    const childComponent = screen.getByText(childComponentText);

    expect(childComponent).toBeInTheDocument();
  });

  test("call the passed onDismissClick handler when the dismiss button is clicked", () => {
    const onClickDismiss = jest.fn();

    const screen = render(
      <Modal modalTitle="Modal Title" onClickDismiss={onClickDismiss}>
        Modal Text
      </Modal>
    );

    const dismissButton = screen.getByLabelText("Dismiss Modal Button");
    fireEvent.click(dismissButton);

    expect(onClickDismiss).toHaveBeenCalled();
  });

  test("disables the dismiss button when disableDismissButton prop is set to true", () => {
    const screen = render(
      <Modal
        modalTitle="Modal Title"
        onClickDismiss={jest.fn()}
        disableDismissButton
      >
        Modal Text
      </Modal>
    );

    const dismissButton = screen.getByLabelText("Dismiss Modal Button");

    expect(dismissButton).toBeDisabled();
  });

  test("forwards passed ref and assigns it", () => {
    const ref = createRef<HTMLDivElement>();

    render(
      <Modal
        modalTitle="Modal Title"
        onClickDismiss={jest.fn()}
        disableDismissButton
        ref={ref}
      >
        Modal Text
      </Modal>
    );

    expect(ref.current).toBeTruthy();
  });
});
