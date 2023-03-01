import s from "./ContentMain.module.css"
import { TodoItem, TodoItemType } from "./TodoItem/TodoItem"

export const ContentMain = () => {
  const todoItems: Array<TodoItemType> = [{title: "123", id: "1", completed: false}]

  return <div className={s.form__main}>
    <input id="toggle-all" className={s.todo__toggleAll} type="checkbox" />
    <label htmlFor="toggle-all">Mark all as complete</label>

    <ul className={s.todo__items}>
      {todoItems.map(todo => <TodoItem key={todo.id} title={todo.title} id={todo.id} completed={todo.completed}/>)}
    </ul>
</div>
}