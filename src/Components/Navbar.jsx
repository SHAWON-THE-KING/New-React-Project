import { useState } from "react";
import Button from "./Button";
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router";



export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#1C1E53]">
            <div className="container">
                <div className="flex justify-between py-8 items-center">
                    {/* Logo */}
                    <a href="#">
                        <img src="/logo.png" alt="Logo" />
                    </a>

                    <button
                        className="md:hidden flex items-center px-3 py-2 text-[#BBBBCB] hover:text-white focus:outline-none"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <FiAlignJustify size={24} color="white" />

                    </button>

                    <div
                        className={`flex-col md:flex-row md:pl-80 md:flex ${menuOpen ? "flex" : "hidden"
                            } md:static absolute left-0 right-0 top-20 bg-[#1C1E53] md:bg-transparent z-10 md:z-auto pl-8`}
                    >
                        <ul className="flex  flex-col md:flex-row gap-8 text-[#BBBBCB]">
                            <li>
                                <NavLink to="/" className="hover:text-white" end>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/About" className="hover:text-white" end>
                                    About us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Features" className="hover:text-white" end>
                                    Features
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Pricing" className="hover:text-white" end>
                                    Pricing
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/FAQ" className="hover:text-white" end>
                                    FAQ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/Blog" className="hover:text-white" end>
                                    Blog
                                </NavLink>
                            </li>

                            {/* Contact button inside menu for mobile */}
                            <li className="md:hidden">
                                <Button>Contact us</Button>
                            </li>
                        </ul>
                    </div>


                    <div className="hidden md:block">
                        <Button>Contact us</Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
