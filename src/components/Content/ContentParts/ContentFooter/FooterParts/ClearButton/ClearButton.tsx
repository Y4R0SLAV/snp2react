import {clearCompletedTodos, selectCompletedTodosCount} from 'reducers/todos'

import {useDispatch, useSelector} from 'react-redux'
import classNames from 'classnames/bind'
import s from './ClearButton.module.css'

export const ClearButton = () => {
	const completedTodosCount = useSelector(selectCompletedTodosCount)
	const dispatch = useDispatch()
	const cx = classNames.bind(s)

	const clearButtonHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		dispatch(clearCompletedTodos())
	}

	return (
		<div className={s.Root}>
			<button
				onClick={(e) => clearButtonHandler(e)}
				className={cx({button: true, hide: completedTodosCount === 0})}
			>
				Clear completed
			</button>
		</div>
	)
}
