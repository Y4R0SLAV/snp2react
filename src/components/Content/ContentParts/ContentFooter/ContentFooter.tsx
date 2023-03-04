import {useState} from 'react'
import s from './ContentFooter.module.css'
import {
	AllType,
	ActiveType,
	CompletedType,
	selectActiveTodosCount,
} from './../../../../redux/reducers/todos'
import {useSelector} from 'react-redux'
import {FooterFilter} from './FooterParts/FooterFilter/FooterFilter'
import {ClearButton} from './FooterParts/ClearButton/ClearButton'

const CountBlock: React.FC<{count: number; cn: string}> = ({count, cn}) => {
	let itemsOrItem = 'item'
	if (count !== 1) {
		itemsOrItem += 's'
	}

	return (
		<div className={cn}>
			<strong> {count} </strong> {itemsOrItem} left
		</div>
	)
}

export const ContentFooter = () => {
	const activeTodosCount = useSelector(selectActiveTodosCount)

	const [currentFilterId, setCurrentFilterId] = useState(1)

	const filters = [
		{id: 1, text: 'All' as typeof AllType, href: '#/'},
		{id: 2, text: 'Active' as typeof ActiveType, href: '#/active'},
		{id: 3, text: 'Completed' as typeof CompletedType, href: '#/completed'},
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
