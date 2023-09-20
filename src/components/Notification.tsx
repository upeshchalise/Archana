import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Notification = () => {
  return (
    <>
      <div className="items-center w-notification mx-auto">
        <nav className="flex gap-3 items-center">
          <Link href="/home">
            <BsArrowLeft color="gray" />
          </Link>
          <span>Notification</span>
        </nav>
        <div className="w-full flex flex-col justify-center items-center align-center h-screen">
          <Image
            src="/images/bigBell.png"
            alt="This is the email of the bell"
            width={60}
            height={60}
          />
          <p className="text-sm text-center w-[10.25rem]">
            No notifications, yet. Come back later{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Notification;
