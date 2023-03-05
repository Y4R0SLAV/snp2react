import {ContentFooter} from './ContentParts/ContentFooter/ContentFooter'
import {ContentHeader} from './ContentParts/ContentHeader/ContentHeader'
import {ContentMain} from './ContentParts/ContentMain/ContentMain'

import s from './Content.module.css'

export const Content = () => {
	return (
		<form className={s.Root}>
			<ContentHeader />
			<ContentMain />
			<ContentFooter />
		</form>
	)
}
