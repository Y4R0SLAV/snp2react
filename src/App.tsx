import s from './App.module.css'
import {Content} from './components/Content/Content'
import {Header} from './components/Header/Header'

function App() {
	return (
		<div className={s.Root}>
			<div className={s.content}>
				<Header />
				<Content />
			</div>
		</div>
	)
}

export default App
