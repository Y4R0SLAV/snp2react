import {FC} from 'react'
import s from './TextBlock.module.css'

type TextBlockType = {
	title: string
	setEditing: (a: boolean) => void
}

export const TextBlock: FC<TextBlockType> = ({title, setEditing}) => {
	const onDoubleClickHandler = () => {
		setEditing(true)
	}

	return (
		<label
			className={s.Root}
			onDoubleClick={(e) => onDoubleClickHandler()}
		>
			{title}
		</label>
	)
}
