import {useDispatch} from 'react-redux'
import {removeTodo} from '../../../../../../../redux/reducers/todos'
import s from './RemoveButton.module.css'
import classNames from 'classnames/bind'

export const TodoItemRemoveButton: React.FC<{id: string; isHovered: boolean}> = ({
	id,
	isHovered,
}) => {
	const dispatch = useDispatch()
	const cx = classNames.bind(s)

	const onClickHandler = (id: string) => {
		dispatch(removeTodo(id))
	}

	return (
		<button
			onClick={(e) => onClickHandler(id)}
			className={cx({Root: true, hovered: isHovered})}
		></button>
	)
}
