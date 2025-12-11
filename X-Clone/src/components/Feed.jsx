import {
  BarChart2,
  Heart,
  HeartPlus,
  MessageCircle,
  Repeat,
  Share,
  ShieldCheck,
} from "lucide-react";
import React, { useState } from "react";

const Feed = ({item})=> {
  const [count, setCount] = useState(1)

  return (
    <div className="post flex items-start border-b border-slate-700 mt-3 pb-2">
      {/* PROFILE IMAGE */}
      <div className="postAvatar p-1 bg-slate-800 mt-4 rounded-full flex justify-center items-start">
        <img
          className=" w-10 h-10 rounded-full object-cover "
          src={item.profileImage}
          alt=""
        />
      </div>
      <div className="post_body flex-1 p-2 w-full">
        <div className="post_header">
          <div className="headerText">
            <h3 className="flex items-center text-lg font-bold">
              {item.profileName}{""}{" "}
              <span>
                <ShieldCheck size={17} color="#1e24cc" strokeWidth={3} />
              </span>
              <p className="text-sm text-gray-400">{item.userName}</p>
            </h3>
          </div>
          <div className="post_headerDescription text-am mb-2">
            <p>{item.caption}</p>
          </div>
        </div>

        {/* CONTENT */}
        <div className="content w-full p-2.5 mt-4 flex items-center">
          <img
            className="w-full bg-slate-800 rounded-lg "
            src= {item.contentImage}
            alt=""
          />
        </div>

        {/* ENGAGEMENT BAR */}
        <div className="flex justify-between items-center mt-4 max-w-md text-gray-400">
         <button className="flex items-center gap-2 group cursor-pointer">
            <MessageCircle className="w-5 h-5 group-hover:text-blue-500" />
            <span className="group-hover:text-blue-500">
              {/* {post.comments} */}
              {item.tweetComment}
              </span>
          </button>

          <button className="flex items-center gap-2 group cursor-pointer">
            <Repeat className="w-5 h-5 group-hover:text-green-500" />
            <span className="group-hover:text-green-500">
              {/* {post.retweets} */}
              {item.tweetRepost}
              </span>
          </button>

          

          <button onClick={()=> setCount(count + 1)} className="flex items-center gap-2 group cursor-pointer">
            <Heart className="w-5 h-5 group-hover:text-pink-500" />
            <span className="group-hover:text-pink-500">
              {/* {post.likes} */}
              {count}
              </span>
          </button>

          <button className="flex items-center gap-2 group cursor-pointer">
            <BarChart2 className="w-5 h-5 group-hover:text-purple-500" />
            <span>
              {/* {post.views} */}
              {item.tweetView}
              </span>
          </button>

           <button className="cursor-pointer group">
            <Share className="w-5 h-5 group-hover:text-blue-500" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Feed;
