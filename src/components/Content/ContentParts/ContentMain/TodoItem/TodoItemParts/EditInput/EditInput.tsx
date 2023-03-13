import {FC, useState} from 'react'
import {useDispatch} from 'react-redux'
import {changeTextTodo} from 'reducers/todos'

import s from './EditInput.module.css'

type EditInputType = {
	id: string
	title: string
	setEditing: (a: boolean) => void
}

export const EditInput: FC<EditInputType> = ({id, title, setEditing}) => {
	const [editingText, setEditingText] = useState(title)
	const dispatch = useDispatch()

	const change = () => {
		if (editingText.trim().length > 0) {
			dispatch(changeTextTodo({id, title: editingText}))
			setEditing(false)
		}
	}

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEditingText(e.currentTarget.value)
	}

	const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			change()
		}
	}

	return (
		<input
			type='text'
			className={s.Root}
			value={editingText}
			onChange={(e) => onChangeHandler(e)}
			onBlur={() => change()}
			onKeyDown={(e) => onKeyDownHandler(e)}
			autoFocus
		/>
	)
}
