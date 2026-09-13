import type { Dispatch, SetStateAction } from "react";
import { ImCross } from "react-icons/im";
import type { ITechnology } from "../type/Types";
import { toast } from "react-toastify";

interface IAvailableTechnologyProps {
  selectedTechnologies: ITechnology[];

  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const AvailabaleTechnology = ({
  selectedTechnologies,
  setSelectedTechnologies,
}: IAvailableTechnologyProps) => {
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
    toast.error("All technologies removed!");
  };

  const handleRemoveTechnology = (id: number) => {
    const removedTechnology = selectedTechnologies.find(
      (technology) => technology.id === id,
    );

    setSelectedTechnologies((prev) =>
      prev.filter((technology) => technology.id !== id),
    );

    if (removedTechnology) {
      toast.error(`${removedTechnology.name} removed from stack!`);
    }
  };

  return (
    <div className="sticky top-20">
      <div className="card bg-base-100 shadow-sm border border-gray-200">
        <div className="card-body p-5">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="font-bold text-xl">Your Stack</h2>

              <p className="text-xs text-gray-500 mt-1">
                {selectedTechnologies.length} Technologies Selected
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            {selectedTechnologies.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-400 text-sm">
                  No technologies selected yet.
                </p>

                <p className="text-gray-400 text-xs mt-1">
                  Choose technologies from the list.
                </p>
              </div>
            ) : (
              selectedTechnologies.map((technology) => (
                <div
                  key={technology.id}
                  className="flex items-center justify-between gap-3 border border-gray-200 rounded-lg p-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-8 h-8 object-contain"
                    />

                    <div className="min-w-0">
                      <h3 className="font-semibold text-sm truncate">
                        {technology.name}
                      </h3>

                      <p className="text-xs text-gray-400">
                        {technology.category}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => handleRemoveTechnology(technology.id)}
                    className="btn btn-ghost btn-xs text-red-500"
                  >
                    <ImCross />
                  </button>
                </div>
              ))
            )}
          </div>

          {selectedTechnologies.length > 0 && (
            <button
              onClick={handleRemoveAll}
              className="btn btn-outline btn-error btn-sm w-full mt-4"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AvailabaleTechnology;
