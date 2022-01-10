import {ReactNode} from "react";

export type AlertType =
  'INFO' |
  'SUCCESS' |
  'WARNING' |
  'ERROR';

export interface AlertInterface {
  type?: AlertType,
  title?: string,
  children?: ReactNode,
  id?: number
  timeout?: NodeJS.Timeout
  fadeOut?: boolean
}

export type SendAlertFunction = (alert: AlertInterface) => AlertInterface

export interface ComponentWithAlerts {
  newAlert: SendAlertFunction
}