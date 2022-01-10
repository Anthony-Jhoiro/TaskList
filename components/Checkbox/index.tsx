import React from "react";
import clsx from "clsx";


export interface CheckboxProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string
}

export const Checkbox: React.VFC<CheckboxProps> = ({label, className, disabled, ...checkboxProps}: CheckboxProps) => {
  return (
    <label className={clsx(
      'inline-flex items-center',
      {
        'cursor-pointer': !disabled
      }, className)}>
      <input type={"checkbox"}
             disabled={disabled}
             className={clsx(
               'form-checkbox h-5 w-5  outline-none',
               {
                 'cursor-pointer text-primary': !disabled,
                 'cursor-default text-gray-300 border-gray-400': disabled,
               }
             )} {...checkboxProps} />
      {label && <span className={clsx(
        'ml-2',
        {
          'text-gray-300': disabled
        }
      )}>{label}</span>}
    </label>
  )
}
