import {TodoItemType} from './components/Content/ContentParts/ContentMain/TodoItem/TodoItem'

export const getTodosLS = (): Array<TodoItemType> => {
	const todos = localStorage.getItem('todos')
	if (todos) {
		return JSON.parse(todos)
	}
	return []
}

export const setTodosLS = (todoList: Array<TodoItemType> = []) => {
	localStorage.setItem('todos', JSON.stringify(todoList))
}
