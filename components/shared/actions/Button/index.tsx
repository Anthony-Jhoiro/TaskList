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
  PRIMARY: 'text-white bg-primary-700 border-primary-700 hover:bg-primary hover:border-primary focus:outline-none focus:border-primary focus:ring-primary active:bg-primary',
  SECONDARY: 'ext-text-default border-secondary transition-colors hover:bg-secondary hover:text-white focus:outline-none focus:border-secondary-700 focus:ring-secondary active:bg-secondary-700',
  TERTIARY: 'text-white bg-tertiary-600 border-tertiary-600 hover:bg-tertiary hover:border-tertiary focus:outline-none focus:border-tertiary focus:ring-tertiary active:bg-tertiary',
  DISABLED: 'text-black bg-gray-400 border-gray-400 cursor-default',

  WARNING: 'text-white bg-warning-600 hover:bg-warning focus:outline-none focus:border-warning-700 focus:ring-warning active:bg-warning-700',
  ERROR: 'text-white bg-error-600 hover:bg-error focus:outline-none focus:border-error-700 focus:ring-error active:bg-error-700',
  SUCCESS: 'text-white bg-success-600 hover:bg-success focus:outline-none focus:border-success-700 focus:ring-success active:bg-success-700',
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
    <button {...defaultProps} className={`rounded-lg py-1 px-3 border-4 ${variantStyles[usedVariant]} ${className}`}
            disabled={disabled}>
      {icon && <FontAwesomeIcon icon={icon} className={'mr-2'}/>}
      {children}
    </button>
  )
}