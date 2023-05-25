import React from "react";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Models = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have been learning</p>
				<h2 className={styles.sectionHeadText}>3D Animations</h2>
			</motion.div>
			<section className="relative ml-[5%] w-full h-[20rem] mx-auto">
				<ComputersCanvas />
				<p className="mt-2 text-center animation">
					Rotate me!
				</p>
			</section>
		</>
	);
};

export default SectionWrapper(Models, "models");
