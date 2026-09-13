import { use } from "react";

import type { Dispatch, SetStateAction } from "react";

import type { ITechnology } from "../type/Types";

import AvailabaleTechnology from "./AvailabaleTechnology";
import TechnologyCard from "./TechnologyCard";

interface TechnologyProps {
  technologyPromise: Promise<ITechnology[]>;

  selectedTechnologies: ITechnology[];

  setSelectedTechnologies: Dispatch<SetStateAction<ITechnology[]>>;
}

const Technology = ({
  technologyPromise,
  selectedTechnologies,
  setSelectedTechnologies,
}: TechnologyProps) => {
  const technologys = use(technologyPromise);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 mb-20">
      <div className="mb-8">
        <h1 className="font-bold text-3xl md:text-4xl">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>

        <p className="text-gray-500 mt-2">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {technologys.map((technology) => {
              const isSelected = selectedTechnologies.some(
                (selectedTechnology) =>
                  selectedTechnology.id === technology.id
              );

              return (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={isSelected}
                  setSelectedTechnologies={setSelectedTechnologies}
                />
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-1">
          <AvailabaleTechnology
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;