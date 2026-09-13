import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import type { ITechnology } from "../type/Types";
import { FaCheck, FaStar } from "react-icons/fa";

interface ITechnologyCardProps {
  technology: ITechnology;

  isSelected: boolean;

  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechnologyCard = ({
  technology,
  isSelected,
  setSelectedTechnologies,
}: ITechnologyCardProps) => {

  const handleAddToStack = () => {
    if (isSelected) {
      return;
    }

    setSelectedTechnologies((prev) => [
      ...prev,
      technology,
    ]);
    toast.success(`${technology.name} selected!`);
  };

  return (
    <div
      className={`card bg-base-100 shadow-sm transition-all duration-200 ${isSelected
        ? "border-2 border-pink-500 shadow-md"
        : "border border-gray-200 hover:border-gray-300"
        }`}
    >
      <div className="card-body p-5">

        <div className="flex justify-between items-start h-14">
          <div className="w-12 h-12 rounded-lg flex items-center justify-center">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-10 h-10 object-contain"
            />
          </div>

          <span className="badge badge-info badge-outline text-xs">
            {technology.badge}
          </span>
        </div>


        <h2 className="card-title text-xl mt-2">
          {technology.name}
        </h2>

        <p className="text-gray-500 text-sm min-h-16">
          {technology.description}
        </p>

        <div className="border-t border-gray-200"></div>

        <div className="flex justify-between items-center mt-3 gap-2">
          <span className="badge badge-ghost text-xs">
            {technology.category}
          </span>

          <span className="text-gray-500 text-xs">
            {technology.difficulty}
          </span>

          <span className="flex items-center gap-2 font-semibold text-xs">
            <FaStar className="text-yellow-400" /> {technology.rating}
          </span>
        </div>

        <div className="card-actions mt-4">
          <button
            onClick={handleAddToStack}
            disabled={isSelected}
            className={`btn w-full text-sm ${isSelected
                ? "bg-pink-500 text-white border-pink-500"
                : "bg-black text-white hover:bg-gray-800"
              }`}
          >
            {isSelected ? (
              <div className="flex w-full items-center gap-2 justify-center">
                <FaCheck />
                <span>Added to Stack</span>
              </div>
            ) : (
              "Add to Stack"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;