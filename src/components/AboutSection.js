import React from "react";
import home1 from "../img/home1.png";

import { Wrapper, Description, Image, Hide } from "../styles";
function AboutSection() {
	return (
		<Wrapper>
			<Description>
				<div className="title">
					<Hide>
						<h2>Let us help you capture </h2>
					</Hide>
					<Hide>
						<h2>
							your best <span>memories </span>
						</h2>
					</Hide>
					<Hide>
						<h2>forever.</h2>
					</Hide>
				</div>
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
