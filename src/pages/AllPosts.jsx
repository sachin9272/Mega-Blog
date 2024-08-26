import React, { useEffect, useState } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/config';

const AllPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{},[])
    appwriteService.getPosts([]).then((posts)=>{
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div>
      <div className='w-full py-8'>
        <Container>
          <div className='flex flex-wrap'>
            {posts.map((post) => (
                <div key={post.$id} className='p-2 w-1/2'> 
                <PostCard post={post}/>
                </div>
            ))}
          </div>
            
        </Container>
      </div>
    </div>
  )
}

export default AllPosts
