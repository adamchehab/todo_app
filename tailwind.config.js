/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				darkColor: '#141414',

				taskCard: {
          neutral: "#1C1C1E",
					hover: "#28282b",
					border: "#4141415d",
					// completed: "#31835a1e",
					completed: "#25252554",
					description_text: "#757575",
					project: "#399bebff",
					projectDarker: "#287cc0ff",
        },
			},
		},
	},
	plugins: [],
};
