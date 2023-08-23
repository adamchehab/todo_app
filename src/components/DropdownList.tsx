import { useState } from "react";

export function DropdownList({ options }) {
	const [selectedValue, setSelectedValue] = useState("");

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	return (
		<div className="text-sm">
			<p>Sort by: </p>
			<div>
				<select
					className="w-full h-7 rounded-[3px] text-sm pl-2 outline-none "
					value={selectedValue}
					onChange={handleChange}
				>
					{options.map((option) => (
						<>
							<option key={option} value={option}>
								{option}
							</option>
						</>
					))}
					;
				</select>
			</div>
		</div>
	);
}
