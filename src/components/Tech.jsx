import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { languagesTech, frontEndTech, backEndTech, toolsTech } from "../constants";
import { fadeIn } from "../utils/motion";

export const ServiceCard = ({ index, name, icon }) => {
	return (
		<Tilt className="xs:w-[9rem] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full green-pink-gradient p-[1px] rounded-[20px]
        shadow-card"
			>
				<div
					options={{
						max: 40,
						scale: 0.5,
						speed: 450,
					}}
					className="cards bg-tertiary rounded-[25px]
          py-5 px-12 flex justify-evenly items-center flex-col"
				>
					<img src={icon} alt={name} className="w-15 h-15 object-contain" />
					<h3 className="text-white text-[15px] font-bold text-center">
						{name}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};

const Tech = () => {
  return (
		<>
			<div>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>Technologies I am using</p>
					<h2 className={styles.sectionHeadText}>Tech Stack</h2>
				</motion.div>
			</div>
			<h2 className="flex flex-row w-min-[250px] flex-wrap text-[1.5rem] justify-center mt-8 gap-10">
				Languages
			</h2>
			<div className="mt-5 flex flex-wrap gap-8 object-center flex-row justify-center">
				{languagesTech.map((language, index) => (
					<ServiceCard key={language.name} index={index} {...language} />
				))}
			</div>
			<h2 className="flex flex-row flex-wrap text-[1.5rem] justify-center mt-8 gap-10">
				Frontend
			</h2>
			<div className="mt-5 flex flex-wrap gap-10 object-center flex-row justify-center">
				{frontEndTech.map((frontend, index) => (
					<ServiceCard key={frontend.name} index={index} {...frontend} />
				))}
			</div>
			<h2 className="flex flex-row flex-wrap text-[1.5rem] justify-center mt-16 gap-10">
				Backend
			</h2>
			<div className="mt-5 flex flex-wrap gap-10 object-center flex-row justify-center">
				{backEndTech.map((backend, index) => (
					<ServiceCard key={backend.name} index={index} {...backend} />
				))}
			</div>
			<h2 className="flex flex-row flex-wrap text-[1.5rem] justify-center mt-16 gap-10">
				Tools
			</h2>
			<div className="mt-5 flex flex-wrap gap-8 object-center flex-row justify-center">
				{toolsTech.map((tools, index) => (
					<ServiceCard key={tools.name} index={index} {...tools} />
				))}
			</div>
		</>
	);
}

export default SectionWrapper(Tech, "tech");
