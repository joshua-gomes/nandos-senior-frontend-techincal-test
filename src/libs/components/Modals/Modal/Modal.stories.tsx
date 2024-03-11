import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";
import type { ModalProps } from "./Modal";
import { ModalTextSC } from "./ModalStyles";
import Overlay from "@libs/components/Overlay";

const meta: Meta = {
  title: "Modals/Modal",
  component: Modal,
  argTypes: {
    onClickDismiss: { action: "Modal Dismiss Button Clicked" },
  },
};

const Template: StoryFn<ModalProps> = ({
  children,
  modalTitle = "Modal Title", // Had to put title here because it didn't like it defined in the ar
  ...props
}: ModalProps) => {
  return (
    <Modal modalTitle={modalTitle} {...props}>
      {children}
    </Modal>
  );
};

export const Default = Template.bind({});
Default.args = {
  modalTitle: "Modal title",
};

export const ModalWithText = Template.bind({});
ModalWithText.args = {
  modalTitle: "Modal title",
  children: (
    <ModalTextSC>
      This placeholder component can be replaced with your own local component.
    </ModalTextSC>
  ),
};

export default meta;
