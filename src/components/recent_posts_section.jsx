import { useEffect } from "react";
import PostTemplate from "./post_template";
import { useState } from "react";
export default function RecentPosts(){

    const [items, setItems] = useState(null);
    useEffect(()=>{
        const options = {
            method: 'GET',
            };
        fetch('https://intent-smoothly-collie.ngrok-free.app/Noeru/recent-posts/', options)
        .then((res)=>res.json())
        .then((json)=>setItems(json.map(post=><div key={post.id}><PostTemplate postInfo={post}/></div>)))
    },[]);
    return(
        <div>
            <h1 className="m-5 text-3xl font-bold">Recent posts</h1>
            <div className="h-72 overflow-auto border border-gray-500 m-4 rounded-lg">
                {items}
            </div>
        </div>
    )
}