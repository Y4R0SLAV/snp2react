import {FC, useState} from 'react'
import {useDispatch} from 'react-redux'
import {removeTodo} from '../../../../../redux/reducers/todos'

import {Checkbox} from './TodoItemParts/Checkbox/Checkbox'
import {EditInput} from './TodoItemParts/EditInput/EditInput'
import {TextBlock} from './TodoItemParts/TextBlock/TextBlock'

import s from './TodoItem.module.css'
import classNames from 'classnames/bind'

const TodoItemRemoveButton: FC<{id: string}> = ({id}) => {
	const dispatch = useDispatch()

	const onClickHandler = (id: string) => {
		dispatch(removeTodo(id))
	}

	return (
		<button
			onClick={(e) => onClickHandler(id)}
			className={s.remove}
		></button>
	)
}

export const TodoItem: FC<TodoItemType & {hide: boolean}> = ({title, id, completed, hide}) => {
	const [editing, setEditing] = useState(false)
	const cx = classNames.bind(s)

	return (
		<li
			id={id}
			className={cx({Root: true, editing, completed, hide})}
		>
			<div className={s.item}>
				<Checkbox
					completed={completed}
					id={id}
				/>

				<TextBlock
					title={title}
					setEditing={setEditing}
				/>

				<TodoItemRemoveButton id={id} />
			</div>

			<EditInput
				setEditing={setEditing}
				id={id}
				title={title}
				isEditing={editing}
			/>
		</li>
	)
}

export type TodoItemType = {
	title: string
	id: string
	completed: boolean
}
