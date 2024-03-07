import Floating from "./components/floating_actions_comp/floating_actions_bar";
import Header from "./components/header";
import PostTemplate from "./components/post_template";
import RecentPosts from "./components/recent_posts_section";


const postInfo={
    "id": 5,
    "creator": {
        "id": 6,
        "username": "UMRGRS"
    },
    "post_title": "Post for testing owo",
    "post_summary": "I'm doing some tests owo",
    "post_publish_date": "22/02/2024 07:53:56",
    "up_votes": 653
}

export default function App(){
    return(
        <div>
            <Header />
            <RecentPosts />
            <Floating />
            <div>
                <h1 className="m-5 text-3xl font-bold">Other posts</h1>
                <PostTemplate postInfo={postInfo}/>
                <PostTemplate postInfo={postInfo}/>
                <PostTemplate postInfo={postInfo}/>
            </div>
        </div>
    )
}