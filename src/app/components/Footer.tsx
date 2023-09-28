import React from "react";
// import { MailIcon } from "@heroicons/react/outline";

type FooterProps = {
  backgroundImage: string;
  logoImage: string;
  email: string;
};

const Footer: React.FC<FooterProps> = ({
  backgroundImage,
  logoImage,
  email,
}) => {
  return (
    <footer
      style={{
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="flex flex-col items-center justify-center h-100 p-10"
    >
      {/* Logo Image */}
      <img src={logoImage} alt="Logo" className="w-46 h-36 mb-4 m-10" />

      {/* Email Link */}
      <a
        href={`mailto:${email}`}
        className="flex items-center  text-pink-800 text-4xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
          <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
        </svg>
        Contact us today!
      </a>
    </footer>
  );
};

export default Footer;
