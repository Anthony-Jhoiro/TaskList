import React from "react";


export type LoadingIndicatorDimention = 'sm' | 'md' | 'lg' | 'xl'

const getClassesFromDimentions = (dimentions?: LoadingIndicatorDimention) => {
  switch (dimentions) {
    case "sm":
      return "h-8 w-8"
    case 'lg':
      return 'h-16 w-16'
    case "xl":
      return 'h-32 w-32'
    default:
      return 'h-10 w-10'
  }
}

export interface LoadingIndicatorProps extends React.ComponentPropsWithoutRef<"div"> {
  label?: string,
  size?: LoadingIndicatorDimention
}

export const LoadingIndicator: React.VFC<LoadingIndicatorProps> = ({label, size, ...divArgs}: LoadingIndicatorProps) => {


  return (
    <div className={"flex items-center py-2"} {...divArgs}>
      <div>
        <div className={"spinner-border text-primary-600 animate-spin inline-block border-4 rounded-full " + getClassesFromDimentions(size)} role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
      {label && <p className={"ml-5"}>{label}</p>}
    </div>
  )
}
