import React from 'react';
import myImg from '../images/hero.jpg';
import SectionTitle from './SectionTitle';

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
					My name is Ignacio Avilés, I am 20 years old. I am a computer
					engineering student at the University of Santo Tomas Arica, Chile.
				</p>
				<a
					href="mailto:nacho72001@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					nacho72001@gmail.com
				</a>
			</div>

			<img
				src={myImg}
				alt="Arfan"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About;
