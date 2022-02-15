import React from 'react';
import s from './Keitaro.TableView.module.css'

export const KeitaroTableView = ( { offers } ) => {
    return (
        <div className={ s.tableContainer }>
            <div className={ s.tableHeader }>
                <span>id</span>
                <span>Name</span>

            </div>
            {
                offers.map( ( { id, name } ) => (
                  <div className={ s.tableRow} key={ id }>
                      <span>{ id }</span>
                      <span>{ name }</span>

                  </div>
                ))
            }
        </div>
    )
}