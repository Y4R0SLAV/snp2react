import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from 'react-redux'
import App from './App'
import {store} from './redux/store'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
])

root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>,
)
