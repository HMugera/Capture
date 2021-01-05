import React from "react";
import styled from "styled-components";
import { Wrapper } from "../styles";
import Toggle from "./Toggle";

import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

function FaqSection() {
	const [element, controls] = useScroll();
	return (
		<Faq
			variants={scrollReveal}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<h2>
				Any Questions<span>FAQ</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title="How Do I Start">
					<div className="answer">
						<p>Lorem ipsum dolor sit.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
							nobis.
						</p>
					</div>
				</Toggle>
				<Toggle title="Daily schedule">
					<div className="answer">
						<p>Lorem ipsum dolor sit.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
							nobis.
						</p>
					</div>
				</Toggle>
				<Toggle title="Diffrent payment methods">
					<div className="answer">
						<p>Lorem ipsum dolor sit.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
							nobis.
						</p>
					</div>
				</Toggle>
				<Toggle title="What products do you offer">
					<div className="answer">
						<p>Lorem ipsum dolor sit.</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
							nobis.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</Faq>
	);
}

const Faq = styled(Wrapper)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 2rem;
		font-weight: lighter;
	}
	.faq-line {
		background: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 1rem 0rem;
		}
	}
`;

export default FaqSection;
