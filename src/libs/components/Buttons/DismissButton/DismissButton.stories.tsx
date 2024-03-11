import { Meta, StoryFn } from "@storybook/react";
import DismissButton from "./DismissButton";
import type { DismissButtonProps } from "./DismissButton";

const meta: Meta = {
  title: "Buttons/DismissButton",
  component: DismissButton,
  argTypes: {
    onClick: { action: "DismissButton Clicked" },
  },
};

/**
 * Component States
 */

const Template: StoryFn<DismissButtonProps> = (props: DismissButtonProps) => (
  <DismissButton {...props} />
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Focus = Template.bind({});
Focus.parameters = { pseudo: { focus: true } };

export const Hover = Template.bind({});
Hover.parameters = { pseudo: { hover: true } };

export const Pressed = Template.bind({});
Pressed.parameters = { pseudo: { active: true } };

export default meta;
