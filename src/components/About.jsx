import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services} from '../constants/index';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

export const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px]
        shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain"/>
          <h3 className="text-white text-[20px] font-bold text-center" >
            {title}
          </h3>
        </div>
      </motion.div>
      </Tilt>
  )
}

const About = () => {
  return (
		<div className='experience'>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Experience</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="xs:mt-10 mt-4 lg:mt-4 text-secondary flex flex-wrap text-[26px] gap-10 object-center flex-row justify-center"
			>
				I have experience developing full-stack software applications using
				popular programming languages such as JavaScript, and Python, and
				expertise in frameworks like React, Django, fastAPI, React, Redux tool
				kit, Three.js. I'm a quick learner, value teamwork, and am willing to
				help others when needed and adapt to new technologies to stay current
				with industry trends. One of my key strengths as a developer is my
				ability to think outside the box and find creative solutions to
				challenging problems. I'm not afraid to take risks and try new
				approaches, and I always seek to improve and refine my skills to deliver
				high-quality software solutions.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10 object-center flex-row justify-center">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</div>
	);
}

export default SectionWrapper(About, "about")
