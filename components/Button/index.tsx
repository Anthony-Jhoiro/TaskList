import {IconProp} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'


export type ButtonVariant = 'PRIMARY' | 'SECONDARY' | 'WARNING' | 'ERROR' | 'SUCCESS' | 'DISABLED';


export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant
  icon?: IconProp,
  className?: string,
}

type VariantStylesType = {
  [key in ButtonVariant]: string;
};

const variantStyles: VariantStylesType = {
  PRIMARY: 'text-white bg-primary-600 hover:bg-primary focus:outline-none focus:border-primary-700 focus:ring-primary active:bg-primary-700',
  SECONDARY: 'text-white bg-secondary-600 hover:bg-secondary focus:outline-none focus:border-secondary-700 focus:ring-secondary active:bg-secondary-700',
  WARNING: 'text-white bg-warning-600 hover:bg-warning focus:outline-none focus:border-warning-700 focus:ring-warning active:bg-warning-700',
  ERROR: 'text-white bg-error-600 hover:bg-error focus:outline-none focus:border-error-700 focus:ring-error active:bg-error-700',
  SUCCESS: 'text-white bg-success-600 hover:bg-success focus:outline-none focus:border-success-700 focus:ring-success active:bg-success-700',
  DISABLED: 'text-black bg-gray-400 hover:bg-gray-300 focus:outline-none focus:border-gray-500 focus:ring-gray-300 active:bg-gray-500',
}

const iconColorVariants = {
  PRIMARY: '#fff',
  SECONDARY: '#fff',
  WARNING: '#fff',
  ERROR: '#fff',
  SUCCESS: '#fff',
  DISABLED: '#222',
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
    <button {...defaultProps} className={`py-2 px-4 ${variantStyles[usedVariant]} ${className}`} disabled={disabled}>
      {icon && <FontAwesomeIcon icon={icon} color={iconColorVariants[usedVariant]} className={'mr-2'}/>}
      {children}


    </button>
  )
}