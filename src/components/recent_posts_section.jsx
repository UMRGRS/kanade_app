import PostTemplate from "./post_template";

export default function RecentPosts(){
    return(
        <div className="h-72 overflow-auto border border-gray-500 m-4 rounded-lg">
            <h1 className="m-5 text-3xl font-bold">Recent posts</h1>
            <PostTemplate />
            <PostTemplate />
            <PostTemplate />
            <PostTemplate />
            <PostTemplate />
        </div>
    )
}