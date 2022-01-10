
import {useEffect, useRef, useState} from "react";
import {AlertInterface} from "../types/alerts";

/**
 * This hook manage the the Alert list.
 * Each alert is displayed for 2 seconds and fade for 500ms
 *
 * @param initialState initial alert list
 */
export function useAlertList<T extends AlertInterface>(initialState: T[]): [AlertInterface[], (alert: AlertInterface) => AlertInterface] {
  const [alerts, setAlerts] = useState<AlertInterface[]>([]);
  // The setTimeout function do not use the refreshed state. that's why we are using a useRef
  const alertRef = useRef(alerts);

  // Update the ref value each time the sqtate change
  useEffect(() => {
    alertRef.current = alerts;
  }, [alerts])

  const newAlert = (alert: AlertInterface) => {
    // Assign uniq id to each new alert
    alert.id = (new Date()).getMilliseconds();

    alert.timeout = setTimeout(() => {
      // Switch the alert to fade out
      const index = alertRef.current.findIndex(a => a.id === alert.id);
      setAlerts([
        ...alertRef.current.slice(0, index),
        {
          ...alert,
          fadeOut: true,
          timeout: setTimeout(() => {
            // Delete the alert
            setAlerts(alertRef.current.filter(a => a.id !== alert.id));
          }, 500)
        }, ...alertRef.current.slice(index + 2)
      ]);
    }, 2000);

    setAlerts([alert, ...alerts]);
    return alert;
  }

  // When the component is deleted, clear all timeouts
  useEffect(() => {
    return () => {
      alerts.forEach(a => a.timeout && clearTimeout(a.timeout))
    }
  });

  return [alerts, newAlert];
}