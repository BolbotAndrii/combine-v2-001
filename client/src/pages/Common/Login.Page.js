import React from 'react'
import { LoginForm } from '../../components/Login/Login'
import { FullPageLayout } from "../../layouts/FullPageLayout";


const LoginPage = () => {
	return(
		<FullPageLayout>
			<LoginForm />
		</FullPageLayout>
	)
}

export default LoginPage