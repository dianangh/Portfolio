import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { recommendations } from "../constants";


const FeedbackCard = ({
  index,
  recommendation,
  name,
  designation,
  linkedin,
  image,
}) => (
  <motion.div variants={fadeIn("", "spring", index * 0.5, 0.75)}>
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-black-200 p-7 rounded-3xl sm:w-[400px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">
          {recommendation}
        </p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span> {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">{designation}</p>
          </div>
          <a href={linkedin} target="_blank">
            <img
              src={image}
              alt={`feedback-by-${name}`}
              className="w-10 h-10 rounded-full object-cover"
            />
          </a>
        </div>
      </div>
    </Tilt>
  </motion.div>
);


const Feedbacks = () => {
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
					className={`${styles.paddingX} mt-20 pb-14 flex flex-wrap gap-7 object-center flex-row justify-center`}
				>
					{recommendations.map((recommendation, index) => (
						<FeedbackCard
							key={recommendation.name}
							index={index}
							{...recommendation}
						/>
					))}
				</div>
		</div>
	);
};

export default SectionWrapper(Feedbacks, "feedback");
