import { addTodo, initializeTodos, selectTodos } from "../../../../redux/reducers/todos"
import s from "./ContentMain.module.css"
import { TodoItem, TodoItemType } from "./TodoItem/TodoItem"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getTodosLS, setTodosLS } from './../../../../localStorageInteraction'



export const ContentMain = () => {
  const todoItems: Array<TodoItemType> = useSelector(selectTodos)
  const dispatch = useDispatch()

  useEffect(() => {
    const todosFromLS = getTodosLS()
    if (todosFromLS.length > 0) {
      dispatch(initializeTodos(todosFromLS))
    }
  }, [])

  useEffect(() => {
    setTodosLS(todoItems)
  }, [todoItems])
  
  return <div className={s.form__main}>
    <input id="toggle-all" className={s.todo__toggleAll} type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>

    <ul className={s.todo__items}>
      {todoItems.map(todo => <TodoItem key={todo.id} title={todo.title} id={todo.id} completed={todo.completed}/>)}
    </ul>
</div>
}