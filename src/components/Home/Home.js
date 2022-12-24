import React, { useEffect, useState } from 'react';
import PostCard from './PostCard';

const Home = () => {

    const [posts, setPosts] = useState([])


    useEffect(()=>{
        fetch('https://dummyapi.io/data/v1/post?limit=10',{
            headers:{
                "app-id": '63a6c79cce8ddac557ade813'
            }
        })
        .then(res=> res.json())
        .then(data=> {
            setPosts(data.data)
        })
    },[])

    console.log(posts)

    return (
        <div className='bg-fuchsia-400 grid grid-cols-1 md:grid-cols-2 gap-4 md:p-20'>
            {
                posts.map(post=> <PostCard key={post.id} post={post}></PostCard>)
            }
        </div>
    );
};

export default Home;