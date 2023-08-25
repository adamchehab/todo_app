import { collection } from "firebase/firestore";
import { useState } from "react";

import { db } from "../firebase";
import { addDoc } from "firebase/firestore";

export function AddTaskPopup({
	addTaskWindow,
	setAddTaskWindow
}) {
	const [newTaskData, setNewTaskData] = useState({
		name: "",
		project: "",
		description: "",
	});
	const [errorName, setErrorName] = useState(false);

	function handleClearFields() {
		setNewTaskData({
			name: "",
			project: "",
			description: "",
		});
	}

	async function handleAddTask() {
		if (newTaskData.name === "") {
			setErrorName(true);
		} else {
			const newTask = {
				// id: tasks.length,
				name: newTaskData.name,
				project: newTaskData.project,
				description: newTaskData.description,
				completed: false,
			};

			// setTasks([...tasks, newTask]);

			await addDoc(collection(db, 'todos'), newTask);

			handleClearFields();
			setAddTaskWindow(false);
		}
	}

	const handleFieldChange = (e) => {
			setNewTaskData({
				...newTaskData,
				[e.target.name]: e.target.value,
			});
	}

	return (
		<>
			{/* TODO can i add animation smooth popup? */}
			{addTaskWindow && (
				<div
					className="w-full h-full bg-black/50 fixed top-0 left-0 flex pt-36 justify-center"
					onClick={() => {
						setErrorName(false);
						setAddTaskWindow(false);
					}}
				>
					<div
						className="w-[400px] h-[200px] bg-taskCard-hover rounded-lg p-4 px-6 select-none"
						onClick={(e) => e.stopPropagation()}
					>
						<p>Добавить задачу</p>
						<input
							name="name"
							className="w-full h-7 rounded-[3px] text-sm outline-none pl-2 mt-2"
							placeholder="Название"
							value={newTaskData.name}
							onChange={handleFieldChange}
						></input>
						<input
							name="project"
							className="w-full h-7 rounded-[3px] text-sm outline-none pl-2 mt-2"
							placeholder="Проект"
							value={newTaskData.project}
							onChange={handleFieldChange}
						></input>
						<input
							name="description"
							className="w-full h-7 rounded-[3px] text-sm outline-none pl-2 my-2"
							placeholder="Описание"
							value={newTaskData.description}
							onChange={handleFieldChange}
						></input>

						{/* TODO Вынести в отдельны класс кнопку */}

						<div className="flex justify-end">
							{errorName && (
								<p className="text-left text-taskCard-error_text font-semibold w-46 flex items-center mr-auto">
									Название пустое!
								</p>
							)}

							<div className="flex justify-end w-[180px]">
								{newTaskData.name == "" &&
								newTaskData.project == "" &&
								newTaskData.description == "" ? null : (
									<button
										className="bg-taskCard-cancel text-sm pl-2 pr-2 p-1 rounded-[3px] hover:bg-taskCard-cancel_darker transition-all duration-400 hover:text-gray-200 shadow-md shadow-taskCard-cancel/50 hover:shadow-inner ml-auto"
										onClick={handleClearFields}
									>
										Очистить
									</button>
								)}

								<button
									className="bg-taskCard-project text-sm pl-2 pr-2 p-1 rounded-[3px] hover:bg-taskCard-projectDarker transition-all duration-400 hover:text-gray-200 shadow-md shadow-taskCard-project/50 hover:shadow-inner flex justify-end ml-2"
									onClick={handleAddTask}
								>
									Готово
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
