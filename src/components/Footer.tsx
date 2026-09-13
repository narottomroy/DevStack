import React from 'react';
import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <div>
            <hr className="border-t border-gray-300 my-6" />

            <div className='mx-auto w-full max-w-7xl px-4 mt-10'>
                <footer className="footer sm:footer-horizontal text-base-content p-10">
                    <aside>
                        <img src={Logo} alt="" />
                        <p>Curated tools, technologies,and resources for developers building <br className='hidden sm:block' /> modern software</p>
                        <div className='flex'>
                            <button className="btn btn-link text-gray-700 font-bold text-decoration-none no-underline">Github</button>
                            <button className="btn btn-link text-gray-700 font-bold text-decoration-none no-underline">Twitter</button>
                            <button className="btn btn-link text-gray-700 font-bold text-decoration-none no-underline">Linkdin</button>
                        </div>
                    </aside>
                    <nav>
                        <h6 className="footer-title">PRODUCT</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Technologies</a>
                        <a className="link link-hover">Projects</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">COMPANY</h6>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Carres</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Terms of Service</a>
                    </nav>
                </footer>
            </div>

            <div className='mx-auto w-full max-w-7xl'>
                <footer className="footer sm:footer-horizontal bg-white text-black-content items-center p-4">
                    <aside className="grid-flow-col items-center">
                        <p>© {new Date().getFullYear()} DevStack All right reserved</p>
                    </aside>
                    <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Terms of Service</a>
                    </nav>
                </footer>
            </div>
        </div>
    );
};

export default Footer;