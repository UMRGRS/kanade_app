import UpVotes from "./up_votes_module";
import template from "../img/template.jpeg"

export default function PostTemplate({postInfo}){
    return(
        <div className="mx-4 my-2 border border-gray-200 bg-gray-700 rounded-md text-white">
            <div className="flex items-center mt-4">
                <a href="#userProfile" className="flex items-center w-4/12 lg:w-2/12 md:w-4/12 sm:w-4/12 justify-start border border-gray-500 ms-2 rounded-full">
                    <img src={template} className="rounded-full w-2/12 m-2" />
                    <p className="ms-6">{postInfo["creator"]["username"]}</p>
                </a>
                <p className="ms-6">{postInfo["post_publish_date"]}</p>
            </div>
            <h1 className="text-2xl font-bold m-4">{postInfo["post_title"]}</h1>
            <hr></hr>
            <h2 className="text-lg mx-4 my-2">{postInfo["post_summary"]}</h2>
            <hr></hr>
            <UpVotes votes={postInfo["up_votes"]}/>
        </div>
    )
}