import React from 'react'
import s from './Modal.module.css'

export const ModalWindow = ( { children, modalClosed } ) => {
	return (
		<>
			<div className={ s.overlay }></div>
			<div className={ `z-depth-5 ${ s.modalContainer } ` }>
				<button type='button' className={ s.modalClose } onClick={ modalClosed } >
					<i className="material-icons small">close</i>
				</button>
				{ children }
			</div>
		</>
	)
}

