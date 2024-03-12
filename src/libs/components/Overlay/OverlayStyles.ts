import { styled } from "styled-components";
import { colours } from "@libs/styles/colours";
import { spacing } from "@libs/styles/spacing";

export const OverlaySC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding: 0 ${spacing.small};
  background-color: ${colours.black60};
`;
