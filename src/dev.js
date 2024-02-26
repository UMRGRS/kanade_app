import Floating from "./components/floating_actions_bar";
import Header from "./components/header";
import PostTemplate from "./components/post_template";
import RecentPosts from "./components/recent_posts_section";

export default function Dev(){
    return(
        <div>
            <Header />
            <RecentPosts />
            <Floating />
            <div>
                <h1 className="m-5 text-3xl font-bold">Other posts</h1>
                <PostTemplate />
                <PostTemplate />
                <PostTemplate />
                <PostTemplate />
                <PostTemplate />
            </div>
        </div>
    )
    
}