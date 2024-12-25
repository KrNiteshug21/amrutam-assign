import React from "react";

interface ExperienceProps {
  institution: string;
  position: string;
  startYear: number | string;
  endYear: number | string;
}

const experienceList: ExperienceProps[] = [
  {
    institution: "Midtown Medical Clinic",
    position: "Senior Doctor",
    startYear: 2016,
    endYear: "PRESENT",
  },
  {
    institution: "Midtown Medical Clinic",
    position: "Senior Doctor",
    startYear: 2010,
    endYear: 2015,
  },
];

const ExperienceItems: React.FC<{ experience: ExperienceProps }> = ({
  experience,
}) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center gap-4 text-gray-400">
        <img
          className="border-2 border-gray-200 p-2 rounded-md w-12 h-12"
          src="/img/vectors/hospital.svg"
          alt="Hospital"
        />
        <div>
          <h3 className="font-semibold text-blue-950 text-lg">
            {experience.institution}
          </h3>
          <p className="font-medium text-gray-500">{experience.position}</p>
        </div>
      </div>
      <p className="text-gray-500">
        {experience.startYear} - {experience.endYear}
      </p>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <div className="space-y-4 border-2 border-gray-200 rounded-xl w-[600px] overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 text-xl">
        <h2>My Work Experience</h2>
      </div>
      <div>
        {experienceList.map((experience) => (
          <ExperienceItems
            key={experience.institution}
            experience={experience}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
