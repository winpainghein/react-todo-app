import React from 'react'
import emptySvg from "./image/undrawEmpty.svg"

const EmptyState = () => {
  return (
    <div className="hidden last:flex flex-col justify-center items-center gap-4 p-3">
    <img className="w-[150px]" src={emptySvg} />
    <p className="text-sm text-gray-400">Oops! There is no list</p>
  </div>
  )
}

export default EmptyState