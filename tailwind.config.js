/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				// taskdCardColor: "#d9f2ff",
				// completedTaskdCardColor: "#dfebed",
				// taskdCardBorderColor: "#1e549f",
				// completedTaskdCardBorderColor: "#73b1c1",
				// taskdCardDescriptionColor: "#bdbbb6",

				// taskdCardColor: "#1C1C1E",
				// hoverTaskdCardColor: "#2c2c2e",
				// completedTaskdCardColor: "#31835a1e",
				// taskdCardBorderColor: "#28282b",
				// completedTaskdCardBorderColor: "#1C1C1E",
				// taskdCardDescriptionColor: "#bdbbb6",

				testColor: '#141414',

				taskCard: {
          neutral: "#1C1C1E",
					hover: "#28282b",
					border: "#4141415d",
					// completed: "#31835a1e",
					completed: "#25252554",
					description_text: "#a0a0a0",
        },
			},
		},
	},
	plugins: [],
};
