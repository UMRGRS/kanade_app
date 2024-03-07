import APIFecth from "./components/api_fetch";
import Floating from "./components/floating_actions_comp/floating_actions_bar";
import Header from "./components/header";
import PostTemplate from "./components/post_template";
import RecentPosts from "./components/recent_posts_section";

const somePosts = [
    {
        "id": 1,
        "creator": {
            "id": 1,
            "username": "UMRGRS"
        },
        "post_title": "Post for testing 1",
        "post_summary": "I'm doing some tests 1",
        "post_publish_date": "22/02/2024 07:54:56",
        "up_votes": 653
    },
    {
        "id": 2,
        "creator": {
            "id": 1,
            "username": "UMRGRS"
        },
        "post_title": "Post for testing 2",
        "post_summary": "I'm doing some tests 2",
        "post_publish_date": "22/02/2024 07:55:56",
        "up_votes": 653
    },
    {
        "id": 3,
        "creator": {
            "id": 1,
            "username": "UMRGRS"
        },
        "post_title": "Post for testing 3",
        "post_summary": "I'm doing some tests 3",
        "post_publish_date": "22/02/2024 07:56:56",
        "up_votes": 653
    }
]

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
            <RecentPosts somePosts={somePosts}/>
            <PostTemplate postInfo={postInfo}/>

            {/* 
            Floating actions buttons when login 
            <Floating status={true}/> 
            */}
            {/* 
            Floating actions buttons when not login
            <Floating status={false}/> 
            */}
            <Floating status={true}/>
            <APIFecth />
        </div>
    )
    
}