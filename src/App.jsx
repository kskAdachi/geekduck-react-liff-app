import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Top } from './pages/Top/Top'
import { NotFound } from './pages/NotFound/NotFound'

import { useLiff } from './hooks/line/useLiff'

function App() {
	const liffId = import.meta.env.VITE_LIFF_ID
	const { loading, isLoggedIn } = useLiff({ liffId })

	if (loading) {
		return <p>loading...</p>
	}

	return (
		<BrowserRouter>
			<Routes>
				{isLoggedIn && <Route path="/" element={<Top />} />}
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
