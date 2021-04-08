import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-400 bg-gray-800 body-font footer-copyright text-center p-8">
      <div>
        &copy; {new Date().getFullYear()} Copyright:
        <a href="https://www.mdbootstrap.com"> Football Fanatic </a>
      </div>
    </footer>
  );
};

export default Footer;
