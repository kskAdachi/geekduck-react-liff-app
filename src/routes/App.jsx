import { Routes, Route } from 'react-router-dom'
import { Top } from '../pages/Top/Top'
import { NotFound } from '../pages/NotFound/NotFound'

function App() {
	return (
		<Routes>
			<Route path="/" element={<Top />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	)
}

export default App
