import {FC, useState} from 'react'
import { useDispatch } from 'react-redux'
import { changeTodo, removeTodo } from '../../../../../redux/reducers/todos'
import s from "./TodoItem.module.css"


const customInput = () => {
  return 
}

export const TodoItem: FC<TodoItemType> = ({title, id, completed}) => {
  const [editingText, setEditingText] = useState(title)
  const [editing, setEditing] = useState(false)

  const dispatch = useDispatch()

  const change = () => {
    dispatch(changeTodo({id, title: editingText, completed}))
    setEditing(false)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditingText(e.currentTarget.value)
  }

  const onClickHandler = (id: string) => {
    dispatch(removeTodo(id))
  }

  const onDoubleClickHandler = () => { setEditing(true) }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      change()
    }
  }

  return <li id={id} className={editing && s.editing}>
    <div className={s.todo__item}>

      <input className={s.todo__toggle} type="checkbox" defaultChecked={completed} />

      <label className={s.todo__text} onDoubleClick={e => onDoubleClickHandler()}>{title}</label>
      <button onClick={e => onClickHandler(id)} className={s.todo__remove}></button>
    </div>

    <input  type="text" 
            className={s.todo__edit} 
            value={editingText} 
            onChange={e => onChangeHandler(e)}
            onBlur={e => change()}
            onKeyDown={e => onKeyDownHandler(e)}></input>
  </li>
}

export type TodoItemType = {
  title: string,
  id: string,
  completed: boolean
}