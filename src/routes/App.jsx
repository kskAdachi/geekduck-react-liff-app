import { Routes, Route } from 'react-router-dom'
import liff from '@line/liff'
import { Top } from '../pages/Top/Top'
import { NotFound } from '../pages/NotFound/NotFound'
import { useState, useEffect } from 'react'

function App() {
	// 初期レンダリング時に実行
	useEffect(() => {
		/**
		 * liff.init()
		 * liff アプリの初期化
		 * init() 実行後 LIFF SDK の他メソッドが実行可能
		 * https://developers.line.biz/ja/reference/liff/#initialize-liff-app
		 */
		liff
			.init({ liffId: import.meta.env.VITE_LIFF_ID })
			.then(() => {
				// ログイン状態を確認
				if (liff.isLoggedIn()) {
					// ...
				}
			})
			.catch((err) => {
				console.log(err.code, err.message)
			})
	}, [])

	return (
		<Routes>
			<Route path="/" element={<Top />} />
			<Route path="/*" element={<NotFound />} />
		</Routes>
	)
}

export default App
