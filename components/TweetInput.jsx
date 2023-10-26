import { db } from "@/firebase";
import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function TweetInput() {
  const [text, setText] = useState("");
  const user = useSelector((state) => state.user);

  async function sendTweet() {
    const docRef = await addDoc(collection(db, "posts"), {
      username: user.username,
      name: user.name,
      photoUrl: user.photoUrl,
      uid: user.uid,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });

    setText("")
  }

  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
      <img
        className="h-11 w-11 rounded-full object-cover"
        src="/assets/kylie.png"
        alt=""
      />
      <div className="w-full">
        <textarea
          placeholder="Whats on your mind?"
          className="bg-transparent resize-none outline-none w-full min-h-[50px] text-lg"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />

        <div className="flex justify-between border-t border-gray-700 pt-4">
          {/* Icons DIV */}
          <div className="flex space-x-0">
            <div className="iconsAnimation">
              <PhotographIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconsAnimation">
              <ChartBarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconsAnimation">
              <EmojiHappyIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconsAnimation">
              <CalendarIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
            <div className="iconsAnimation">
              <LocationMarkerIcon className="h-[22px] text-[#1d9bf0]" />
            </div>
          </div>

          <button disabled={!text} onClick={sendTweet} className="disabled:opacity-50 bg-[#1d9bf0] rounded-full px-5 py-1.5 font-semibold">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetInput;
