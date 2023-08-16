/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				taskdCardColor: "#d9f2ff",
				completedTaskdCardColor: "#dfebed",
				taskdCardBorderColor: "#1e549f",
				completedTaskdCardBorderColor: "#73b1c1",
				taskdCardDescriptionColor: "#bdbbb6",
			},
		},
	},
	plugins: [],
};
