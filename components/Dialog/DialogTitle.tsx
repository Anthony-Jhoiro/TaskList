import React, {ReactNode} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTimes} from "@fortawesome/free-solid-svg-icons";


export interface ModalTitleProps {
  children?: ReactNode,
  className?: string,
  closable?: boolean,
  onClose?: () => void
}

export const DialogTitle: React.VFC<ModalTitleProps> = ({children, className, closable, onClose}) => {
  return (
    <div className={'flex justify-between px-5 '}>
      <h3 className={`text-lg ${className}`}>
        {children}
      </h3>
      {closable && <button className={`animate-bounce bg-none outline-none border-none text-primary-400 hover:text-error`} onClick={onClose} aria-label={'close'}>
          <FontAwesomeIcon icon={faTimes} size={'2x'} />
      </button>}
    </div>
  )
}
