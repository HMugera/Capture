import React from "react";
//pages
import AboutSection from "../components/AboutSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function HomePage() {
	return (
		<motion.div
			variants={pageAnimation}
			exit="exit"
			initial="hidden"
			animate="show"
		>
			<AboutSection />
			<ServicesSection />
			<FaqSection />
		</motion.div>
	);
}

export default HomePage;
