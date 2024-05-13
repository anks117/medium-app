
import { Link } from 'react-router-dom';

interface BlogCardProps{
    authorname:string;
    title:string;
    content:string;
    publishedDate:string
    id:number
}

const BlogCards = ({
    authorname,
    title,
    content,
    publishedDate,
    id
}:BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
        <div className='p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer'>
            <div className=' flex'>

                  <Avatar name={authorname}/> 
                
                <div className='font-extralight text-sm pl-2 flex-col justify-center'>
                    {authorname}
                </div>

                <div className='flex justify-center flex-col pl-2'>
                  <Circle />
                </div>

                <div className='pl-2 text-sm font-thin text-slate-500 flex-col justify-center' >
                  {publishedDate}
                </div>

            </div>
            <div className='text-xl font-bold pt-2 break-words'>
              {title}
            </div>
            <div className='text-md font-thin break-words'>
              {content.length>100?content.slice(0,100)+"...":content}
            </div>
            <div className='text-slate-300 font-thin text-sm pt-2'>
              {`${Math.ceil(content.length/100)}minutes ago`}
            </div>
          </div>
    </Link >

  )
}

function Circle(){
  return <div className='h-1 w-1 rounded-full bg-slate-600'></div>
}

export function Avatar({name}:{name:string}){
  return(
    
    <div className="relative inline-flex items-center justify-center w-6 h-6 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0]}</span>
  </div>

  )
}

export default BlogCards