import React from "react";
import { IoIosClose } from "react-icons/io";

interface FiltersProps {
  expertise: string;
  gender: string;
  fees: string;
  lang: string;
}

const initFilters: FiltersProps = {
  expertise: "all",
  gender: "all",
  fees: "all",
  lang: "all",
};

const Filters: React.FC = () => {
  const [filters, setFilters] = React.useState<FiltersProps>(initFilters);
  const handleChanges = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <section>
      <div className="space-y-10">
        <form className="flex justify-around items-center gap-4 border-2 lg:px-20 p-4">
          <div>
            <label className="hidden" htmlFor="expertise">
              Expertise
            </label>
            <select
              name="expertise"
              id="expertise"
              className="bg-gray-300 px-4 py-2 rounded-md"
              value={filters.expertise}
              onChange={handleChanges}
            >
              <option value="all">Expertise</option>
              <option value="cardiologist">Cardiologist</option>
              <option value="dermatologist">Dermatologist</option>
              <option value="neurologist">Neurologist</option>
              <option value="pediatrician">Pediatrician</option>
              <option value="psychiatrist">Psychiatrist</option>
            </select>
          </div>

          <div>
            <label className="hidden" htmlFor="gender">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="bg-gray-300 px-4 py-2 rounded-md"
              value={filters.gender}
              onChange={handleChanges}
            >
              <option value="all">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="hidden" htmlFor="fees">
              Fees
            </label>
            <select
              name="fees"
              id="fees"
              className="bg-gray-300 px-4 py-2 rounded-md"
              value={filters.fees}
              onChange={handleChanges}
            >
              <option value="all">Fess</option>
              <option value="Rs.0-Rs.500">Rs.0-Rs.500</option>
              <option value="Rs.500-Rs.1000">Rs.500-Rs.1000</option>
              <option value="Rs.1000-Rs.1500">Rs.1000-Rs.1500</option>
              <option value="Rs.1500-Rs.2000">Rs.1500-Rs.2000</option>
            </select>
          </div>

          <div>
            <label className="hidden" htmlFor="lang">
              Language
            </label>
            <select
              name="lang"
              id="lang"
              className="bg-gray-300 px-4 py-2 rounded-md"
              value={filters.lang}
              onChange={handleChanges}
            >
              <option value="all">Language</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
            </select>
          </div>

          <div>
            <label className="hidden" htmlFor="all-filters">
              All Filters
            </label>
            <select
              name="all-filters"
              id="all-filters"
              className="bg-gray-300 px-4 py-2 rounded-md"
            >
              <option value="all">All Filters</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
            </select>
          </div>
        </form>
        <div className="flex justify-end items-center gap-4 mx-auto max-w-screen-lg">
          {Object.entries(filters).map(([key, value]) => (
            <div key={key} className="">
              {value !== "all" && (
                <div className="relative bg-gray-300 py-2 pr-10 pl-4 rounded-full text-lg capitalize">
                  <span>{value}</span>
                  <IoIosClose
                    onClick={() => setFilters({ ...filters, [key]: "all" })}
                    size={26}
                    className="top-1/2 right-2 absolute -translate-y-1/2"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Filters;
