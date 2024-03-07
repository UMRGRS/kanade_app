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

export default function Dev(){
    return(
        <div>
            <Header />
            <RecentPosts />
            <PostTemplate postInfo={postInfo}/>

            {/* 
            Floating actions buttons when login 
            <Floating status={true}/> 
            */}
            {/* 
            Floating actions buttons when not login
            <Floating status={false}/> 
            */}
            <Floating status={false}/>
        </div>
    )
    
}