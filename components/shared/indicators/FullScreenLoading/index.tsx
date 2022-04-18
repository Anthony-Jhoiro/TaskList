import React from "react";


export interface FullScreenLoadingProps {

}

export const FullScreenLoading: React.VFC<FullScreenLoadingProps> = ({}: FullScreenLoadingProps) => {
  return (
    <div className="w-full h-screen justify-center items-center overflow-hidden">
      <div className="text-center">
        <div className="spinner-border text-primary animate-spin inline-block w-36 h-36 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="text-xl mt-5 text-primary-600 font-bold">Chargement...</p>
      </div>
    </div>
  )
}
