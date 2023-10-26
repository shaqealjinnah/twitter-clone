import { openCommentModal, setCommentTweet } from "@/redux/modalSlice";
import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import React from "react";
import Moment from "react-moment";
import { useDispatch } from "react-redux";

export default function Tweet({ data, id }) {
  const dispatch = useDispatch();

  return (
    <div className="border-b border-gray-700">
      <TweetHeader
        username={data?.username}
        name={data?.name}
        timestamp={data?.timestamp?.toDate()}
        tweet={data?.tweet}
        photoUrl={data?.photoUrl}
      />
      <div className="p-3 flex space-x-12 ml-16 text-gray-500">
        <div
          onClick={() => {
            dispatch(
              setCommentTweet({
                id: id,
                tweet: data?.tweet,
                photoUrl: data?.photoUrl,
                name: data?.name,
                username: data?.username,
              })
            );
            dispatch(openCommentModal());
          }}
        >
          <ChatIcon className="w-5 cursor-pointer hover:text-green-400" />
        </div>
        <HeartIcon className="w-5 cursor-pointer hover:text-pink-500" />
        <ChartBarIcon className="w-5 cursor-not-allowed hover:text-green-400" />
        <UploadIcon className="w-5 cursor-not-allowed hover:text-green-400" />
      </div>
    </div>
  );
}

export function TweetHeader({ username, name, timestamp, tweet, photoUrl }) {
  return (
    <div className="flex space-x-3 p-3">
      <img className="w-11 h-11 rounded-full object-cover" src={photoUrl} />
      <div>
        <div className="flex space-x-2 items-center text-gray-500 mb-1">
          <h1 className="text-white font-bold">{name}</h1>
          <span>@{username}</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <Moment fromNow>{timestamp}</Moment>
        </div>

        <span>{tweet}</span>
      </div>
    </div>
  );
}
