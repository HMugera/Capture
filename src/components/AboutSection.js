import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";
function AboutSection() {
	return (
		<About>
			<div className="description">
				<div className="title">
					<div className="hide">
						<h2>Let us help you capture </h2>
					</div>
					<div className="hide">
						<h2>
							your and <span>memories </span> and make your
						</h2>
					</div>
					<div className="hide">
						<h2>dreams come true.</h2>
					</div>
				</div>
				<p>
					Contact us for any photography or videography ideas.We have
					professionald with amazing skills
				</p>
				<button>Contact us</button>
			</div>
			<div className="image">
				<img src={home1} alt="guy with a camera" />
			</div>
		</About>
	);
}

const About = styled.div`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
`;

export default AboutSection;
