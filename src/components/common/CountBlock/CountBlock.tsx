export const CountBlock: React.FC<{count: number; cn: string}> = ({count, cn}) => {
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
