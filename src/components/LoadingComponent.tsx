import React from 'react'
import Image from 'next/image'
function LoadingComponent() {
  return (
    <div className='flex flex-col items-center gap-4 justify-center h-screen'>
     <div className="relative flex justify-center items-center">
            <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-violet-500" />
            <Image alt='loading' src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" className="rounded-full h-28 w-28" height={50} width={50} />

            </div>
          <p className="text-gray-600">Processing Contents...</p>
    </div>


  )
}

export default LoadingComponent