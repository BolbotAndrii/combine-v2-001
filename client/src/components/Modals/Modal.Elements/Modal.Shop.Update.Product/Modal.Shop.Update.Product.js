import React, {useEffect, useState} from 'react'
import s from './Modal.Shop.Update.Product.module.css'
import {useDispatch, useSelector} from "react-redux";
import { getProduct, updateProductData} from "../../../../utils/api";
import * as Actions from "../../../../redux/Modals/Modals.action";
import {notification} from "../../../../utils/notification";
import {shopUpdatingProductId} from "../../../../redux/Modals/Modal.selectors";

export const ModalShopUpdateProduct = () => {
    const [file, setFile] = useState({})
    const [value, setValue] = useState({  } )
    const dispatch = useDispatch()
    const productId = useSelector( shopUpdatingProductId )

    const valueHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value } )
    }

    useEffect( () => {
        getProduct(productId)
            .then( ( { data } ) => {
                setValue(data)
            })
            .catch(
                e => console.error(e)
            )
    }, [productId])

    const submitUpdateProduct = (e) => {
        e.preventDefault()

        const dataForm = new FormData()

        dataForm.append('productImg', file )
        dataForm.append('productData', JSON.stringify( value ) )

        updateProductData(dataForm, productId)
            .then( ( { data } ) => {
                dispatch( Actions.modalUpdateProductAction( { isOpen: false, id: null } ) )
                notification( data.message, 'backGround: green' )
            } )
            .catch( e => {
                notification(  e.response.data.message, 'backGround: red')
            } )
        e.target.reset()
    }

    return (
        <>
            <h4 className={s.header}>Change product: <span>{value.title}</span> </h4>
            <form className={s.form} onSubmit={ submitUpdateProduct }>
                <div className={s.fieldsBody}>
                    <div className="input-field col s6">
                        <label htmlFor="title" className='active'>Title</label>
                        <input
                            defaultValue={value.title}
                            onChange={ valueHandler }
                            name="title"
                            id='title'
                            type="text"
                            autoComplete="text"
                            required
                        />
                    </div>
                    <div className="row">
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Picture</span>
                                <input
                                    type="file"
                                    name='productImg'
                                    onChange={ (e) => { setFile( e.target.files[0] )}}
                                />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" defaultValue={value.img} type="text"/>
                            </div>
                        </div>
                    </div>

                    <div className="input-field col s6">
                        <label htmlFor="price" className='active'>Price</label>
                        <input
                            defaultValue={ value.price }
                            onChange={ valueHandler }
                            name="price"
                            id='price'
                            type="text"
                            autoComplete="text"
                            required
                        />
                    </div>
                    <div className="input-field col s6">
                        <label htmlFor="count" className='active'>Count</label>
                        <input
                            defaultValue={ value.count }
                            onChange={ valueHandler }
                            name="count"
                            id='count'
                            type="text"
                            autoComplete="text"
                            required
                        />
                    </div>

                </div>
                <div>
                    <button className={`btn waves-effect waves-light  btn-large ${s.sendBtn}` } type="submit" name="action">
                        <div>Update product</div>
                        <i className="material-icons">send</i>
                    </button>
                </div>
            </form>
        </>

    )
}