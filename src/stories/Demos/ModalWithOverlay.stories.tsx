import { Meta, StoryFn } from "@storybook/react";
import Modal, { ModalTextSC } from "@libs/components/Modals/Modal";
import type { ModalProps } from "@libs/components/Modals/Modal";
import Overlay from "@libs/components/Overlay";

const WithOverlay = (Story: () => JSX.Element) => {
  return <Overlay>{Story()}</Overlay>;
};

const meta: Meta = {
  title: "Demos/ModalWithOverlay",
  component: Modal,
  argTypes: {
    onClickDismiss: { action: "Modal Dismiss Button Clicked" },
  },
  decorators: [WithOverlay],
};

const Template: StoryFn<ModalProps> = ({ children, ...props }: ModalProps) => {
  return <Modal {...props}>{children}</Modal>;
};

export const DemoExample = Template.bind({});
DemoExample.args = {
  modalTitle: "Modal title",
  children: (
    <ModalTextSC>
      This placeholder component can be replaced with your own local component.
    </ModalTextSC>
  ),
};

export default meta;
