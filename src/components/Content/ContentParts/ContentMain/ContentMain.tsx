import {
	ActiveType,
	CompletedType,
	initializeTodos,
	selectFilter,
	selectTodos,
	setFilter,
	toggleAll,
} from '../../../../redux/reducers/todos'
import s from './ContentMain.module.css'
import {TodoItem} from './TodoItem/TodoItem'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getTodosLS, setTodosLS} from './../../../../localStorageInteraction'

const ToggleAllBlock = () => {
	const dispatch = useDispatch()

	return (
		<>
			<input
				id='toggle-all'
				className={s.toggleAll}
				onClick={(e) => dispatch(toggleAll())}
				type='checkbox'
			/>
			<label htmlFor='toggle-all'>Mark all as complete</label>
		</>
	)
}

export const ContentMain = () => {
	const todoItems = useSelector(selectTodos)
	const todosFilter = useSelector(selectFilter)

	const dispatch = useDispatch()

	useEffect(() => {
		// инициализация туду
		const todosFromLS = getTodosLS()
		if (todosFromLS.length > 0) {
			dispatch(initializeTodos(todosFromLS))
		}

		// инициализация фильтра
		const href = window.location.href
		let hrefArray = href.split('/')
		let filter = hrefArray[hrefArray.length - 1]

		if (filter === CompletedType) {
			dispatch(setFilter(CompletedType))
		} else if (filter === ActiveType) {
			dispatch(setFilter(ActiveType))
		}
	}, [dispatch])

	useEffect(() => {
		setTodosLS(todoItems)
	}, [todoItems])

	return (
		<div className={s.Root}>
			<ToggleAllBlock />

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
