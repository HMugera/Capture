import React from "react";
import home1 from "../img/home1.png";

import { motion } from "framer-motion";
import { Wrapper, Description, Image, Hide } from "../styles";
function AboutSection() {
	//Framer motion variance

	return (
		<Wrapper>
			<Description>
				<motion.div className="title">
					<Hide>
						<motion.h2>Let us help you capture </motion.h2>
					</Hide>
					<Hide>
						<motion.h2>
							your best <span>memories </span>
						</motion.h2>
					</Hide>
					<Hide>
						<motion.h2>forever.</motion.h2>
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
