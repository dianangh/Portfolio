import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";

import { navLinks } from "../constants/index";
import { logo, menu, close } from "../assets";
import { linkedin } from "../assets";
import { github, gitlab } from "../assets";
import { resumeimg } from "../assets";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20
      bg-primary`}
		>
			<div
				className="w-full flex justify-between
      items-center max-w-7xl mx-auto"
			>
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo} alt="logo" className="w-12 h-12 object-contain" />
					<p className="text-white text-[18px] font-bold cursor-pointer w-full flex">
						<span className="sm:block hidden flex">Full-stack Developer</span>
					</p>
				</Link>
				<ul className="navbar list-none hidden sm:flex flex-row gap-4 ml-10 mx-auto">
					{navLinks.map((link) => (
						<li
							key={link.id}
							className={`${
								active === link.title ? "text-white" : "text-white"
							} hover:text-white text-[18px] font-medium cursor-pointer`}
							onClick={() => setActive(link.title)}
						>
							{" "}
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
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
						<img src={linkedin} alt="linkedin" className="h-7 object-cover" />
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
		</nav>
	);
};

export default Navbar;
