import React, {Children, cloneElement, isValidElement, ReactNode} from "react";

export {DialogTitle} from './DialogTitle';

export interface DialogProps extends React.ComponentPropsWithoutRef<"div"> {
  children?: ReactNode,
  open?: boolean,
  closable?: boolean,
  onClose?: () => void,
}

export const Dialog: React.VFC<DialogProps> = ({
                                                 children,
                                                 open,
                                                 closable,
                                                 onClose,
                                                 ...divProps
                                               }: DialogProps) => {


  return (
    <div className={"fixed z-50 inset-0 overflow-y-auto " + (open ? '' : 'hidden')} role="dialog"
         aria-modal="true" {...divProps}>
      <div
        className="flex sm:items-end items-start justify-center min-h-screen text-center sm:block sm:p-0  bg-gray-500 bg-opacity-75">

        {/* Align center */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          className={`inline-block align-bottom bg-white text-left overflow-hidden shadow-xl w-screen h-screen sm:h-auto sm:align-middle sm:max-w-lg p-5`}
          onBlur={onClose}>
          <div>

          </div>
          {Children.map(children, (child) =>
            isValidElement(child) ? cloneElement(child, {closable, onClose}) : child)}
        </div>
      </div>
    </div>
  )
}


