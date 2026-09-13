
import React from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-base-100 shadow-sm">
            <div className="mx-auto w-full max-w-7xl px-4">
                <div className="navbar min-h-16 bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    aria-label="Menu"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>

                            <ul
                                tabIndex={-1}
                                className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-box bg-base-100 p-2 shadow-lg"
                            >
                                <li>
                                    <a href="#home">Home</a>
                                </li>

                                <li>
                                    <a href="#technologies">Technologies</a>
                                </li>

                                <li>
                                    <a href="#projects">Projects</a>
                                </li>

                                <li>
                                    <a href="#about">About</a>
                                </li>

                                <li>
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>

                        </div>

                        <a
                            href="#home"
                            className="ml-1 flex items-center sm:ml-2"
                        >
                            <img
                                src={logo}
                                alt="DevStack Logo"
                                className="w-28 sm:w-32 lg:w-36"
                            />
                        </a>

                    </div>

                    <div className="navbar-center hidden lg:flex">

                        <ul className="flex items-center gap-6 xl:gap-8">

                            <li>
                                <a
                                    href="#home"
                                    className="font-medium transition hover:text-purple-500"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#technologies"
                                    className="font-medium transition hover:text-purple-500"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="font-medium transition hover:text-purple-500"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    className="font-medium transition hover:text-purple-500"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="font-medium transition hover:text-purple-500"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </div>

                    <div className="navbar-end gap-1 sm:gap-2">

                        <button
                            className="btn btn-ghost px-2 text-sm font-bold sm:px-4 sm:text-base"
                        >
                            Sign In
                        </button>


                        <button
                            className="btn rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-3 text-sm font-bold text-white sm:px-5 sm:text-base"
                        >
                            Sign Up
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Navbar;
