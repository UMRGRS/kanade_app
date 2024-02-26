import PostTemplate from "./post_template";

export default function RecentPosts({somePosts}){
    const items = somePosts.map(post=><div key={post.id}><PostTemplate postInfo={post}/></div>);
    return(
        <div>
            <h1 className="m-5 text-3xl font-bold">Recent posts</h1>
            <div className="h-72 overflow-auto border border-gray-500 m-4 rounded-lg">
                {items}
            </div>
        </div>
    )
}