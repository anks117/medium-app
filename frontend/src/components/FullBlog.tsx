
import { Blog } from '../hooks/useBlog'
import { Avatar } from './BlogCards'

const FullBlog = ({blog}: { blog:Blog }) => {
  return (
    <>
   
    <div className='flex justify-center px-12'>
        <div className='grid grid-cols-12 gap-8 px-10 pt-12 w-full max-w-screen-xl'>
            <div className='col-span-8'>
                <div className='text-3xl font-extrabold'>
                <div className="max-w-full break-words">{blog.title}</div>
                </div>
                <div className='pt-4 break-all'>
                    {blog.content}
                </div>
            </div>    
            <div className='col-span-4'>
                <div className='text-slate-500'>
                    Author
                </div>
                <div className='flex'>
                    <div className=' pr-2 flex flex-col justify-center'>
                    <Avatar name={blog.author.name || "Anonymous"}/>
                    </div>
                    
                    <div>
                        <div className='text-lg font-semibold'>
                            {blog.author.name || "Anonymous"}
                        </div>
                        <div className='pt-2 text-slate-300'>
                            Random catch phrase to grab the users attention.
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
    </div>
    </>
  )
}

export default FullBlog