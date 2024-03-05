import { useEffect, useState } from 'react'
import liff from '@line/liff'

export const useLiff = ({ liffId }) => {
	const [loading, setLoading] = useState(false)
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	useEffect(() => {
		// ローディング開始
		setLoading(true)

		// LIFFを初期化
		liff
			.init({ liffId })
			.then(() => {
				// ログインしているか否かを確認
				if (liff.isLoggedIn()) {
					setIsLoggedIn(true)
				} else {
					liff
						.login()
						.then(() => {
							setIsLoggedIn(true)
						})
						.catch((err) => {
							console.log(err.code, err.message)
						})
				}
			})
			.catch((err) => {
				console.log(err.code, err.message)
			})
			.finally(() => {
				// 処理完了後にローディングを終了
				setLoading(false)
			})
	}, [])

	return { loading, isLoggedIn }
}
