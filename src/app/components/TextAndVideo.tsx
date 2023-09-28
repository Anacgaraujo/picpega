"use client";
import React, { useState } from "react";
import Img from "../../assets/videobg.png";

type TextAndVideoProps = {
  text: string;
  videoUrl: string;
};

const TextAndVideo: React.FC<TextAndVideoProps> = ({ text, videoUrl }) => {
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  return (
    <div className="flex bg-[#fec1c0] p-10">
      <div className="w-1/2 flex items-center justify-center p-10">
        <p className="text-black">{text}</p>
      </div>
      <div className="w-1/2 relative p-4">
        {playing ? (
          <iframe
            width="100%"
            height="100%"
            src={videoUrl + "?autoplay=1&mute=1"} // Add mute=1 parameter here
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center cursor-pointer"
            onClick={handlePlayClick}
          >
            <img
              src="/assets/videobg.png"
              alt="Click to play"
              className="w-full h-full object-cover"
            />
            {/* Play Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white hover:scale-110 transition-transform duration-200 absolute"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 4v16l15-8-15-8z"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextAndVideo;
