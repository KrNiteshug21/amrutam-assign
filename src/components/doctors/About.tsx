import React from "react";
import { Link } from "react-router";

const About: React.FC = () => {
  return (
    <div className="border-2 border-gray-200 rounded-xl w-[600px] overflow-hidden">
      <div className="flex justify-between items-center bg-gray-100 px-4 py-3 text-xl">
        <h2>A little about me</h2>
        <button className="border-2 border-gray-900 px-2 rounded-md text-lg">
          Follow +
        </button>
      </div>
      <div className="space-y-4 p-4">
        <p className="text-base text-gray-700">
          Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital
          Surat. love to work with all my hospital staff and seniour doctors.
          Completed my graduation in Gynaecologist Medicine from the{" "}
        </p>
        <div className="flex justify-between items-center gap-4">
          <hr className="w-full" />
          <p className="flex items-center gap-2 text-lg">
            <span>Read</span>
            <span>more</span>
          </p>
        </div>
        <p className="flex items-center gap-4 text-xl">
          <span>Language Spoken</span>
          <span className="bg-gray-200 px-4 py-1 rounded-full">English</span>
          <span className="bg-gray-200 px-4 py-1 rounded-full">Hindi</span>
          <span className="bg-gray-200 px-4 py-1 rounded-full">Telugu</span>
        </p>
        <div className="flex items-center gap-4">
          <Link to="#">
            <img src="/img/vectors/facebook.svg" alt="Facebook" />
          </Link>
          <Link to="#">
            <img src="/img/vectors/instagram.svg" alt="Facebook" />
          </Link>
          <Link to="#">
            <img src="/img/vectors/youtube.svg" alt="Facebook" />
          </Link>
          <Link to="#">
            <img src="/img/vectors/twitter.svg" alt="Facebook" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
