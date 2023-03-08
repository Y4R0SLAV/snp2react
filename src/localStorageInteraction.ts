import {TodoItemType} from 'src/components/Content/ContentParts/ContentMain/TodoItem/TodoItem'
const todosNameLS = 'todos'

export const getTodosLS = (): Array<TodoItemType> => {
	const todos = localStorage.getItem(todosNameLS)
	if (todos) {
		return JSON.parse(todos)
	}
	return []
}

export const setTodosLS = (todoList: Array<TodoItemType> = []) => {
	localStorage.setItem(todosNameLS, JSON.stringify(todoList))
}
