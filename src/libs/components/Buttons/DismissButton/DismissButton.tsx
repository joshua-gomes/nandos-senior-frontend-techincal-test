import { forwardRef } from "react";
import { DismissButtonSC, DismissButtonIconSC } from "./DismissButtonStyles";

export interface DismissButtonProps {
  /** On click button callback */
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  ariaLabel?: string;
}

const DismissButton = forwardRef<HTMLButtonElement, DismissButtonProps>(
  (
    { onClick, disabled = false, ariaLabel = "Dismiss Button", ...props },
    ref
  ) => {
    return (
      <DismissButtonSC
        aria-label={ariaLabel}
        type="button"
        onClick={onClick}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        <DismissButtonIconSC />
      </DismissButtonSC>
    );
  }
);

export default DismissButton;
