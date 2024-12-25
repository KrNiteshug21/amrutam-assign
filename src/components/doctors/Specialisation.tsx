import React from "react";

interface SpecialisationProps {
  image: string;
  title: string;
}

const specialisationList: SpecialisationProps[] = [
  { image: "/img/vectors/women-health.svg", title: "Women's Hair" },
  { image: "/img/vectors/skin-care.svg", title: "Skin Care" },
  { image: "/img/vectors/immunity.svg", title: "Immunity" },
  { image: "/img/vectors/hair-care.svg", title: "Hair Care" },
];

const Specialisation: React.FC = () => {
  return (
    <div className="space-y-4 border-2 border-gray-200 rounded-xl w-[600px] overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 text-xl">
        <h2>I Specialize In</h2>
      </div>
      <div className="flex justify-around items-center p-4">
        {specialisationList.map((specialisation, index) => (
          <div key={index}>
            <img src={specialisation.image} alt={specialisation.title} />
            <p className="font-medium text-center text-lg">
              {specialisation.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialisation;
