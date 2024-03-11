import { ReactNode } from "react";
import { OverlaySC } from "./OverlayStyles";

export interface OverlayProps {
  children: ReactNode;
}

const Overlay = ({ children, ...props }: OverlayProps) => {
  return <OverlaySC {...props}>{children}</OverlaySC>;
};

export default Overlay;
