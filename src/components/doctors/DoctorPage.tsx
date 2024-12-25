import React from "react";
import Header from "./Header";
import About from "./About";
import Specialisation from "./Specialisation";
import Concerns from "./Concerns";
import Experience from "./Experience";
import Reviews from "./Reviews";
import Appointment from "./Appointment";

const DoctorPage: React.FC = () => {
  return (
    <div className="my-10 min-h-screen">
      <Header />
      <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-screen-xl">
        <div className="space-y-4 px-4">
          <About />
          <Specialisation />
          <Concerns />
          <Experience />
          <Reviews />
        </div>
        <div>
          <Appointment />
        </div>
      </div>
    </div>
  );
};

export default DoctorPage;
