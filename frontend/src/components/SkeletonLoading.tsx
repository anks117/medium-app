import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoading = () => {
  return (
    
    <div className='p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md '>
        
            <div className=' flex'>

                  <Skeleton circle={true} height={20} width={20}/> 
                
                <div className='font-extralight text-sm pl-2 flex-col justify-center'>
                    <Skeleton />
                </div>

                <div className='flex justify-center flex-col pl-2'>
                    <Skeleton />
                </div>

                <div className='pl-2 text-sm font-thin text-slate-500 flex-col justify-center' >
                    <Skeleton />
                </div>

            </div>
            <div className='text-xl font-bold pt-2'>
                <Skeleton />
            </div>
            <div className='text-md font-thin'>
                <Skeleton />
            </div>
            <div className='text-slate-300 font-thin text-sm pt-2'>
                <Skeleton />
            </div>
          
    </div>
  )
}

export default SkeletonLoading