import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";

function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-7 mt-4">
      <div className="flex space-x-3 bg-white bg-opacity-10 w-[300px] h-[44px] p-3 rounded-3xl">
        <SearchIcon className="text-gray-600 w-6" />
        <input
          placeholder="Search Twitter"
          className="cursor-not-allowed bg-transparent focus:outline-none placeholder:text-gray-600"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3 ">
        <h1 className="font-bold text-xl p-3">What's happening</h1>
        <div className="relative p-3">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340k Tweets</p>
        </div>
        <div className="relative p-3">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340k Tweets</p>
        </div>
        <div className="relative p-3">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340k Tweets</p>
        </div>
        <div className="relative p-3">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340k Tweets</p>
        </div>
        <div className="relative p-3">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">340k Tweets</p>
        </div>
      </div>
      <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3 ">
        <h1 className="font-bold text-xl p-3">Who to follow</h1>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              src="/assets/bragg.png"
              className="object-cover w-11 h-11 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-1">
                <h1 className="font-bold">David Bragg</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-gray-500 text-[12px]">@davidbragg</h1>
            </div>
          </div>

          <button className="bg-white cursor-not-allowed text-black text-sm w-20 h-8 rounded-2xl font-bold">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              src="/assets/pfp.png"
              className="object-cover w-11 h-11 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-1">
                <h1 className="font-bold">Elon Musk</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-gray-500 text-[12px]">@elonmusk</h1>
            </div>
          </div>

          <button className="bg-white cursor-not-allowed text-black text-sm w-20 h-8 rounded-2xl font-bold">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3">
            <img
              src="/assets/kylie.png"
              className="object-cover w-11 h-11 rounded-full"
            />
            <div>
              <div className="flex items-center space-x-1">
                <h1 className="font-bold">Kylie Jenner</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-gray-500 text-[12px]">@kyliejenner</h1>
            </div>
          </div>

          <button className="bg-white cursor-not-allowed text-black text-sm w-20 h-8 rounded-2xl font-bold">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}

export default Trending;
