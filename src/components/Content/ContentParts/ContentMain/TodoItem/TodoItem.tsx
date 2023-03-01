import {FC} from 'react'
import s from "./TodoItem.module.css"


export const TodoItem: FC<TodoItemType> = ({title, id, completed}) => {
  return <li id={id}>
    <div className={s.todo__item}>

      <input className={s.todo__toggle} type="checkbox" checked={completed} />

      <label className={s.todo__text}>{title}</label>
      <button className={s.todo__remove}></button>
    </div>
    <input type="text" className={s.todo__edit}></input>
  </li>
}

export type TodoItemType = {
  title: string,
  id: string,
  completed: boolean
}