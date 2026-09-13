
import Banner from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="mx-auto w-full max-w-7xl px-4">
            <div className="min-h-[400px] py-10 flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:justify-between">

                <div className="w-full text-center lg:w-1/2 lg:text-left">

                    <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                        Build Your Ideal
                        <br />
                        <span className="font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                            Development Stack
                        </span>
                    </h1>

                    <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base">
                        Explore frontend, backend, database, and tooling options,
                        <br className="hidden sm:block" />
                        compare them side by side, and put together the stack
                        <br className="hidden sm:block" />
                        that fits your next project.
                    </p>

                    <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

                        <button className="btn btn-lg rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 font-bold text-white">
                            Explore Technology
                        </button>

                        <button className="btn btn-lg rounded-xl font-bold">
                            Learn More
                        </button>

                    </div>
                </div>

                <div className="flex w-full justify-center lg:w-1/2">
                    <img
                        src={Banner}
                        alt="DevStack Banner"
                        className="w-full max-w-sm object-contain sm:max-w-md"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
