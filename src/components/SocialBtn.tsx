import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialBtn = () => {
  return (
    <div className="flex justify-center w-full gap-9">
      <FaFacebook color="blue" style={{ height: "40px", width: "40px" }} />
      <FcGoogle style={{ height: "40px", width: "40px" }} />
    </div>
  );
};

export default SocialBtn;
