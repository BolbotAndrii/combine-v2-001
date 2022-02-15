import React from 'react';
import s from './Keitaro.TableView.module.css'

export const KeitaroTableView = ( { landings } ) => {
    console.log(landings)
    return (
        <div className={ s.tableContainer }>
            <div className={ s.tableHeader }>
                <span>id</span>
                <span>Name</span>
                <span>Group</span>
            </div>
            {
                landings.map( ( { id, name, group_id } ) => (
                  <div className={ s.tableRow } key={ id }>
                      <span>{ id }</span>
                      <span>{ name }</span>
                      <span>{ group_id }</span>
                  </div>
                ))
            }
        </div>
    )
}