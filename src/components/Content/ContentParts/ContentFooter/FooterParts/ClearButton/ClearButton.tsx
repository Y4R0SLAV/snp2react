import {
	clearCompletedTodos,
	selectCompletedTodosCount,
} from './../../../../../../redux/reducers/todos'

import {useDispatch, useSelector} from 'react-redux'
import classNames from 'classnames/bind'
import s from './ClearButton.module.css'

export const ClearButton = () => {
	const completedTodosCount = useSelector(selectCompletedTodosCount)
	const dispatch = useDispatch()
	const cx = classNames.bind(s)

	const clearButtonhandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault()
		dispatch(clearCompletedTodos())
	}

	return (
		<div className={s.clear}>
			<button
				onClick={(e) => clearButtonhandler(e)}
				className={cx({button: true, hide: completedTodosCount === 0})}
			>
				Clear completed {completedTodosCount}
			</button>
		</div>
	)
}
