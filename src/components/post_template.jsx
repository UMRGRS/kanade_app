import UpVotes from "./up_votes_module";
import template from "../img/template.jpeg"


export default function PostTemplate({userInfo}){
    return(
        <div className="mx-4 my-2 border border-gray-200 rounded-md">
            <div className="flex ">
                <a href="#" className="flex justify-start w-1/12 border border-gray-500 mt-2 ms-2 rounded-full">
                    <img src={template} className="rounded-full w-8 m-2" />
                    <p className="mt-3">User name</p>
                </a>
                <p className="mt-5 ms-2">Published date</p>
            </div>
            <div className="flex ms-4 mt-2">
                <h1 className="text-2xl font-bold">Title</h1>
            </div>
            <hr></hr>
            <h2 className="text-lg mx-4 my-2">Summary</h2>
            <hr></hr>
            <UpVotes votes={100}/>
        </div>
    )
}