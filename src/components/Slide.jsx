import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { recommendations } from "../constants";
import {
	emily,
	mico,
	paula,
	shaun,
	sophia,
	brian,
	ali,
	abdalla,
	adrian,
} from "../assets";

const Feedbacks = () => {
	return (
		<div className="bg-black-100 rounded-[20px]">
			<div
				className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
			>
				<motion.div variants={textVariant()}>
					<p className={styles.sectionSubText}>What others say</p>
					<h2 className={styles.sectionHeadText}>Recommendations</h2>
				</motion.div>
			</div>
			<div
				className={`${styles.paddingX} ml[-20%] mt-20 pb-14 flex flex-wrap gap-6 object-center flex-row justify-center`}
			>
				<Tilt
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-black-200 p-7 ml-[0rem] mt-5 mb-5 rounded-3xl sm:w-[400px] w-full"
				>
					<p className="text-white font-black text-[48px]">"</p>
					<div className="mt-1">
						<p className="text-white tracking-wider text-[18px]">
							Diana and I were able to work together on one of our paired
							projects during Hack Reactor's Software Immersive program, and I
							felt very lucky to get to collaborate with Diana. Diana has a
							great work ethic and is calm but persistent when debugging and
							problem-solving. She is quite organized with great time management
							skills that help keep her team members on track with completing
							tasks and meeting deadlines. Diana's exceptional communication
							skills and positive attitude make her a pleasure to work with,
							especially in the face of challenges. I have no doubt that Diana
							will continue to excel in her journey as a software engineer. Any
							team would be lucky to have Diana as a member.
						</p>
						<div className="mt-7 flex justify-between items-center gap-1">
							<div className="flex-1 flex flex-col">
								<p className="text-white font-medium text-[16px]">
									<span className="blue-text-gradient">@</span> Emily Arai
								</p>
								<p className="mt-1 text-secondary text-[12px]">
									Software Engineer
								</p>
							</div>
							<Link
								to="https://www.linkedin.com/in/emily-arai/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={emily}
									alt="feedback-by-Emily"
									className="w-14 h-14 rounded-full object-cover"
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
					className="bg-black-200 mt-5 p-7 ml-12 rounded-3xl sm:w-[400px] w-full"
				>
					<p className="text-white font-black text-[48px]">"</p>
					<div className="mt-1">
						<p className="text-white tracking-wider text-[18px]">
							Diana is an asset to any team. She is smart, curious, and humble
							which makes her able to always learn from others without any ego.
							She is also incredibly generous and patient to teach and share any
							knowledge and resources she can provide others. She is a tenacious
							problem solver, with a keen eye for spotting a bug. It has been
							such a pleasure working alongside her. She is kind, driven, and
							incredibly hard-working. She inspires me to do my best work every
							day.
						</p>
						<div className="mt-7 flex justify-between items-center gap-1">
							<div className="flex-1 flex flex-col">
								<p className="text-white font-medium text-[16px]">
									<span className="blue-text-gradient">@</span> Paula Mejia
								</p>
								<p className="mt-1 text-secondary text-[12px]">
									Full Stack Software Engineer
								</p>
							</div>
							<Link
								to="https://www.linkedin.com/in/paula-natalia-mejia/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={paula}
									alt="feedback-by-Paula"
									className="w-14 h-14 rounded-full object-cover"
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
					className="bg-black-200 ml-10 mr-17 mt-5 p-7 rounded-3xl sm:w-[400px] w-full"
				>
					<p className="text-white font-black text-[48px]">"</p>
					<div className="mt-1">
						<p className="text-white tracking-wider text-[18px]">
							During our time together at Hack Reactor's Software Engineering
							Immersive program, I witnessed first-hand her fervor for improving
							herself by relentlessly tackling new concepts and technologies
							with confidence. Her ability to always find new and interesting
							questions about the topics at hand demonstrates her creative
							thinking and her capacity to grow. As a collaborator, she always
							finds time to share useful and unique resources that benefits the
							entire group. She's responsible with her time and priorities, and
							always aims to deliver the highest quality work. I have zero
							doubts that any future team she joins will be grateful for what
							she brings to the table.
						</p>
						<div className="mt-7 flex justify-between items-center gap-1">
							<div className="flex-1 flex flex-col">
								<p className="text-white font-medium text-[16px]">
									<span className="blue-text-gradient">@</span> Shaun Ragasa
								</p>
								<p className="mt-1 text-secondary text-[12px]">
									Full Stack Software Engineer
								</p>
							</div>
							<Link
								to="https://www.linkedin.com/in/shaunragasa/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={shaun}
									alt="feedback-by-Shaun"
									className="w-14 h-14 rounded-full object-cover"
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
					className="bg-black-200 ml-5  mt-5 mb-5 p-7 rounded-3xl sm:w-[450px] w-full"
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
			</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "feedback");
