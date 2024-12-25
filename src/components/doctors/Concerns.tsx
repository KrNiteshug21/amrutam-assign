import React from "react";
interface ConcernProps {
  title: string;
}

const concernList: ConcernProps[] = [
  { title: "Skin Treatment" },
  { title: "Pregnancy" },
  { title: "Period Doubts" },
  { title: "Endometriosis" },
  { title: "Pelvic Pain" },
  { title: "Ovarian Cysts" },
  { title: "PCOS" },
  { title: "Menopause" },
  { title: "Breast Cancer" },
  { title: "Cervical Cancer" },
  { title: "Vaginal Infections" },
];

const Concerns: React.FC = () => {
  const initValue = 6;
  const [selectedConcern, setSelectedConcern] =
    React.useState<number>(initValue);

  return (
    <div className="space-y-4 border-2 border-gray-200 rounded-xl w-[600px] overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 text-xl">
        <h2>The Concerns I Treat</h2>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-4 p-4">
        {concernList.slice(0, selectedConcern).map((concern) => (
          <button
            className="bg-gray-200 px-3 py-2 rounded-full font-semibold text-green-800"
            key={concern.title}
          >
            {concern.title}
          </button>
        ))}
        {selectedConcern === concernList.length ? (
          <button
            className="bg-gray-200 px-3 py-2 rounded-full font-semibold text-green-800"
            onClick={() => setSelectedConcern(initValue)}
          >
            View less
          </button>
        ) : (
          <button
            onClick={() => setSelectedConcern(concernList.length)}
            className="bg-gray-200 px-3 py-2 rounded-full font-semibold text-green-800"
          >
            +{concernList.length - selectedConcern} more
          </button>
        )}
      </div>
    </div>
  );
};

export default Concerns;
