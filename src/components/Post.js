/*
postlive=> CREATE TABLE posts (
  uuid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  content VARCHAR(512),
  link VARCHAR(512),
  type post_type,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  date_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


export default function Post({ post }) {
    return (
      <div className="border border-gray-300 p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="mt-2">{post.content}</p>
        {post.link && (
          <a href={post.link} className="text-blue-500 mt-2 block" target="_blank" rel="noopener noreferrer">
            {post.link}
          </a>
        )}
        <p className="mt-2 text-gray-500">Type: {post.type}</p>
        <p className="text-gray-500">Created: {post.date_created}</p>
        <p className="text-gray-500">Updated: {post.date_updated}</p>
      </div>
    );
  }
*/

import PostLink from "./content/PostLink"
import PostText from "./content/PostText"
import ProfilePicRound from "./user/ProfilePicRound"
import { get_user_by_id} from "@/data/user";



function formatDate(db_date){
    let conv = new Date(db_date)
    if (conv){
        return conv.toLocaleDateString("en-US") + " " + conv.toLocaleTimeString("en-US")
    }
    console.log("formatDate failed")
    return db_date
}


function postactions(){
    return (
        <div className="flex mt-2 space-x-10 text-gray-500 justify-evenly">
          <span>
            <i className="fa fa-comment-o"></i>
          </span>
          <span>
            <i className="fa fa-recycle"></i>1
          </span>
          <span>
            <i className="fa fa-hand-paper-o"></i>
          </span>
          <span>
            <i className="fa fa-hand-spock-o"></i>
          </span>
        </div>
    )
}

export default async function Post({ post }) {
    if (post.type != "link" && post.type != "tweet") return (null);
    let user = await get_user_by_id(post.userid)
  return (
    <div className="mt-4">
      <div className="py-2 px-5 bg-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
          <ProfilePicRound key={post.userid} userID={post.userid}/>
            <div className="flex items-center space-x-1">
              <div>
                <h1 className="font-bold text-gray-600">{user['display_name']}</h1>
              </div>
              <p className="text-gray-600">@username</p>
              <span style={{ fontSize: 6 }}>
                <i className="fa fa-circle text-gray-600"></i>
              </span>
              <span className="text-gray-600">{
             formatDate(post.date_created == post.date_updated ? ( post.date_created ): (post.date_updated) )
              } {post.type} </span>

            </div>
          </div>
          <div>
            <span className="text-lg text-gray-600">
              <i className="fa fa-ellipsis-h"></i>
            </span>
          </div>
        </div>


        
        { (post.type == "link" && post.link.length) ? ( <PostLink key={post.uuid+post.link} post={post}/>) : (null) }
        { (post.type == "tweet" && post.content.length) ? ( <PostText key={post.uuid+post.content} post={post}/>) : (null) }
        {postactions()}
      </div>
    </div>
  );
}
