import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'


export type ButtonVariant = 'PRIMARY' | 'SECONDARY' | 'WARNING' | 'ERROR' | 'SUCCESS' | 'DISABLED' | 'TERTIARY';


export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant
  icon?: IconProp,
  className?: string,
}

type VariantStylesType = {
  [key in ButtonVariant]: string;
};

const variantStyles: VariantStylesType = {
  PRIMARY: 'py-2 px-4 text-white bg-primary-400 hover:bg-primary focus:outline-none focus:border-primary-700 focus:ring-primary active:bg-primary',
  SECONDARY: 'py-1 px-3 text-text-default border-4 border-secondary transition-colors hover:bg-secondary hover:text-white focus:outline-none focus:border-secondary-700 focus:ring-secondary active:bg-secondary-700',
  TERTIARY: 'py-2 px-4 text-white bg-tertiary-400 hover:bg-tertiary focus:outline-none focus:border-tertiary-700 focus:ring-tertiary active:bg-tertiary',
  WARNING: 'py-2 px-4 text-white bg-warning-600 hover:bg-warning focus:outline-none focus:border-warning-700 focus:ring-warning active:bg-warning-700',
  ERROR: 'py-2 px-4 text-white bg-error-600 hover:bg-error focus:outline-none focus:border-error-700 focus:ring-error active:bg-error-700',
  SUCCESS: 'py-2 px-4 text-white bg-success-600 hover:bg-success focus:outline-none focus:border-success-700 focus:ring-success active:bg-success-700',
  DISABLED: 'py-2 px-4 text-black bg-gray-400 cursor-default',
}

export function Button({
                         icon,
                         variant = 'PRIMARY',
                         children,
                         disabled,
                         className = '',
                         ...defaultProps

                       }: ButtonProps) {

  const usedVariant = disabled ? 'DISABLED' : variant;

  return (
    <button {...defaultProps} className={`rounded-lg ${variantStyles[usedVariant]} ${className}`} disabled={disabled}>
      {icon && <FontAwesomeIcon icon={icon}  className={'mr-2'}/>}
      {children}
    </button>
  )
}