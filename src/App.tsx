import { Suspense, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Technology from "./components/Technology";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import type { ITechnology } from "./type/Types";

import "./index.css";

function App() {
  const technologyFetch = async (): Promise<ITechnology[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
  };

  const technologyPromise = technologyFetch();

  const [selectedTechnologies, setSelectedTechnologies] = useState < ITechnology[] > ([]);

  return (
    <>
      <main>
        <Navbar />

        <Hero />
        <ToastContainer position="bottom-right" />
        <Suspense
          fallback=
          {
            <div className="min-h-60 flex justify-center items-center">
              <div className="text-center">
                <span className="loading loading-spinner loading-lg"></span>

                <p className="mt-3 text-gray-500">
                  Loading technologies...
                </p>
              </div>
            </div>
          }
        >
          <Technology
            technologyPromise={technologyPromise}
            selectedTechnologies={selectedTechnologies}
            setSelectedTechnologies={setSelectedTechnologies}
          />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;