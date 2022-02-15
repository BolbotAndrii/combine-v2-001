import React from 'react'
import { UsersTable } from '../../components/Users/UsersTable/UsersTable'
import { MainLayout } from '../../layouts/MainLayout'

const UsersPage = () => {

	return (
		<MainLayout>
			<UsersTable />
		</MainLayout>
	)
}

export default UsersPage