import React from 'react'
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import s from './Breadcrumbs.module.css'

export const Breadcrumbs = () => {
	const breadcrumbs = useBreadcrumbs();


	return (
		<div className={s.breadcrumbs}>

			{ breadcrumbs.map( ( { breadcrumb, key } ) => <a href={key} key={ key } className="breadcrumb">{ breadcrumb }</a> ) }

		</div>
	);
}


