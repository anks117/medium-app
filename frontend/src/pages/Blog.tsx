
import FullBlog from '../components/FullBlog'
import { useIndividualBlog } from '../hooks/useBlog'
import { useParams } from 'react-router-dom'
import AppBar from '../components/AppBar'
import SkeletonLoadingFb from '../components/SkeletonLoadingFb'


const Blog = () => {

  const { id } =useParams();

  const {loading, blog}=useIndividualBlog({
    id: String(id)
  });

  return (
    <div>
      <AppBar />
      {loading? <SkeletonLoadingFb />:
      <div>
        <FullBlog blog={blog}/>
      </div>}
  </div>
    
  )
}

export default Blog