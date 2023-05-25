import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { SectionWrapper } from "../hoc";
import { avatar } from '../assets';

const Hero = () => {
  return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
      mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-left items-left mt-5"></div>
				<div className={`${styles.heroSubText} text-[#fefefe]`}>
					<div>
						<h1
							className={`${styles.heroHeadText} main-hero hero mt-7 ml-[-20%] text-black`}
						>
							Hi, I'm{" "}
							<span className="hero name-color text-[#9ddbad]">Diana. </span>
						</h1>
					</div>
					<p
						className={`${styles.heroSubText} main-hero flex text-[#dde0e0] description mt-5 mr-5 ml-[-20%]`}
					>
						I am a full-stack software developer based in Houston, TX, with a
						passion for the front end. When building apps, it’s a priority of
						mine to understand the user’s perspective and needs because,
						ultimately, app adoption and satisfaction depend on understanding
						your audience. <br />
						<br />
						My teammates have consistently highlighted my attention to detail
						and dedication to delivering high-quality work. I truly enjoy the
						sense of accomplishment that comes with troubleshooting and solving
						issues. I also have a deep desire to make a meaningful impact on the
						user experience and contribute to the success of my team, and the
						company as a whole.
						<br />
						<br />
					</p>
					<Link
						to="https://docs.google.com/document/d/1gVaZata6p05PyGIaLgrRJX8CE8CGCOUbm2hbcsf6XUM/edit?usp=sharing"
						target="_blank"
						rel="noopener noreferrer"
					>
						<button className="my-resume-button inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white-900 rounded-xl group bg-gradient-to-br from-[#FF00FF] via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-black-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
							<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-[#13242a] dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
								Resume
							</span>
						</button>
					</Link>
				</div>
				<div className="flex flex-col justify-left items-left mt-5">
					<img
						src={avatar}
						alt="avatar"
						className="w-[150rem] h-[30rem] object-cover rounded-full"
					/>
				</div>
				<div className="absolute xs:bottom-10 bottom-[-5rem] w-full flex justify-center items-center">
				<a href="#about">
					<div
						className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary
          flex justify-center items-start p-2"
					>
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
			</div>

		</section>
	);
}

export default SectionWrapper(Hero, '');
