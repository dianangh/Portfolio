import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { sophia, abdalla, adrian } from "../assets";

const SlideTwo = () => {
	return (
		<div className="mt-12 bg-black-100 rounded-[20px]">
			<div
				className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
			>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>What others say</p>
					<h2 className={styles.sectionHeadText}>Recommendations</h2>
				</motion.div>
			</div>
			<div
				className={`${styles.paddingX} pb-14 flex flex-wrap gap-6 object-center flex-row justify-center`}
			>
				<Tilt
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-black-200 ml-[1%] mb-[30%] p-7 mt-5 mb-5 rounded-3xl sm:w-[400px] w-full"
				>
					<p className="text-white font-black text-[48px]">"</p>
					<div className="mt-1">
						<p className="text-white tracking-wider text-[18px]">
							Diana was my junior at HackReactor and she showed great curiosity
							and willingness to learn. The program is mentally grueling and
							time consuming, but she put in the hours above and beyond to
							create full-stack personal projects. Diana will be a great
							resource for any team who gives her the chance to thrive.
						</p>
						<div className="mt-7 flex justify-between items-center gap-1">
							<div className="flex-1 flex flex-col">
								<p className="text-white font-medium text-[16px]">
									<span className="blue-text-gradient">@</span> Sophia Hu
								</p>
								<p className="mt-1 text-secondary text-[12px]">
									Full Stack Engineer
								</p>
							</div>
							<Link
								to="https://www.linkedin.com/in/super-sophia-hu/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={sophia}
									alt="feedback-by-Sophia"
									className="w-10 h-10 rounded-full object-cover"
								/>
							</Link>
						</div>
					</div>
				</Tilt>
				<Tilt
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-black-200 mt-5 p-7 ml-5 mr-5 rounded-3xl sm:w-[400px] w-full"
				>
					<p className="text-white font-black text-[48px]">"</p>
					<div className="mt-1">
						<p className="text-white tracking-wider text-[18px]">
							It was my pleasure to have the opportunity to work alongside Diana
							during our time together at Hack Reactor. Diana is an exceptional
							software developer with excellent technical skills, as well as
							strong communication and teamwork capabilities. As part of our
							team of five for our final project, Diana consistently impressed
							us all with her dedication and effort towards the development of
							our full-stack calorie tracker app. She took the initiative in
							various app component designs and was always willing to lend a
							helping hand to team members who needed it. Her effective
							communication skills were essential to keeping the team informed
							and on track throughout the project. Diana's professionalism,
							dedication, and collaborative approach were instrumental to our
							project's success. I would highly recommend Diana for any software
							development or engineering roles. She is a true team player, and I
							look forward to the opportunity to work with her again in the
							future.
						</p>
						<div className="mt-7 flex justify-between items-center gap-1">
							<div className="flex-1 flex flex-col">
								<p className="text-white font-medium text-[16px]">
									<span className="blue-text-gradient">@</span> Abdalla Modawi
								</p>
								<p className="mt-1 text-secondary text-[12px]">
									Full Stack Software Engineer
								</p>
							</div>
							<Link
								to="https://www.linkedin.com/in/abdallamodawi/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={abdalla}
									alt="feedback-by-Abdalla"
									className="w-10 h-10 rounded-full object-cover"
								/>
							</Link>
						</div>
					</div>
				</Tilt>
				<Tilt
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-black-200 ml-5 mt-5 mb-[30%] p-7 rounded-3xl sm:w-[400px] w-full"
				>
					<p className="text-white font-black text-[48px]">"</p>
					<div className="mt-1">
						<p className="text-white tracking-wider text-[18px]">
							I had the pleasure of working with Diana on a full-stack web
							application during our time at Hack Reactor. She was a good
							communicator and a great problem-solver when it came to debugging
							code. Her collaboration skills and attention to detail were
							invaluable. Diana is always willing to go above and beyond to
							ensure the success of a project. She always maintained a cheerful
							attitude and a strong work ethic. Diana will be more than capable
							of completing any project or job she is considering.
						</p>
						<div className="mt-7 flex justify-between items-center gap-1">
							<div className="flex-1 flex flex-col">
								<p className="text-white font-medium text-[16px]">
									<span className="blue-text-gradient">@</span> Adrian Olivares
								</p>
								<p className="mt-1 text-secondary text-[12px]">
									Software Engineer
								</p>
							</div>
							<Link
								to="https://www.linkedin.com/in/adrian-olivares-cruz/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={adrian}
									alt="feedback-by-Adrian"
									className="w-10 h-10 rounded-full object-cover"
								/>
							</Link>
						</div>
					</div>
				</Tilt>
			</div>
		</div>
	);
};

export default SectionWrapper(SlideTwo, "feedbackOne");
