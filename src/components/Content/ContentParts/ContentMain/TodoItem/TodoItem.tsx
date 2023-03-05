import {FC, useState} from 'react'

import {Checkbox} from './TodoItemParts/Checkbox/Checkbox'
import {EditInput} from './TodoItemParts/EditInput/EditInput'
import {TextBlock} from './TodoItemParts/TextBlock/TextBlock'
import {TodoItemRemoveButton} from './TodoItemParts/RemoveButton/RemoveButton'

import s from './TodoItem.module.css'
import classNames from 'classnames/bind'

export const TodoItem: FC<TodoItemType & {hide: boolean}> = ({title, id, completed, hide}) => {
	const [editing, setEditing] = useState(false)
	const [hovered, setHovered] = useState(false)
	const cx = classNames.bind(s)

	return (
		<li
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
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

				<TodoItemRemoveButton
					id={id}
					isHovered={hovered}
				/>
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
