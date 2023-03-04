import {FC, useState} from 'react'
import {useDispatch} from 'react-redux'
import { changeCompletedTodo, changeTextTodo, removeTodo} from '../../../../../redux/reducers/todos'
import s from './TodoItem.module.css'
import classNames from 'classnames/bind'

const TodoItemCheckbox: FC<{id: string; completed: boolean}> = ({id, completed}) => {
	const dispatch = useDispatch()

	const onClickHandler = () => {
		dispatch(changeCompletedTodo({id, completed: !completed}))
	}

	return (
		<input
			onClick={(e) => onClickHandler()}
			className={s.todo__toggle}
			type='checkbox'
			defaultChecked={completed}
		/>
	)
}

export const TodoItem: FC<TodoItemType & {hide: boolean}> = ({title, id, completed, hide}) => {
	const [editingText, setEditingText] = useState(title)
	const [editing, setEditing] = useState(false)
	const cx = classNames.bind(s)

	const dispatch = useDispatch()

	const change = () => {
		dispatch(changeTextTodo({id, title: editingText}))
		setEditing(false)
	}

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditingText(e.currentTarget.value)
	}

	const onClickHandler = (id: string) => {
		dispatch(removeTodo(id))
	}

	const onDoubleClickHandler = () => {
		setEditing(true)
	}

	const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			change()
		}
	}

	return (
		// у li класс completed если выполнен соответсвенно
		<li
			id={id}
			className={cx({editing, completed, hide})}
		>
			<div className={s.todo__item}>
				<TodoItemCheckbox
					completed={completed}
					id={id}
				/>

				<label
					className={s.todo__text}
					onDoubleClick={(e) => onDoubleClickHandler()}
				>
					{title}
				</label>
				<button
					onClick={(e) => onClickHandler(id)}
					className={s.todo__remove}
				></button>
			</div>

			<input
				type='text'
				className={s.todo__edit}
				value={editingText}
				onChange={(e) => onChangeHandler(e)}
				onBlur={(e) => change()}
				onKeyDown={(e) => onKeyDownHandler(e)}
			></input>
		</li>
	)
}

export type TodoItemType = {
	title: string
	id: string
	completed: boolean
}
