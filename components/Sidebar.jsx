import React from "react";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "@/redux/userSlice";
import { closeLoginModal, closeSignUpModal } from "@/redux/modalSlice";
import Link from "next/link";

export default function Sidebar() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignUpModal());
    dispatch(closeLoginModal());
  }

  return (
    <div className="hidden sm:flex flex-col fixed h-full xl:ml-24">
      <nav className="xl:space-y-1.5 relative h-full">
        <div className="flex xl:p-3 py-3 justify-center items-center xl:justify-start">
          <Link href="/">
            <Image src={"/assets/twitter-logo.png"} width={34} height={34} />
          </Link>
        </div>
        <Link href="/">
          <SidebarLink icon={<HomeIcon className="h-7" />} text={"Home"} />
        </Link>
        <SidebarLink icon={<HashtagIcon className="h-7" />} text={"Explore"} />
        <SidebarLink
          icon={<BellIcon className="h-7" />}
          text={"Notifications"}
        />
        <SidebarLink icon={<InboxIcon className="h-7" />} text={"Messages"} />
        <SidebarLink
          icon={<BookmarkIcon className="h-7" />}
          text={"Bookmarks"}
        />
        <SidebarLink icon={<UserIcon className="h-7" />} text={"Profile"} />
        <SidebarLink
          icon={<DotsCircleHorizontalIcon className="h-7" />}
          text={"More"}
        />
        <button className="hidden cursor-not-allowed xl:inline bg-[#1d9bf0] rounded-full h-[52px] w-[200px] text-lg font-bold mt-2">
          Tweet
        </button>
        <div
          onClick={handleSignOut}
          className="bottom-0 hover:bg-white rounded-full hover:bg-opacity-10 cursor-pointer absolute flex justify-center items-center xl:p-3 space-x-3"
        >
          <img
            src={user.photoUrl || "/assets/kylie.png"}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <DotsHorizontalIcon className="h-5 hidden xl:inline" />
        </div>
      </nav>
    </div>
  );
}

function SidebarLink({ text, icon }) {
  return (
    <li className="hoverAnimation cursor-not-allowed flex mb-3 items-center text-xl space-x-3 xl:justify-start justify-center">
      {icon}
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}
