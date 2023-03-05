import {setFilter, FilterType} from 'reducers/todos'

import {Link} from 'react-router-dom'

import {useDispatch} from 'react-redux'
import classNames from 'classnames/bind'
import s from './FooterFilter.module.css'

export const FooterFilter: React.FC<FooterFilterType> = ({
	id,
	href,
	text,
	currentFilterId,
	setCurrentFilterId,
}) => {
	const dispatch = useDispatch()
	const cx = classNames.bind(s)

	return (
		<div
			className={s.Root}
			key={id}
			onClick={() => {
				setCurrentFilterId(id)
				dispatch(setFilter(text))
			}}
		>
			<Link
				to={href}
				className={cx({selected: currentFilterId === id})}
			>
				{text}
			</Link>
		</div>
	)
}

type FooterFilterType = {
	id: number
	href: string
	text: FilterType
	currentFilterId: number
	setCurrentFilterId: (i: number) => void
}
