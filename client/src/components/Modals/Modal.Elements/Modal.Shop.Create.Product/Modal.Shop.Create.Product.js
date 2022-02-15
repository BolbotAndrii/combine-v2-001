import React, {useState} from 'react'
import s from './Modal.Shop.Create.Product.module.css'
import { createProduct} from "../../../../utils/api";
import {notification} from "../../../../utils/notification";
import * as Actions from "../../../../redux/Modals/Modals.action";
import {useDispatch} from "react-redux";

export const ModalShopCreateProduct = () => {
    const [file, setFile] = useState(null)
    const [value, setValue] = useState({  } )
    const dispatch = useDispatch()

    const valueHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value } )
    }

    const submitProduct = (e) => {
        e.preventDefault()

        const dataForm = new FormData()

        dataForm.append('productImg', file)

        dataForm.append('productData', JSON.stringify(value))

        createProduct(dataForm)
            .then( ( { data } ) => {
                dispatch( Actions.modalCreateProductAction( { isOpen: false } ) )
                notification( data.message, 'backGround: green' )
            })
            .catch( e => console.error(e))

        e.target.reset()
    }

    return (
        <>
            <h3 className={s.header}>Add new product</h3>
            <form className={s.form} onSubmit={ submitProduct }>
                <div className={s.fieldsBody}>
                <div className="input-field col s6">
                    <label htmlFor="title">Title</label>
                    <input
                        value={ value.title }
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
                                <input className="file-path validate" type="text"/>
                            </div>
                        </div>
                    </div>

                <div className="input-field col s6">
                    <label htmlFor="price">Price</label>
                    <input
                        value={ value.price }
                        onChange={ valueHandler }
                        name="price"
                        id='price'
                        type="text"
                        autoComplete="text"
                        required
                    />
                </div>
                <div className="input-field col s6">
                    <label htmlFor="count">Count</label>
                    <input
                        value={ value.count }
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
                    <div>Create product</div>
                    <i className="material-icons">send</i>
                </button>
            </div>
            </form>
        </>
    )
}