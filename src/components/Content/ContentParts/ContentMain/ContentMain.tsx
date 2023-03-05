import {
	ActiveType,
	CompletedType,
	initializeTodos,
	selectFilter,
	selectTodos,
	setFilter,
} from 'reducers/todos'
import s from './ContentMain.module.css'
import {TodoItem} from './TodoItem/TodoItem'
import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react'
import {getTodosLS, setTodosLS} from 'src/localStorageInteraction'
import {useLocation} from 'react-router'
import {ToggleAllBlock} from './ToggleAllBlock/ToggleAllBlock'

export const ContentMain = () => {
	const todoItems = useSelector(selectTodos)
	const todosFilter = useSelector(selectFilter)
	const location = useLocation()

	const dispatch = useDispatch()

	useEffect(() => {
		// инициализация туду
		const todosFromLS = getTodosLS()
		if (todosFromLS.length > 0) {
			dispatch(initializeTodos(todosFromLS))
		}

		// инициализация фильтра
		let filter = location.hash.slice(2)

		if (filter === CompletedType) {
			dispatch(setFilter(CompletedType))
		} else if (filter === ActiveType) {
			dispatch(setFilter(ActiveType))
		}
	}, [dispatch])
	// eslint ругается, что нет зависимостей с location, но они здесь не нужны!

	useEffect(() => {
		setTodosLS(todoItems)
	}, [todoItems])

	return (
		<div className={s.Root}>
			<ToggleAllBlock />

			<ul className={s.items}>
				{todoItems.map((todo) => {
					let show = true

					if (todosFilter === ActiveType) {
						show = todo.completed === false
					} else if (todosFilter === CompletedType) {
						show = todo.completed === true
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
