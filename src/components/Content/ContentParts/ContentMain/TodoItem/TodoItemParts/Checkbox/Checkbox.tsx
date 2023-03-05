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
		// key math.random() решает проблему отсутствия перерисовки при нажатии на toggleAll (кнопка из ContentMain)
		<input
			key={Math.random()}
			onClick={(e) => onClickHandler()}
			className={s.Root}
			type='checkbox'
			defaultChecked={completed}
		/>
	)
}
