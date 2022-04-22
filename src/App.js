import React, { useState } from 'react'
import List from './components/List'
import Search from './components/Search'
import './index.css'

export default function App() {

	const [users, setUsers] = useState([]);
	const [isFirst, setIsFirst] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const updateUsers = (newUsers) => {
		setUsers(newUsers);
	}
	const updateIsFirst = (isTrue) => {
		setIsFirst(isTrue);
	}
	const updateIsLoading = (isFalse) => {
		setIsLoading(isFalse);
	}
	const updateError = (message) => {
		setError(message);
	}
	return (
		<div className="container">
			<Search updateUsers={updateUsers}
				updateIsFirst={updateIsFirst}
				updateIsLoading={updateIsLoading}
				updateError={updateError}
			/>
			<List users={users} isFirst={isFirst} isLoading={isLoading} error={error} />
		</div>
	)
}


