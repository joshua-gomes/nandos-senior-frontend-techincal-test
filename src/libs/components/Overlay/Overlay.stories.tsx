import { Meta, StoryFn } from "@storybook/react";
import Overlay from "./Overlay";
import type { OverlayProps } from "./Overlay";
import styled from "styled-components";
import { colours } from "@libs/styles/colours";

const meta: Meta = {
  title: "Overlay",
  component: Overlay,
};

const Template: StoryFn<OverlayProps> = ({
  children,
  ...props
}: OverlayProps) => {
  return <Overlay {...props}>{children}</Overlay>;
};

export const Default = Template.bind({});

export const OverlayWithChildren = Template.bind({});

const ExampleChildElementSC = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${colours.milk};
`;

OverlayWithChildren.args = {
  children: <ExampleChildElementSC />,
};

export default meta;
