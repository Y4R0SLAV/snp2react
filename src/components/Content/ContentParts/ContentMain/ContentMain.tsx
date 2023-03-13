import {
	ActiveType,
	CompletedType,
	FilterType,
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
import {ToggleAllBlock} from './ToggleAllBlock/ToggleAllBlock'

export const ContentMain: React.FC<{filter: FilterType}> = ({filter}) => {
	const todoItems = useSelector(selectTodos)
	const todosFilter = useSelector(selectFilter)

	const dispatch = useDispatch()

	const getIsHide: (completed: boolean) => boolean = (completed) => {
		let show = true

		if (todosFilter === ActiveType) {
			show = completed === false
		} else if (todosFilter === CompletedType) {
			show = completed === true
		}
		return !show
	}

	useEffect(() => {
		// инициализация туду
		const todosFromLS = getTodosLS()
		if (todosFromLS.length > 0) {
			dispatch(initializeTodos(todosFromLS))
		}

		// инициализация фильтра
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
					

					return (
						<TodoItem
							key={todo.id}
							title={todo.title}
							id={todo.id}
							completed={todo.completed}
							hide={getIsHide(todo.completed)}
						/>
					)
				})}
			</ul>
		</div>
	)
}
