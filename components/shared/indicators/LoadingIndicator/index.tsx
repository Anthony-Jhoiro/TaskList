import React from "react";


export interface LoadingIndicatorProps {
  label?: string
}

export const LoadingIndicator: React.VFC<LoadingIndicatorProps> = ({label}: LoadingIndicatorProps) => {
  return (
    <div className="flex items-center py-2">
      <div>
        <div className="spinner-border text-primary-600 animate-spin inline-block w-10 h-10 border-4 rounded-full" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
      {label && <p className={"ml-5"}>{label}</p>}
    </div>
  )
}
