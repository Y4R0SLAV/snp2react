import {ContentFooter} from './ContentParts/ContentFooter/ContentFooter'
import {ContentHeader} from './ContentParts/ContentHeader/ContentHeader'
import {ContentMain} from './ContentParts/ContentMain/ContentMain'

import {useLocation} from 'react-router'

import s from './Content.module.css'
import {FilterType} from 'reducers/todos'

export const Content = () => {
	const location = useLocation()
	const filter = location.hash.slice(2) as FilterType

	return (
		<form className={s.Root}>
			<ContentHeader />
			<ContentMain filter={filter} />
			<ContentFooter filter={filter} />
		</form>
	)
}
