import React from "react";

interface DoctorProps {
  name: string;
  expertise: string;
  experience: string;
  videoFees: number;
  chatFees: number;
  language: string[];
  rating: number;
  image: string;
}

const doctorsList: DoctorProps[] = [
  {
    name: "Dr. Priya Sharma",
    expertise: "Dermatologist",
    experience: "10 years",
    videoFees: 1000,
    chatFees: 150,
    language: ["English", "Hindi"],
    rating: 4.5,
    image: "/img/profiles/profile2.png",
  },
  {
    name: "Dr. Raj Patel",
    expertise: "Neurologist",
    experience: "8 years",
    videoFees: 1200,
    chatFees: 200,
    language: ["English", "Gujarati"],
    rating: 4.7,
    image: "/img/profiles/profile2.png",
  },
  {
    name: "Dr. Anjali Mehta",
    expertise: "Pediatrician",
    experience: "6 years",
    videoFees: 900,
    chatFees: 100,
    language: ["English", "Hindi"],
    rating: 4.3,
    image: "/img/profiles/profile2.png",
  },
  {
    name: "Dr. Vikram Singh",
    expertise: "Orthopedic",
    experience: "12 years",
    videoFees: 1100,
    chatFees: 50,
    language: ["English", "Punjabi"],
    rating: 4.8,
    image: "/img/profiles/profile2.png",
  },
  {
    name: "Dr. Kavita Rao",
    expertise: "Gynecologist",
    experience: "7 years",
    videoFees: 950,
    chatFees: 75,
    language: ["English", "Telugu"],
    rating: 4.6,
    image: "/img/profiles/profile2.png",
  },
  {
    name: "Dr. Arjun Desai",
    expertise: "Oncologist",
    experience: "15 years",
    videoFees: 1500,
    chatFees: 200,
    language: ["English", "Marathi"],
    rating: 4.9,
    image: "/img/profiles/profile2.png",
  },
  {
    name: "Dr. Sneha Kapoor",
    expertise: "Psychiatrist",
    experience: "9 years",
    videoFees: 1300,
    chatFees: 100,
    language: ["English", "Hindi"],
    rating: 4.4,
    image: "/img/profiles/profile2.png",
  },
  {
    name: "Dr. Manish Gupta",
    expertise: "General Physician",
    experience: "4 years",
    videoFees: 700,
    chatFees: 0,
    language: ["English", "Hindi"],
    rating: 4.2,
    image: "/img/profiles/profile2.png",
  },
];

const DoctorCard: React.FC<DoctorProps> = (doctor) => {
  return (
    <div className="bg-orange-50 shadow-md p-4 rounded-md overflow-hidden">
      <div className="">
        <div className="relative w-full h-full">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="mx-auto rounded-full w-48 h-48 object-center object-cover"
          />
          <p className="bottom-0 left-1/2 absolute space-x-2 bg-black/90 px-3 py-1 rounded-full text-lg text-white -translate-x-1/2">
            <span>{doctor.rating}</span>
            <span className="text-xl text-yellow-400">★</span>
          </p>
        </div>
        <div className="flex flex-col justify-center gap-2 mx-auto my-4 px-4 w-max text-lg">
          <h2 className="font-semibold text-4xl text-center">{doctor.name}</h2>
          <p className="flex justify-center items-center gap-2 text-gray-600">
            <img src="img/vectors/speciality.svg" alt="Speciality" />
            {doctor.expertise}
          </p>
          <p className="flex justify-center items-center gap-2 text-gray-600">
            <img src="img/vectors/edu.svg" alt="Experience" />
            {doctor.experience} of experience
          </p>
          <p className="flex justify-center items-center gap-2 text-gray-600">
            <img src="img/vectors/comment.svg" alt="Chat" />
            <span>Speaks: </span>
            {doctor.language.map((lang) => (
              <span key={lang}>{lang},</span>
            ))}
          </p>
          <div className="flex justify-center gap-4 my-2">
            <button className="flex flex-col items-center border-2 p-2 rounded-md text-center">
              <span>Video Consultation</span>
              <span className="font-semibold text-green-600">
                ₹{doctor.videoFees === 0 ? "Free" : doctor.videoFees}
              </span>
            </button>
            <button className="flex flex-col items-center border-2 p-2 rounded-md text-center">
              <span>Chat Consultation</span>
              <span className="font-semibold text-green-600">
                ₹{doctor.videoFees == 0 ? "Free" : doctor.chatFees}
              </span>
            </button>
          </div>
          <button className="border-2 border-green-600 px-4 py-2 rounded-md w-full font-medium text-green-600">
            View Profile
          </button>
          <button className="bg-green-600 px-4 py-2 rounded-md w-full text-white">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

const Doctor: React.FC = () => {
  return (
    <section className="gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto p-4 max-w-screen-xl overflow-hidden">
      {doctorsList.map((doctor) => (
        <DoctorCard key={doctor.name} {...doctor} />
      ))}
    </section>
  );
};

export default Doctor;
