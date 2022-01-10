import React, {useState} from "react";
import {IconProp} from "@fortawesome/fontawesome-svg-core";
import clsx from "clsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


export interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string,
  icon?: IconProp,
  multiline?: boolean,
}

export const Input: React.VFC<InputProps> = ({label, id, multiline, disabled, icon, ...inputProps}: InputProps) => {
  const [focused, setFocus] = useState(false);

  const element = multiline ? 'textarea' : 'input';

  return (
    <div className={clsx('block', {
      'text-primary-400': focused
    })}>
      {label && <label htmlFor={id} className={clsx('text-sm ml-2', )}>{label}</label>}
      <div className={clsx(
        'flex items-center border-2 border-gray-400 py-2 px-3',
        {
          'focus-within:border-primary-400': !disabled,
          'bg-white': !disabled,
          'bg-gray-50': disabled
        }
      )}>
        {!multiline && icon && <FontAwesomeIcon icon={icon} className={clsx('inline-block mr-2 w-full', {
          'text-gray-400': !focused
        })}  />}

        {React.createElement(element, {
          id,
          className: 'bg-none border-none outline-none w-full text-black',
          disabled,
          onFocus: () => setFocus(true),
          onBlur: () => setFocus(false),
          ...inputProps
        })}
      </div>
    </div>
  )
}


