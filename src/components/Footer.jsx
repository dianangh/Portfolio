import React, { useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";
import { linkedin } from "../assets";
import { github, gitlab } from "../assets";
import { resumeimg } from "../assets";

const Footer = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<div className="flex flex-wrap">
			<footer className="w-full sticky bg-primary mt-0 mb-0">
				<div className="flex flex-col md:flex-row md:items-center justify-center gap-y-2 bg-primary text-center md:justify-between pb-4">
					{/* <ul className="hidden md:flex flex-wrap items-center gap-y-2 gap-x-6 mr-4">
						<li>
							<Link
								as="a"
								to="/about"
								color="black"
								className="font-light transition-colors text-[25px]  focus:text-orange-500 hover:text-orange-600"
							>
								About Us
							</Link>
						</li>
						<li>
							<Link
								as="a"
								to="/contact"
								color="black"
								className="font-light mr-5 text-[25px]transition-colors  focus:text-orange-500 hover:text-orange-600"
							>
								Contact Us
							</Link>
						</li>
					</ul>
					<div className="md:hidden flex flex-wrap items-center justify-center gap-y-2 gap-x-6 mb-4">
						<Link
							as="a"
							to="/about"
							color="black"
							className="font-normal transition-colors  focus:text-orange-500 hover:text-orange-600"
						>
							About Us
						</Link>
						<Link
							as="a"
							to="/contact"
							color="black"
							className="font-normal transition-colors  focus:text-orange-500 hover:text-orange-600"
						>
							Contact Us
						</Link>
					</div> */}
					<div className=" flex justify-between max-w-7xl mx-auto">
						<div className="navbar-logos flex justify-center items-center">
							<Link
								to="https://gitlab.com/dangaritaho"
								target="_blank"
								rel="noopener noreferrer"
								className="mr-2"
							>
								<img src={gitlab} alt="gitlab" className="h-9" />
							</Link>
							<Link
								to="https://github.com/dianangh"
								target="_blank"
								rel="noopener noreferrer"
								className="mr-2 items-center"
							>
								<img src={github} alt="github" className="h-9 object-cover" />
							</Link>
							<Link
								to="https://www.linkedin.com/in/diana-angaritah/"
								target="_blank"
								rel="noopener noreferrer"
								className="mr-2"
							>
								<img
									src={linkedin}
									alt="linkedin"
									className="h-7 object-cover"
								/>
							</Link>
							<Link
								to="https://docs.google.com/document/d/1gVaZata6p05PyGIaLgrRJX8CE8CGCOUbm2hbcsf6XUM/edit?usp=sharing"
								target="_blank"
								rel="noopener noreferrer"
								className="mr-2"
							>
								<img
									src={resumeimg}
									alt="resume-img"
									className="h-7 object-cover"
								/>
							</Link>
							<div className="sm:hidden flex flex-1 justify-end items-center">
								<img
									src={toggle ? close : menu}
									alt="menu"
									className="w-[28px] h-[28px]
              object-contain cursor-pointer"
									onClick={() => setToggle(!toggle)}
								/>
							</div>
							<div
								className={`${
									!toggle ? "hidden" : "flex"
								} p-6 black-gradient absolute
            top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
							>
								<ul className="list-none flex justify-end items-start flex-col gap-4">
									{navLinks.map((link) => (
										<li
											key={link.id}
											className={`${
												active === link.title ? "text-white" : "text-secondary"
											} font-poppins font-medium cursor-pointer text-[16px]`}
											onClick={() => {
												setToggle(!toggle);
												setActive(link.title);
											}}
										>
											<a href={`#${link.id}`}>{link.title}</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full max-w-screen-xl mx-auto">
					<div
						color="black"
						className="mx-auto text-center text-[20px] md:justify-between font-light items-center mb-4"
					>
						&copy; 2023 Diana Angarita™. All rights reserved.
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
