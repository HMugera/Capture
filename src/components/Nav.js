import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { useLocation } from "react-router-dom";

function Nav() {
	const { pathname } = useLocation();
	return (
		<StyledNav>
			<h1>
				<Link to="/" id="logo">
					The Capture Project
				</Link>
			</h1>
			<ul>
				<li>
					<Link to="/">
						{" "}
						<h5>About</h5>
					</Link>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{ width: pathname === "/" ? "50%" : "0%" }}
					/>
				</li>
				<li>
					<Link to="/work">
						<h5>Our Work</h5>
					</Link>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{ width: pathname === "/work" ? "50%" : "0%" }}
					/>
				</li>
				<li>
					<Link to="/contact">
						<h5>Contact Us</h5>
					</Link>
					<Line
						transition={{ duration: 0.75 }}
						initial={{ width: "0%" }}
						animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
					/>
				</li>
			</ul>
		</StyledNav>
	);
}

const StyledNav = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 10rem;
	background: #1b1b1b;
	position: sticky;
	top: 0;
	z-index: 5;
	a {
		color: white;
		text-decoration: none;
	}
	ul {
		display: flex;
		list-style: none;
	}

	#logo {
		font-size: 1.8rem;
		font-family: "Lobster", cursive;
		font-weight: lighter;
	}
	li {
		padding-left: 10rem;
		position: relative;
	}
	@media (max-width: 1300px) {
		flex-direction: column;
		padding: 1rem 1rem;
		#logo {
			display: inline-block;
			margin: 0rem;
		}
		ul {
			padding: 1rem;
			justify-content: space-around;
			width: 100%;
		}
		li {
			padding: 0;
		}
	}
`;

const Line = styled(motion.div)`
	height: 0.3rem;
	background: #23d997;
	width: 0%;
	position: absolute;
	bottom: -80%;
	left: 60%;
	@media (max-width: 1300px) {
		left: 0%;
	}
`;
export default Nav;
