import React from 'react';
import s from "./Group.All.Table.module.css";




export const GroupAllTable = ( { groups, deleteGroupById, updateGroupData, viewGroupPerm } ) => {

    return (
        <table className={ s.groupTable }>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Permissions</th>
                    <th>Update</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
            {  groups.map( item => (
                <tr key={ item._id }>
                    <td>{ item.groupName }</td>
                    <td>
                        <button
                            className={ `green-text ${ s.tableBtn }` }
                            onClick={ () => viewGroupPerm( item._id ) }
                        >
                            View permissions
                        </button>
                    </td>
                    <td>
                        <button
                            className={ `blue-text ${ s.tableBtn }` }
                            onClick={ () => updateGroupData( item._id ) }
                        >
                            Edit
                        </button>
                    </td>
                    <td>
                        <button
                            className={ `red-text ${ s.tableBtn }` }
                            onClick={ () => deleteGroupById( item._id ) }
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            )) }
            </tbody>
        </table>
    )
}
