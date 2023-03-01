import s from "./ContentHeader.module.css"

export const ContentHeader = () => {
  return <div className={s.form__header}>
    <input className={s.header__newTodo} placeholder="What needs to be done?" autoFocus />
  </div>
}