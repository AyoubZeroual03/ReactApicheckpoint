import { PostItem } from "../post-item"
import { useState,useEffect } from "react"
export const PosList = () => {
    const [posts,setPosts]=useState(null);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(data=>setPosts(data))
        .catch(err=>console.log(err.message));

    },[]);
    return (
        <>
        <h1 className="text-center">Post</h1>
        <div>
        {posts ?
         posts.map((post)=> <PostItem  key={post.id} post={post} />): "no posts to show"}

        </div>
        
        
        </>
    
    )
}