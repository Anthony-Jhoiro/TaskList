import {ReactNode} from "react";
import {AlertType} from "../../types/alerts";


export interface AlertProps {
  children?: ReactNode,
  alertType?: AlertType,
  title?: string
  className?: string
}

function getContainerStyle(alertType?: AlertType) {
  switch (alertType) {
    case 'ERROR':
      return 'border-red-400'
    case 'SUCCESS':
      return 'border-green-400'
    case 'WARNING':
      return 'border-yellow-400'
    default:
      return 'border-blue-400'
  }
}

function getTitleStyle(alertType?: AlertType) {
  switch (alertType) {
    case 'ERROR':
      return 'text-red-500'
    case 'SUCCESS':
      return 'text-green-500'
    case 'WARNING':
      return 'text-yellow-500'
    default:
      return 'text-blue-500'
  }
}

export function Alert({title, alertType, children, className}: AlertProps) {

  const containerStyle = getContainerStyle(alertType);
  const titleStyle = getTitleStyle(alertType);

  return (
    <div className={`bg-white shadow border-l-8 p-3 ${containerStyle} ${className}`}>
      {title && <h3 className={`ml-2 ${titleStyle}`}>{title}</h3>}
      {children}
    </div>
  )
}

