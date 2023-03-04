import {
	ActiveType,
	AllType,
	CompletedType,
	initializeTodos,
	selectFilter,
	selectTodos,
} from '../../../../redux/reducers/todos'
import s from './ContentMain.module.css'
import {TodoItem} from './TodoItem/TodoItem'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getTodosLS, setTodosLS} from './../../../../localStorageInteraction'

export const ContentMain = () => {
	const todoItems = useSelector(selectTodos)
	const todosFilter = useSelector(selectFilter)

	const dispatch = useDispatch()

	useEffect(() => {
		const todosFromLS = getTodosLS()
		if (todosFromLS.length > 0) {
			dispatch(initializeTodos(todosFromLS))
		}
	}, [dispatch])

	useEffect(() => {
		setTodosLS(todoItems)
	}, [todoItems])

	return (
		<div className={s.Root}>
			<input
				id='toggle-all'
				className={s.toggleAll}
				type='checkbox'
			/>
			<label htmlFor='toggle-all'>Mark all as complete</label>

			<ul className={s.items}>
				{todoItems.map((todo) => {
					let show = true

					switch (todosFilter) {
						case ActiveType:
							show = todo.completed === false
							break
						case CompletedType:
							show = todo.completed === true
							break
						default:
							break
					}

					return (
						<TodoItem
							key={todo.id}
							title={todo.title}
							id={todo.id}
							completed={todo.completed}
							hide={!show}
						/>
					)
				})}
			</ul>
		</div>
	)
}
