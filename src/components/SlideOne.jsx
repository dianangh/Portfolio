import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import {
	mico,
	ali,
	brian,
} from "../assets";

const SlideOne = () => {
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
					className="bg-black-200 ml-[1%] p-7 mt-5 mb-5 rounded-3xl sm:w-[400px] w-full"
				>
					<p className="text-white font-black text-[48px]">"</p>
					<div className="mt-1">
						<p className="text-white tracking-wider text-[18px]">
							I had the pleasure of working with Diana who is a talented
							developer with a strong drive to understand everything she works
							on. She communicates her ideas clearly and effectively and
							responded to criticism with open arms. She's incredibly
							hardworking and has a serious nack for design. I highly recommend
							Diana not only as a developer but an amazing teammate to work with
							who holds responsibility for her work. She's also incredibly kind,
							and anyone would be lucky to have her on their team!
						</p>
						<div className="mt-7 flex justify-between items-center gap-1">
							<div className="flex-1 flex flex-col">
								<p className="text-white font-medium text-[16px]">
									<span className="blue-text-gradient">@</span> Mico Hernandez
								</p>
								<p className="mt-1 text-secondary text-[12px]">
									Full Stack Software Engineer
								</p>
							</div>
							<Link
								to="https://www.linkedin.com/in/mico-hernandez/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={mico}
									alt="feedback-by-Ali"
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
							I had the pleasure of working with Diana as part of a team of 5
							for our Hack Reactor Advanced Software Engineering Certification
							final project where we developed a full-stack calorie tracker app.
							Diana consistently gave 100% effort to the team by taking
							responsibility and initiative on various app component designs and
							through effective communication. She took the time to help
							team-members along the way and be involved with issue tracking,
							making sure we all succeed together. I would love to work with
							Diana again and would highly recommend her for her excellent
							communication skills, teamwork capabilities, and technical skills
							in software development.
						</p>
						<div className="mt-7 flex justify-between items-center gap-1">
							<div className="flex-1 flex flex-col">
								<p className="text-white font-medium text-[16px]">
									<span className="blue-text-gradient">@</span> Ali Bhatti
								</p>
								<p className="mt-1 text-secondary text-[12px]">
									Full Stack Software Engineer
								</p>
							</div>
							<Link
								to="https://www.linkedin.com/in/malibhatti/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={ali}
									alt="feedback-by-Emily"
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
					className="bg-black-200 ml-5  mt-5 mb-5 p-7 rounded-3xl sm:w-[500px] w-full"
				>
					<p className="text-white font-black text-[48px]">"</p>
					<div className="mt-1">
						<p className="text-white tracking-wider text-[18px]">
							I had the pleasure of working with Diana in creating our capstone
							project called Calories Planner. From the beginning, Diana showed
							off her creativity and helped spearhead the conceptualization and
							design of our project. Diana is also a go-getter. If she didn't
							understand something today she would work hard to understand it
							and come back the next day with a solution. What really sets Diana
							apart from others is her exceptional design skills on the
							frontend. She has a keen eye for design and is able to create
							visually appealing and highly user-friendly interfaces that stand
							out from the crowd. Her attention to detail and her commitment to
							delivering high-quality work made her a valuable asset to our
							team. Diana's ability to work collaboratively with others was
							another strength. She was a great teammate and was always making
							sure everyone was on the same page helping wherever possible. She
							was always willing to listen to other's ideas and to provide
							constructive feedback to help them improve their work. Her
							positive attitude and strong work ethic made her a pleasure to
							work with.
						</p>
						<div className="mt-7 flex justify-between items-center gap-1">
							<div className="flex-1 flex flex-col">
								<p className="text-white font-medium text-[16px]">
									<span className="blue-text-gradient">@</span> Brian Vazquez
								</p>
								<p className="mt-1 text-secondary text-[12px]">
									Software Engineer
								</p>
							</div>
							<Link
								to="https://www.linkedin.com/in/brian-vazquez-343510239/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={brian}
									alt="feedback-by-Brian"
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

export default SectionWrapper(SlideOne, "feedbackOne");
