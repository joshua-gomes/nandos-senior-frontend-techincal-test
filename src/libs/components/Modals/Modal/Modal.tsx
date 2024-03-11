import { ReactNode, forwardRef } from "react";
import DismissButton from "@libs/components/Buttons/DismissButton";
import type { DismissButtonProps } from "@libs/components/Buttons/DismissButton/DismissButton";
import {
  ModalWrapperSC,
  ModalHeadingWrapperSC,
  ModalTitleSC,
} from "./ModalStyles";

export interface ModalProps {
  children: ReactNode;
  disableDismissButton?: DismissButtonProps["disabled"];
  /** On click dismiss button callback */
  onClickDismiss: DismissButtonProps["onClick"];
  modalTitle: string;
}

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      modalTitle,
      children,
      onClickDismiss,
      disableDismissButton = false,
      ...props
    },
    ref
  ) => {
    return (
      <ModalWrapperSC
        ref={ref}
        role="alertdialog"
        aria-modal="true"
        aria-label="Modal"
        {...props}
      >
        <ModalHeadingWrapperSC>
          <ModalTitleSC aria-label={modalTitle}>{modalTitle}</ModalTitleSC>
          <DismissButton
            onClick={onClickDismiss}
            disabled={disableDismissButton}
            ariaLabel={"Dismiss Modal Button"}
          />
        </ModalHeadingWrapperSC>
        <div>{children}</div>
      </ModalWrapperSC>
    );
  }
);

export default Modal;
