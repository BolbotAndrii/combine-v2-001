import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import s from './Loader.module.css'

export const Spinner = () => {
	return (

			<Loader
				type="Puff"
				color="#00BFFF"
				height={100}
				width={100}
				timeout={3000} //3 secs
				className={ s.spinerCont }
			/>

	)
}
