import React from "react";
import home1 from "../img/home1.png";

import { motion } from "framer-motion";
import { Wrapper, Description, Image, Hide } from "../styles";
function AboutSection() {
	//Framer motion variance
	const titleAnim = {
		hidden: { opacity: 0 },
		show: { opacity: 1, transition: { duration: 2 } },
	};

	const container = {
		hidden: { x: 100 },
		show: {
			x: 0,
			transition: {
				duration: 0.75,
				ease: "easeOut",
				staggerChildren: 1,
				// when: "beforeChildren",
			},
		},
	};
	return (
		<Wrapper>
			<Description>
				<motion.div
					className="title"
					variants={container}
					animate="show"
					initial="hidden"
				>
					<Hide>
						<motion.h2 variants={titleAnim}>Let us help you capture </motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>
							your best <span>memories </span>
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2 variants={titleAnim}>forever.</motion.h2>
					</Hide>
				</motion.div>
				<p>
					Contact us for any photography or videography ideas.We have
					professionald with amazing skills
				</p>
				<button>Contact us</button>
			</Description>
			<Image>
				<img src={home1} alt="guy with a camera" />
			</Image>
		</Wrapper>
	);
}

export default AboutSection;
