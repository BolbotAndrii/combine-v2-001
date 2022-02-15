import React from 'react';
import s from './Keitaro.TableView.module.css'

export const KeitaroTableView = ( { campaings } ) => {
    return (
        <div className={ s.tableContainer }>
            <div className={ s.tableHeader }>
                <span>id</span>
                <span>Name</span>
                <span>Group</span>
                <span>Source</span>
            </div>
            {
                campaings.map( ( { id, name, group_id, traffic_source_id } ) => (
                  <div className={ s.tableRow} key={ id }>
                      <span>{ id }</span>
                      <span>{ name }</span>
                      <span>{ group_id }</span>
                      <span>{ traffic_source_id }</span>
                  </div>
                ))
            }
        </div>
    )
}