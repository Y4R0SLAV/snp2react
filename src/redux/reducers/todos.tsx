import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {TodoItemType} from 'src/components/Content/ContentParts/ContentMain/TodoItem/TodoItem'
import {RootState} from '../store'

export const AllType = 'All'
export const ActiveType = 'Active'
export const CompletedType = 'Completed'

export type FilterType = typeof AllType | typeof ActiveType | typeof CompletedType

interface TodosState {
	todos: Array<TodoItemType>
	count: number
	activeCount: number
	completedCount: number
	todosFilter: FilterType
}

const initialState: TodosState = {
	todos: [],
	count: 0,
	activeCount: 0,
	completedCount: 0,
	todosFilter: AllType,
}

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TodoItemType>) => {
			state.todos.push(action.payload)
			state.activeCount += 1
			state.count += 1
		},

		removeTodo: (state, action: PayloadAction<string>) => {
			let removingTodo = state.todos.find((todo) => todo.id === action.payload)

			state.todos = [...state.todos.filter((todo) => todo.id !== action.payload)]
			state.count -= 1

			if (removingTodo?.completed === false) {
				state.activeCount -= 1
			} else {
				state.completedCount -= 1
			}
		},

		initializeTodos: (state, action: PayloadAction<Array<TodoItemType>>) => {
			state.todos = action.payload

			let activeCount = action.payload.filter((item) => item.completed === false).length
			let todosCount = action.payload.length

			state.count = todosCount
			state.activeCount = activeCount
			state.completedCount = todosCount - activeCount
			// не инициализирую фильтр, т.к. скорее всего, он стоит на All, иначе уже отдельно изменю
		},

		changeTextTodo: (state, action: PayloadAction<{id: string; title: string}>) => {
			const newTodos = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.title = action.payload.title
				}
				return todo
			})
			state.todos = newTodos
		},

		changeCompletedTodo: (state, action: PayloadAction<{id: string; completed: boolean}>) => {
			let activeCount = 1
			// была активная задача, стала завершенной
			if (action.payload.completed === true) {
				activeCount = -1
			}

			state.activeCount += activeCount
			state.completedCount -= activeCount

			const newTodos = state.todos.map((todo) => {
				if (todo.id === action.payload.id) {
					todo.completed = action.payload.completed
				}
				return todo
			})
			state.todos = newTodos
		},

		clearCompletedTodos: (state) => {
			const newTodos = state.todos.filter((todo) => todo.completed === false)
			state.todos = newTodos
			state.count -= state.completedCount
		},

		setFilter: (state, action: PayloadAction<FilterType>) => {
			state.todosFilter = action.payload
		},

		toggleAll: (state) => {
			let completedValue = true
			if (state.activeCount === 0) {
				// все нужно активировать
				completedValue = false
				state.activeCount = state.count
				state.completedCount = 0
			} else {
				// иначе всем установить completed = true, что при инициализации задалось
				state.completedCount = state.count
				state.activeCount = 0
			}

			state.todos.forEach((todo) => (todo.completed = completedValue))
		},
	},
})

export const {
	addTodo,
	removeTodo,
	initializeTodos,
	changeTextTodo,
	changeCompletedTodo,
	clearCompletedTodos,
	setFilter,
	toggleAll,
} = todosSlice.actions

export const selectActiveTodosCount = (state: RootState) => state.todos.activeCount
export const selectCompletedTodosCount = (state: RootState) => state.todos.completedCount
export const selectTodos = (state: RootState) => state.todos.todos
export const selectFilter = (state: RootState) => state.todos.todosFilter

export default todosSlice.reducer
