import UpVotes from "./up_votes_module";
import template from "../img/template.jpeg"


export default function PostTemplate({userInfo}){
    return(
        <div className="mx-4 my-2 border border-gray-200 bg-gray-700 rounded-md text-white">
            <div className="flex items-center mt-4">
                <a href="#" className="flex items-center w-4/12 lg:w-2/12 md:w-4/12 sm:w-4/12 justify-start border border-gray-500 ms-2 rounded-full">
                    <img src={template} className="rounded-full w-2/12 m-2" />
                    <p className="ms-6">User name</p>
                </a>
                <p className="ms-6">Published date</p>
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