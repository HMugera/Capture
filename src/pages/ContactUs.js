import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import pintrest from "../img/pintrest.png";
import gmail from "../img/gmail.png";
import instagram from "../img/instagram.png";

function ContactUs() {
	return (
		<ContactStyle
			variants={pageAnimation}
			exit="exit"
			initial="hidden"
			animate="show"
			style={{ background: "#fff" }}
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Get in touch</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnim}>
						<SocialIcon>
							<img src={gmail} alt="" />
						</SocialIcon>
						<h2>Send us an email</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<SocialIcon>
							<img src={facebook} alt="" />
						</SocialIcon>
						<h2>Follow us on facebook</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<SocialIcon>
							<img src={pintrest} alt="" />
						</SocialIcon>
						<h2>Follow us on pintrest</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<SocialIcon>
							<img src={instagram} alt="" />
						</SocialIcon>
						<h2>Follow us on instagram</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<SocialIcon>
							<img src={twitter} alt="" />
						</SocialIcon>
						<h2>Follow us on twitter</h2>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	);
}

const ContactStyle = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
	@media (max-width: 1300px) {
		padding: 2rem;
		font-size: 1rem;
	}
`;

const Title = styled.div`
	margin-bottom: 2rem;
	color: black;
	@media (max-width: 1300px) {
		margin-top: 5rem;
	}
`;

const Hide = styled.div`
	overflow: hidden;
`;

const SocialIcon = styled.div`
	border-radius: 20%;
	width: 3rem;
	height: 3rem;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: center;
	}
`;
const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 1.5rem;
		font-size: 2rem;
	}
`;

export default ContactUs;
