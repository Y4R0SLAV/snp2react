import {useDispatch} from 'react-redux'
import {toggleAll} from 'reducers/todos'
import s from './ToggleAllBlock.module.css'

export const ToggleAllBlock = () => {
	const dispatch = useDispatch()

	return (
		<>
			<input
				id='toggle-all'
				className={s.Root}
				onClick={(e) => dispatch(toggleAll())}
				type='checkbox'
			/>
			<label htmlFor='toggle-all'>Mark all as complete</label>
		</>
	)
}
