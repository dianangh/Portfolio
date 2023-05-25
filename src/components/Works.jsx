import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { gitlab } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects, projectsGitlab } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full"
			>
				<div className="relative 2-full h-[230px]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
							onClick={() => window.open(source_code_link, "_blank")}
							className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer"
						>
							<img
								src={gitlab}
								alt="github"
								className="w-1/7 h-1/7 object-contain"
							/>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px]">{description}</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p key={tag.name} className={`text-14[px] ${tag.color}`}>
							#{tag.name}
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};
const Works = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects</h2>
			</motion.div>
			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-4 text-secondary project-description flex flex-wrap  gap-10 object-center flex-row justify-center"
				>
					My projects showcase my journey into the world of software
					development. Through hard work, dedication, and a willingness to
					learn, I have developed the skills and knowledge to create innovative
					applications that solve real-world problems, and manage projects
					effectively. <br />
					Each project demonstrates my ability to work across multiple
					platforms, and programming languages. I aim to showcase my passion for
					software development and demonstrate my ability to create applications
					that will make a real difference in people's lives.
				</motion.p>
			</div>
			<div className="mt-20 flex flex-wrap gap-7 object-center flex-row justify-center">
				{projects.map((project, index) => (
					<ProjectCard
						key={`project-${index}`}
						index={index}
						{...project}
						className="sm:w-[400px]"
					/>
				))}
				{projectsGitlab.map((gitlab, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...gitlab} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "projects");
