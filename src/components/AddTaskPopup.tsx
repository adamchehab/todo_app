import { useState } from "react";

export function AddTaskPopup({
	addTaskWindow,
	setAddTaskWindow,
	tasks,
	setTasks,
}) {
	const [newTask, setNewTask] = useState({
		name: "",
		project: "",
		description: "",
	});
	const [errorName, setErrorName] = useState(false);

	function handleClearFields() {
		setNewTask({
			name: "",
			project: "",
			description: "",
		});
	}

	function handleAddTask() {
		if (newTask.name === "") {
			setErrorName(true);
		} else {
			const tas = {
				id: tasks.length,
				name: newTask.name,
				project: newTask.project,
				description: newTask.description,
				completed: false,
			};

			setTasks([...tasks, tas]);
			handleClearFields();
			setAddTaskWindow(false);
		}
	}

	return (
		<>
			{/* TODO can i add animation smooth popup? */}
			{addTaskWindow && (
				<div
					className="w-full h-full bg-black/50 fixed top-0 left-0 flex pt-36 justify-center"
					onClick={() => setAddTaskWindow(false)}
				>
					<div
						className="w-[400px] h-[208px] bg-taskCard-hover rounded-lg p-4 px-6 select-none"
						onClick={(e) => e.stopPropagation()}
					>
						<p>Добавить задачу</p>
						<input
							className="w-full h-7 rounded-[3px] text-sm outline-none pl-2 mt-2"
							placeholder="Название"
							value={newTask.name}
							onChange={(e) => {
								setErrorName(false);
								setNewTask({
									...newTask,
									name: e.target.value,
								});
							}}
						></input>
						<input
							className="w-full h-7 rounded-[3px] text-sm outline-none pl-2 mt-2"
							placeholder="Проект"
							value={newTask.project}
							onChange={(e) =>
								setNewTask({
									...newTask,
									project: e.target.value,
								})
							}
						></input>
						<input
							className="w-full h-7 rounded-[3px] text-sm outline-none pl-2 my-2"
							placeholder="Описание"
							value={newTask.description}
							onChange={(e) =>
								setNewTask({
									...newTask,
									description: e.target.value,
								})
							}
						></input>
						{/* {errorName && <span> name cant be empty</span>} */}
						{/* TODO Вынести в отдельны класс кнопку */}
						<div className="flex justify-between">
							{/* FIX diplay error */}
							{/* <p>name cant be empty</p> */}
							{newTask.name == "" &&
							newTask.project == "" &&
							newTask.description == "" ? null : (
								<button
									className="bg-taskCard-cancel text-sm pl-2 pr-2 p-1 rounded-[3px] hover:bg-taskCard-cancel_darker transition-all duration-400 hover:text-gray-200 shadow-md shadow-taskCard-cancel/50 hover:shadow-inner flex justify-end ml-[194px] mt-2"
									onClick={handleClearFields}
								>
									Очистить
								</button>
							)}
							<button
								className="bg-taskCard-project text-sm pl-2 pr-2 p-1 rounded-[3px] hover:bg-taskCard-projectDarker transition-all duration-400 hover:text-gray-200 shadow-md shadow-taskCard-project/50 hover:shadow-inner flex justify-end ml-auto mt-2"
								onClick={handleAddTask}
							>
								Готово
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}