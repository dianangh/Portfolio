import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";
import { RxDotFilled } from "react-icons/rx";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

import Slide from "./Slide";
import SlideOne from "./SlideOne"
import SlideTwo from "./SlideTwo";

const slides = [
  <Slide />,
  <SlideOne />,
  <SlideTwo />,

]
const FeedbackCard = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};

	return (
		<div
      className="max-w-[1400px] h-[1180px] w-full m-auto py-16 px-4 relative"
    >
			<div
				style={{
					backgroundImage: `url(${slides[currentIndex].recommendation})`,
				}}

			>
        <Tilt
					options={{
						max: 45,
						scale: 1,
						speed: 450,
					}}
					className="bg-black-200 p-7 ml-20 mt-5 mb-5 rounded-3xl sm:w-[400px] w-full"
				>
					<p className="text-white font-black text-[48px]">"</p>
					<div className="mt-1">
						<p className="text-white tracking-wider text-[18px]">
							{slides[currentIndex].recommendation}
						</p>
						<div className="mt-7 flex justify-between items-center gap-1">
							<div className="flex-1 flex flex-col">
								<p className="text-white font-medium text-[16px]">
									<span className="blue-text-gradient">@</span>{" "}
									{slides[currentIndex].name}
								</p>
								<p className="mt-1 text-secondary text-[12px]">
									{slides[currentIndex].designation}
								</p>
							</div>
							<a
								href={slides[currentIndex].linkedin}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									src={slides[currentIndex].image}
									alt={`feedback-by-${slides[currentIndex].name}`}
									className="w-10 h-10 rounded-full object-cover"
								/>
							</a>
						</div>
					</div>
				</Tilt>
			</div>
			{/* Navigation buttons and dots */}

			<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactLeft onClick={prevSlide} size={30} />
			</div>
			<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
				<BsChevronCompactRight onClick={nextSlide} size={30} />
			</div>
			<div className="flex top-4 justify-center py-2">
				{slides.map((slide, slideIndex) => (
					<div
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
						className="text-2xl cursor-pointer"
					>
						<RxDotFilled />
					</div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(FeedbackCard, "feedbackCard");

// const Feedbacks = () => {
// 	const [currentIndex, setCurrentIndex] = useState(0);

// 	const prevSlide = () => {
// 		const isFirstSlide = currentIndex === 0;
// 		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
// 		setCurrentIndex(newIndex);
// 	};

// 	const nextSlide = () => {
// 		const isLastSlide = currentIndex === slides.length - 1;
// 		const newIndex = isLastSlide ? 0 : currentIndex + 1;
// 		setCurrentIndex(newIndex);
// 	};

// 	const goToSlide = (slideIndex) => {
// 		setCurrentIndex(slideIndex);
// 	};

// 	return (
// 		<div className="max-w-[1400px] h-[1180px] w-full m-auto py-16 px-4 relative">
// 			<div
// 				style={{
// 					backgroundImage: `url(${slides[currentIndex].recommendation})`,
// 				}}
// 				className="${styles.padding} h-full bg-center bg-black-100 p-7 rounded-3xl  w-full"
// 			>
// 				<Tilt
// 					options={{
// 						max: 45,
// 						scale: 1,
// 						speed: 450,
// 					}}
// 					className="bg-black-200 p-7 ml-20 mt-5 mb-5 rounded-3xl sm:w-[400px] w-full"
// 				>
// 					<p className="text-white font-black text-[48px]">"</p>
// 					<div className="mt-1">
// 						<p className="text-white tracking-wider text-[18px]">
// 							{slides[currentIndex].recommendation}
// 						</p>
// 						<div className="mt-7 flex justify-between items-center gap-1">
// 							<div className="flex-1 flex flex-col">
// 								<p className="text-white font-medium text-[16px]">
// 									<span className="blue-text-gradient">@</span>{" "}
// 									{slides[currentIndex].name}
// 								</p>
// 								<p className="mt-1 text-secondary text-[12px]">
// 									{slides[currentIndex].designation}
// 								</p>
// 							</div>
// 							<a
// 								href={slides[currentIndex].linkedin}
// 								target="_blank"
// 								rel="noopener noreferrer"
// 							>
// 								<img
// 									src={slides[currentIndex].image}
// 									alt={`feedback-by-${slides[currentIndex].name}`}
// 									className="w-10 h-10 rounded-full object-cover"
// 								/>
// 							</a>
// 						</div>
// 					</div>
// 				</Tilt>
// 			</div>
// 			{/* Navigation buttons and dots */}

// 			<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
// 				<BsChevronCompactLeft onClick={prevSlide} size={30} />
// 			</div>
// 			<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
// 				<BsChevronCompactRight onClick={nextSlide} size={30} />
// 			</div>
// 			<div className="flex top-4 justify-center py-2">
// 				{slides.map((slide, slideIndex) => (
// 					<div
// 						key={slideIndex}
// 						onClick={() => goToSlide(slideIndex)}
// 						className="text-2xl cursor-pointer"
// 					>
// 						<RxDotFilled />
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
