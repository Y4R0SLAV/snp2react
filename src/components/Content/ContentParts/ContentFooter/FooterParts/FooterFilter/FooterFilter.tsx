import {setFilter, FilterType} from './../../../../../../redux/reducers/todos'

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
			className={s.filter}
			key={id}
			onClick={() => {
				setCurrentFilterId(id)
				dispatch(setFilter(text))
			}}
		>
			<a
				href={href}
				className={cx({selected: currentFilterId === id})}
			>
				{text}
			</a>
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
