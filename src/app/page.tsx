"use client";
import Link from "next/link";
import Image from "next/image";
import Hero from "../app/components/Hero";
import Img from "../assets/videobg.png";
import WhatWeDo from "../app/components/WhatWeDo";
import Footer from "../app/components/Footer";

import TextAndVideo from "../app/components/TextAndVideo";
import ThreeDivs from "../app/components/ThreeDivs";

export default function Home() {
  return (
    <>
      <Hero />
      <TextAndVideo
        text="PIC PEGA's mission is to produce content that generates positive and valuable experiences for the public, through relevant information, entertainment, dissemination, inspiration, education and community building, with the aim of positively impacting and influencing people's lives ."
        videoUrl="https://www.youtube.com/embed/VMkXqZH66PQ"
      />
      <WhatWeDo />
      <ThreeDivs
        leftImage="assets/leftimg.png"
        leftImageLink="https://www.instagram.com/reel/CtrZKg3I1RI/?igshid=MzRlODBiNWFlZA%3D%3D"
        middleText="Click on the images to see some of our work!"
        rightImage="assets/rightimg.png"
        rightImageLink="https://www.instagram.com/reel/Ctf0lBmK4Id/?igshid=MzRlODBiNWFlZA%3D%3D"
      />
      <Footer
        backgroundImage="assets/darkgreenbg6.png"
        logoImage="assets/logo.png"
        email="actanaaraujo@gmail.com"
      />
    </>
  );
}
