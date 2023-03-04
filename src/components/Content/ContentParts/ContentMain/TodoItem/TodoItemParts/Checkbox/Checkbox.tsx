import {FC} from 'react'
import {useDispatch} from 'react-redux'
import {changeCompletedTodo} from '../../../../../../../redux/reducers/todos'
import s from './Checkbox.module.css'

export const Checkbox: FC<{id: string; completed: boolean}> = ({id, completed}) => {
	const dispatch = useDispatch()

	const onClickHandler = () => {
		dispatch(changeCompletedTodo({id, completed: !completed}))
	}

	return (
		<input
			onClick={(e) => onClickHandler()}
			className={s.toggle}
			type='checkbox'
			defaultChecked={completed}
		/>
	)
}
