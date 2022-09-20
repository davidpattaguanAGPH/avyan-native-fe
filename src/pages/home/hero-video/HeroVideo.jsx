import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

const HeroVideo = () => {
  const navigate = useNavigate();

  const onClickExit = () => {
    navigate("/");
  };

  return (
    <div className="h-screen bg-black flex justify-center  flex-col">
      <div className="flex justify-end mr-5 mb-5">
        <div
          className="text-white text-2xl cursor-pointer"
          onClick={onClickExit}
        >
          <AiFillCloseCircle size={30} />
        </div>
      </div>

      <iframe
        width="100%"
        height="80%"
        src="https://www.youtube.com/embed/gI1eHdo9gYs"
        // src="https://www.youtube.com/embed/gI1eHdo9gYs?autoplay=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default HeroVideo;
