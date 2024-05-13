
import BlogCards from '../components/BlogCards'
import AppBar from '../components/AppBar'
import useBlog from '../hooks/useBlog'
import SkeletonLoading from '../components/SkeletonLoading'



const Blogs = () => {

  const {loading,blogs}=useBlog();

  return (
    <div>
      <AppBar />
      
      <div className='flex justify-center'>
      {loading?
      <div className='flex flex-col justify-center'>
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      <SkeletonLoading />
      </div>:
        <div>
          {blogs.map((b)=>{
            return(
              <BlogCards  id={b.id} title={b.title} authorname={b.author.name} content={b.content} publishedDate={'10 May 2024'}/>
            )
          })}
        </div>}
    </div>
      
    </div>
  )
}

export default Blogs