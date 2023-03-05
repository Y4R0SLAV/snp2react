import {useState} from 'react'
import s from './ContentFooter.module.css'
import {AllType, ActiveType, CompletedType, selectActiveTodosCount} from 'reducers/todos'
import {useSelector} from 'react-redux'
import {FooterFilter} from './FooterParts/FooterFilter/FooterFilter'
import {ClearButton} from './FooterParts/ClearButton/ClearButton'
import {CountBlock} from 'common/CountBlock/CountBlock'

export const ContentFooter = () => {
	const activeTodosCount = useSelector(selectActiveTodosCount)

	const [currentFilterId, setCurrentFilterId] = useState(1)

	const filters = [
		{id: 1, text: 'All' as typeof AllType, href: '/'},
		{id: 2, text: 'Active' as typeof ActiveType, href: '#/' + ActiveType},
		{id: 3, text: 'Completed' as typeof CompletedType, href: '#/' + CompletedType},
	]

	return (
		<div className={s.Root}>
			<CountBlock
				count={activeTodosCount}
				cn={s.count}
			/>

			<div className={s.filters}>
				{filters.map((f) => {
					return (
						<FooterFilter
							key={f.id}
							id={f.id}
							text={f.text}
							href={f.href}
							currentFilterId={currentFilterId}
							setCurrentFilterId={setCurrentFilterId}
						/>
					)
				})}
			</div>

			<ClearButton />
		</div>
	)
}
