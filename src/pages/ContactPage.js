import React from "react";
import styled from "styled-components";
import facebook from "../img/facebook.png";
import twitter from "../img/twitter.png";
import pintrest from "../img/pintrest.png";
import gmail from "../img/gmail.png";
import instagram from "../img/instagram.png";
import phone from "../img/phone.png";
import location from "../img/location.png";
import { motion } from "framer-motion";
import { pageAnimation, fade, lineAnim } from "../animation";
import { Wrapper } from "../styles";

function ContactPage() {
	return (
		<ContactStyles variants={fade} exit="exit" initial="hidden" animate="show">
			<FormContainer>
				<Title>
					<Hide>
						<motion.h4>
							Send us a <span>Message</span>
						</motion.h4>
					</Hide>
				</Title>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<form action="">
					<InputContainer>
						<InputCont>
							<label for="fname">First Name</label>
							<input type="text" id="fname" name="firstname" />
						</InputCont>
					</InputContainer>
					<InputContainer>
						<InputCont>
							<label for="lname">Last Name</label>
							<input type="text" id="lname" name="lastname" />
						</InputCont>
					</InputContainer>
					<InputContainer>
						<InputCont>
							<label for="mobile">Mobile</label>
							<input type="number" id="mobile" name="mobile" />
						</InputCont>
					</InputContainer>
					<InputContainer>
						<InputCont>
							<label for="email">Email</label>
							<input type="email" id="email" name="email" />
						</InputCont>
					</InputContainer>
					<InputContainer>
						<InputCont>
							<label for="subject">Write your message here . . .</label>
							<textarea
								id="subject"
								name="subject"
								style={{ height: "150px" }}
							></textarea>
						</InputCont>
					</InputContainer>
				</form>
				<button>Sumbit</button>
			</FormContainer>
			<ContactContainer>
				<ContactInfo>
					<div>
						<Title>
							<Hide>
								<motion.h4>
									Get in <span>touch</span> with us
								</motion.h4>
							</Hide>
						</Title>
						<motion.div variants={lineAnim} className="line"></motion.div>
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
			</ContactContainer>
		</ContactStyles>
	);
}

const ContactStyles = styled(Wrapper)`
	padding: 0rem 10rem;
	min-height: 60vh;
	display: flex;
	gap: 10px;
	justify-content: center;
	align-items: center;
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	@media (max-width: 1300px) {
		padding: 2rem;
		font-size: 1rem;
		flex-direction: column;
	}
`;

const ContactContainer = styled.div`
	width: 80vw;
	padding: 0px 10px;
`;
const FormContainer = styled.div`
	border-radius: 5px;
	background: #1b1b1b;
	padding: 20px;
	width: 80vw;
	margin: 60px auto;
`;
const InputContainer = styled.div`
	margin: 0;
	display: flex;
	flex-direction: column;
	&::after {
		content: "";
		display: table;
		clear: both;
	}
	input,
	textarea {
		color: #fff;
		width: 100%;
		border: none;
		font-weight: 300;
		font-size: 25px;
		padding: 12px;
		border-bottom: 1px solid #fff;
		border-radius: 4px;
		box-sizing: border-box;
		resize: none;
		outline: none;
		background: transparent;
		&:focus {
			outline: none;
		}
	}
	label {
		color: #fff;
		font-size: 15px;
		font-weight: bolder;
	}
`;

const InputCont = styled.div`
	float: left;
	width: 100%;
	margin: 6px 0px;
`;
const ContactInfo = styled(motion.div)`
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
const Title = styled.h2`
	color: #fff;
	font-size: 24px;
	font-weight: 500;
	margin-bottom: 10px;
`;
const Info = styled.ul`
	position: relative;
	list-style: none;
	display: flex;
	flex-direction: column;
	/* margin: 20px 0; */
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
export default ContactPage;
