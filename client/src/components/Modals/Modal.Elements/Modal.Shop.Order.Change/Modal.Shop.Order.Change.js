import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {getOrder, removeOrderById, updateOrder} from "../../../../utils/api"
import {shopUpdatingOrderId} from "../../../../redux/Modals/Modal.selectors"
import {Spinner} from "../../../../common/LocalLoader/Loader"
import s from './Modal.Shop.Order.Change.module.css'
import {ModalShopOrderChangeProduct} from "./Modal.Shop.Order.Change.Product/Modal.Shop.Order.Change.Product";
import {notification} from "../../../../utils/notification"
import * as ModalActions from '../../../../redux/Modals/Modals.action'

export const ModalShopOrderChange = () => {
    const [order, setOrder] = useState()
    const [value, setValue] = useState({ orderStatus: order?.status } )
    const orderIdSelector = useSelector(shopUpdatingOrderId)
    const dispatch = useDispatch()

    useEffect( () => {
        getOrder(orderIdSelector)
            .then( ( { data } ) => {
                setOrder(data)
                const elems = document.getElementById("status");
                window.M.FormSelect.init(elems);
            } )
            .catch( e => console.error( e ) )
    }, [orderIdSelector])

    const removeOrder = ( id ) => {
        removeOrderById( id )
            .then( ( { data } ) => {
                dispatch( ModalActions.modalUpdateOrderAction( { isOpen: false } ) )
                notification( data.message, 'backGround: green')
            })
            .catch( e => { console.log( e ) })
    }

    const valueHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value } )
    }

    const statuses = ["Completed", "In process", "Ready", "Accepted"]

    const updateOrderStatus = (id, data) => {
        console.log(id + ' ' + data)
        updateOrder(id, data)
            .then( ( { data } ) => {
                notification( data.message, 'backGround: blue')
            })
            .catch( e => { console.error( e ) })
    }

    return (
        <>
            {
                order
                ?

                    <div className={s.bodyContainer}>
                        <h4>Order data:</h4>
                        <div className={s.data}>
                            <div className={s.orderDataElement}>
                                <p>User: </p>
                                <span>{order?.mark}</span>
                            </div>
                            <div className={s.orderDataElement}>
                                <p>User id: </p>
                                <span>{order?.user}</span>
                            </div>
                            <div className={s.orderDataElement}>
                                <p>Sum: </p>
                                <span>{order?.sum}</span>
                            </div>

                            <div className={s.orderDataElement}>
                                <p>Status :</p>
                                <select
                                    name="orderStatus"
                                    id="status"
                                    required
                                    onChange={valueHandler}
                                    defaultValue={order?.status}
                                >
                                    <option disabled>Choose status</option>
                                    {statuses && statuses.map(item =>
                                        <option
                                            key={item}
                                            value={item}
                                        >{item}</option>
                                    )}

                                </select>
                            </div>
                            <h5>Products:</h5>
                            <div className={s.orderDataTable}>
                                <div className={s.productsHeader}>
                                    <div>Title</div>
                                    <div>Img</div>
                                    <div>Price</div>
                                </div>
                                {order?.products.map ( product => (
                                    <ModalShopOrderChangeProduct product={product} key={product}/>
                                )) }
                            </div>
                        </div>
                        <div className={s.controlPanel}>
                            <button onClick={ () => { updateOrderStatus(order?._id, value) }} >Update</button>
                            <button onClick={ () => { removeOrder(order?._id) }} >Remove</button>
                        </div>
                    </div>
                :
                    <Spinner />
            }
        </>
    )
}