// components/ThreeDivs.tsx
import React from "react";

type ThreeDivsProps = {
  leftImage: string;
  leftImageLink: string;
  rightImage: string;
  rightImageLink: string;
  middleText: string;
};

const ThreeDivs: React.FC<ThreeDivsProps> = ({
  leftImage,
  leftImageLink,
  rightImage,
  rightImageLink,
  middleText,
}) => {
  return (
    <div className="flex justify-center items-center space-x-4 p-5 bg-[#b91646]">
      {/* Left Div */}
      <div className="w-1/4">
        <a href={leftImageLink} target="_blank" rel="noopener noreferrer">
          <img
            src={leftImage}
            alt="Left"
            className="object-cover w-full h-full"
          />
        </a>
      </div>

      {/* Middle Div */}
      <div className="w-1/2 text-center p-5 ">
        <p className="text-5xl">{middleText}</p>
      </div>

      {/* Right Div */}
      <div className="w-1/4">
        <a href={rightImageLink} target="_blank" rel="noopener noreferrer">
          <img
            src={rightImage}
            alt="Right"
            className="object-cover w-full h-full"
          />
        </a>
      </div>
    </div>
  );
};

export default ThreeDivs;
