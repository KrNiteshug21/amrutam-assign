import React from "react";
import SectionWrapper from "../Wrapper/SectionWrapper";

const Header: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="relative border-2 bg-hero-pattern bg-cover bg-no-repeat bg-center my-8 rounded-t-xl h-72">
        <div className="right-0 bottom-0 left-0 absolute flex justify-between items-center bg-white px-4 rounded-t-xl h-40">
          <div className="py-20">
            <div className="flex items-center gap-8">
              <img
                src="/img/profiles/profile.png"
                alt="Dr. Bruce Willis"
                className="border-2 border-white mx-auto rounded-full w-36 h-36 -translate-y-10 object-center object-cover"
              />
              <div>
                <h1 className="font-bold text-xl">Dr. Bruce Willis</h1>
                <p className="font-semibold text-lg">Gynecologist</p>
                <p>
                  <span>4.2 </span>
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <span key={rating} className="text-xl text-yellow-400">
                      ★
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p className="font-medium text-base">Followers</p>
            <p className="font-semibold text-xl">850</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-base">Followers</p>
            <p className="font-semibold text-xl">850</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-base">Followers</p>
            <p className="font-semibold text-xl">850</p>
          </div>
          <div className="">
            <button className="bg-green-800 px-4 py-2 rounded-md w-60 font-medium text-white text-xl">
              Book Apointment
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Header;
