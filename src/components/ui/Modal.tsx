/** @format */
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import type { ReactNode } from "react";
interface IProps {
  title?: string;
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}
const Modal = ({ title, closeModal, isOpen, children }: IProps) => {
  return (
    <>
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            {title && <DialogTitle className="font-bold">{title}</DialogTitle>}
            <div className="flex gap-4">{children}</div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
export default Modal;
