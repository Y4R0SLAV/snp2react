import { addTodo } from "../../../../redux/reducers/todos"
import s from "./ContentHeader.module.css"
import { useState } from 'react'
import { useDispatch } from "react-redux"

export const ContentHeader = () => {
  const [todoText, setTodoText] = useState("")
  const dispatch = useDispatch()

  const createTodo = () => {
    if (todoText) {
      const id = Date.now()
      dispatch(addTodo({title: todoText, id: id.toString(), completed: false}))
      setTodoText("")
    }
  }

  // два разных хендлера, т.к. value не обновляется при setTodoText внутри keyDownhandler
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      createTodo()
    }
  }

  const onChangeHandler = ((e: React.ChangeEvent<HTMLInputElement>) => setTodoText(e.currentTarget.value))

  return <div className={s.form__header}>

    <input  className={s.header__newTodo} 
            value={todoText} 
            onKeyDown = {e => onKeyDownHandler(e)} 
            onChange={e => onChangeHandler(e)}
            onBlur={e => createTodo()} 
            placeholder="What needs to be done?" 
            autoFocus />

  </div>
}