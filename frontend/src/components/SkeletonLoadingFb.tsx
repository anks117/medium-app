
import Skeleton from 'react-loading-skeleton'

const SkeletonLoadingFb = () => {
  return (
    <div>
        <div className='flex justify-center px-12'>
            <div className='grid grid-cols-12 gap-8 px-10 pt-12 w-full max-w-screen-xl'>
                <div className='col-span-8'>
                    <div className='text-3xl font-extrabold'>
                    <div className="max-w-full break-words"><Skeleton /></div>
                    </div>
                    <div className='pt-4 break-all'>
                        <Skeleton />
                    </div>
                </div>    
                <div className='col-span-4'>
                    <div className='text-slate-500'>
                        <Skeleton />
                    </div>
                    <div className='flex'>
                        <div className=' pr-2 flex flex-col justify-center'>
                        <Skeleton circle={true} height={40} width={40}/>
                        </div>
                        
                        <div>
                            <div className='text-lg font-semibold'>
                                <Skeleton />
                            </div>
                            <div className='pt-2 text-slate-300'>
                                <Skeleton />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkeletonLoadingFb