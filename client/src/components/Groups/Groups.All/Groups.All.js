import React, {useEffect, useState} from 'react';
import s from "./Groups.All.module.css";
import {getUserGroups, deleteUserGroup} from "../../../utils/api";
import { GroupAllTable } from "./Group.All.Table/Group.All.Table";
import { notification } from '../../../utils/notification'
import {useDispatch} from "react-redux";
import * as Actions from "../../../redux/Modals/Modals.action";


export const GroupsAll = () => {
    const [groups, setGroups] = useState(null)
    const [remove, setRemove] = useState(false)
    const dispatch = useDispatch()

    const viewGroupPerm = ( id ) => {
        dispatch(Actions.modalGetPermAction( { isOpen: true, id } ) )
    }

    const updateGroupData = ( id ) => {
        dispatch(Actions.modalEditGroupAction( { isOpen: true, id } ) )
    }


    useEffect(() => {
        getUserGroups()
            .then( ( data ) => {
                setGroups(data.data)
            } )
            .catch( ( error ) => {
                console.error( error )
            } )
    }, [remove] )


    const deleteGroupById = ( id ) => {
        deleteUserGroup(id)
            .then( () => {
                setRemove((prev) => !prev )
                notification('The group was successfully deleted', 'backGround: green' )
            } ).catch( ( err ) => {
                notification('An error occurred while deleting', 'backGround: red' )
            })
    }



    return (

           <>
               { groups && groups.length > 0
                   ? <GroupAllTable
                       groups={ groups }
                       deleteGroupById = { deleteGroupById }
                       viewGroupPerm = { viewGroupPerm }
                       updateGroupData = { updateGroupData }
                   />
                   : <div className={ s.groupsEmpty }>No groups created</div>
               }
           </>
    )
}