import React from 'react'

function LoadingSpinner() {
  return (
    <div aria-label="Loading..." role="status" className="flex justify-center items-center mx-auto space-x-2">
    <div className="w-12 h-12 border-8 border-dashed rounded-full animate-spin border-emerald-300"></div>
  <span className="text-lg font-medium text-emerald-50">Generating code...please wait!!!!</span>
</div>

  )
}

export default LoadingSpinner