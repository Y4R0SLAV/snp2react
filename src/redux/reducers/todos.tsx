import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoItemType } from '../../components/Content/ContentParts/ContentMain/TodoItem/TodoItem'
import { RootState } from '../store'
import { stringify } from 'querystring'

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
      state.todos = [...state.todos.filter(todo => todo.id !== action.payload)]
    },
    initializeTodos: (state, action: PayloadAction<Array<TodoItemType>>) => {
      state.todos = action.payload
    },
    changeTodo: (state, action: PayloadAction<TodoItemType>) => {
      const newTodos = state.todos.map(todo => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title
          todo.completed = action.payload.completed
        }
        return todo
      })
      console.log(newTodos)
      state.todos = newTodos
    }

  },
})


export const { increment, decrement, incrementByAmount, addTodo, removeTodo, initializeTodos, changeTodo} = todosSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.todos.count
export const selectTodos = (state: RootState) => state.todos.todos


export default todosSlice.reducer