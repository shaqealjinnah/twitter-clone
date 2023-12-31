import React, { useState } from "react";
import TweetInput from "./TweetInput";
import Tweet from "./Tweet";
import { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import Link from "next/link";

function PostFeed() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setTweets(snapshot.docs);
    });

    return unsubscribe;
  }, []);

  return (
    <div className="sm:ml-14 xl:ml-80 max-w-2xl flex-grow border-gray-700 border-x">
      <div className="px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50">
        Home
      </div>
      <TweetInput />

      {tweets.map((tweet) => {
        return <Tweet id={tweet.id} key={tweet.id} data={tweet.data()} />;
      })}
    </div>
  );
}

export default PostFeed;
