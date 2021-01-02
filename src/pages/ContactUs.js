import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, fade } from "../animation";
import styled from "styled-components";

import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import pintrest from "../img/pintrest.png";
import gmail from "../img/gmail.png";
import instagram from "../img/instagram.png";
import phone from "../img/phone.png";
import location from "../img/location.png";

import { Wrapper } from "../styles";
function ContactUs() {
	return (
		<ContactStyle
			variants={pageAnimation}
			exit="exit"
			initial="hidden"
			animate="show"
		>
			<Hide>
				<ContactWrapper variants={fade}>
					<div>
						<ContactForm>
							<MessageTitle>
								{" "}
								<Hide>
									<motion.h4>
										<span>Send </span>Us a <span>Message </span>
									</motion.h4>
								</Hide>
							</MessageTitle>
							<Hide>
								<ContactBox>
									<InputBox>
										<label htmlFor="firstname">First Name</label>
										<input type="text" name="firstname" required />
									</InputBox>
									<InputBox>
										<label htmlFor="lastname">Last Name</label>
										<input type="text" name="lastname" required />
									</InputBox>
									<InputBox>
										<label htmlFor="mobile">Mobile</label>
										<input type="number" name="mobile" required />
									</InputBox>
									<InputBox>
										<label htmlFor="email">Your Email address</label>
										<input type="email" name="email" required />
									</InputBox>
									<MessageBox>
										<label htmlFor="message">Write your message here ...</label>
										<textarea name="" required></textarea>
									</MessageBox>
									<div>
										<button>Send</button>
									</div>
								</ContactBox>
							</Hide>
						</ContactForm>
					</div>
					<div>
						<ContactInfo>
							<div>
								<ContactTitle>
									<Hide>
										<motion.h4>
											Get in <span>touch</span> with us
										</motion.h4>
									</Hide>
								</ContactTitle>
								<Info>
									<li>
										<Icon>
											<img src={location} alt="location" />
										</Icon>
										<span>Eldoret .Ke 03-30100</span>
									</li>
									<li>
										<Icon>
											<img src={gmail} alt="mail" />
										</Icon>
										<span>lerem@ipsum.com</span>
									</li>
									<li>
										<Icon>
											<img
												style={{ filter: "invert(1)" }}
												src={phone}
												alt="phone"
											/>
										</Icon>
										<span>254-710-000-000</span>
									</li>
								</Info>
								<Socials>
									<li>
										<Icon>
											<img src={facebook} alt="" />
										</Icon>
									</li>
									<li>
										<Icon>
											<img src={twitter} alt="" />
										</Icon>
									</li>
									<li>
										<Icon>
											<img src={instagram} alt="" />
										</Icon>
									</li>
									<li>
										<Icon>
											<img src={pintrest} alt="" />
										</Icon>
									</li>
								</Socials>
							</div>
						</ContactInfo>
					</div>
				</ContactWrapper>
			</Hide>
		</ContactStyle>
	);
}

const ContactStyle = styled(Wrapper)`
	padding: 5rem 10rem;
	min-height: 60vh;
	justify-content: center;
	align-items: center;
	@media (max-width: 1300px) {
		padding: 2rem;
		font-size: 1rem;
	}
`;
const ContactWrapper = styled(motion.div)`
	padding: 5rem 5rem 10rem 5rem;
	justify-content: center;
	align-items: center;
	background: #1b1b1b;
	border-radius: 20px;
	display: flex;
	gap: 30px;
	align-items: center;

	@media (max-width: 1300px) {
		gap: 100px;
		font-size: 1rem;
		flex-direction: column;
	}
`;
const MessageTitle = styled.h2`
	color: #fff;
	font-size: 24px;
	font-weight: 800;
`;
const ContactBox = styled(motion.div)`
	position: relative;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-top: 30px;
`;

const ContactForm = styled.div`
	height: 400px;
	width: 600px;
	order: 1;
`;
const InputBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin: 0 0 35px 0;
	width: 47%;
	label {
		align-self: flex-start;
		color: #fff;
		font-weight: bolder;
		font-size: 12px;
	}
	input {
		width: 100% !important;
		margin: 0;
		padding: 10px 0px 5px 0px;
		font-size: 25px;
		font-weight: 300;
		color: #fff;
		background: transparent;
		border: none;
		outline: none;
		border-bottom: 2px solid #777;
	}
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type="number"] {
		-moz-appearance: textfield;
	}
`;
const MessageBox = styled(InputBox)`
	width: 100% !important;
	textarea {
		min-height: 100px;
		width: 100% !important;
		padding: 5px 0;
		resize: none;
		font-size: 20px;
		font-weight: 200;
		color: #fff;
		background: transparent;
		border: none;
		outline: none;
		border-bottom: 2px solid #777;
	}
`;

const ContactTitle = styled.h2`
	color: #fff;
	font-size: 24px;
	font-weight: 500;
`;
const Info = styled.ul`
	position: relative;
	list-style: none;
	display: flex;
	flex-direction: column;
	margin: 20px 0;
	cursor: pointer;
	align-items: flex-start;
	li {
		position: relative;
		list-style: none;
		display: flex;
		margin: 20px 0;
		cursor: pointer;
		align-items: flex-start;

		span {
			margin: 5px 20px;
			color: #fff;
			font-weight: 300;
			font-size: 1.5rem;
			opacity: 0.5;
			&:hover {
				opacity: 1;
			}
		}
	}
`;
const ContactInfo = styled(motion.div)`
	height: 300px;
	width: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Hide = styled.div`
	overflow: hidden;
`;

const Socials = styled.ul`
	position: relative;
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	margin: 20px 0;
	cursor: pointer;
`;
const Icon = styled.div`
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

export default ContactUs;
