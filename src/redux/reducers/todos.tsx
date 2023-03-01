import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoItemType } from '../../components/Content/ContentParts/ContentMain/TodoItem/TodoItem'
import { RootState } from '../store'

interface TodosState {
  todos: Array<TodoItemType>,
  count: number,
}

const initialState: TodosState = {
  todos: [],
  count: 0,
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    addTodo: (state, action: PayloadAction<TodoItemType>) => {
      state.todos.push(action.payload)
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos.filter(todo => todo.id !== action.payload)
    },

  },
})


export const { increment, decrement, incrementByAmount, addTodo, removeTodo } = todosSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todos.count

export default todosSlice.reducer