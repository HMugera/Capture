import React from "react";
import home1 from "../img/home1.png";
//styled components
import { Wrapper, Description, Image, Hide } from "../styles";
//Framer motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

//wave
import Wave from "./Wave";
import styled from "styled-components";
function AboutSection() {
	return (
		<Wrapper>
			<Description>
				<motion.div className="title">
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
				<motion.p variants={fade}>
					Contact us for any photography or videography ideas.We have
					professionald with amazing skills
				</motion.p>
				<motion.button variants={fade}>Contact us</motion.button>
			</Description>
			<Image>
				<motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
			</Image>
			<Wave />
		</Wrapper>
	);
}

export default AboutSection;
