import React, { useEffect, useState } from 'react';
import { getUserGroup } from "../../../../utils/api";
import {useSelector} from "react-redux";
import {showGroupPermId} from "../../../../redux/Modals/Modal.selectors";
import s from './Modal.Group.Permissions.module.css'
import {CheckerIcon} from "../../../../utils/ui/checkerIcon";
import {CheckerText} from "../../../../utils/ui/checkerText";
import {Spinner} from "../../../../common/LocalLoader/Loader";

export const GroupPermissions = () => {
    const [groupPermissions, setGroupPermissions] = useState(null)
    const [groupAccess, setGroupAccess] = useState([])
    const [groupName, segGroupName] = useState([])

    const groupId = useSelector(showGroupPermId)

   useEffect(() => {
       getUserGroup(groupId)
           .then( ( { data } ) => {
               setGroupPermissions(data.groupPagePerm)
               setGroupAccess(data.groupAccess)
               segGroupName(data.groupName)
           })
           .catch( e => {
               console.error(e)
           })
   }, [groupId])

    return (
        !groupPermissions ? <Spinner /> :
        <>
            <ul className="with-header">
                <li className="collection-header">
                    <h4 className={s.permHeader}>Group: <span className={s.gName}>{groupName}</span></h4>
                </li>
            {
                groupAccess.map( item => (
                    <li className={`collection-item ${s.permRow}`}>
                        <div>
                            <span className={s.pageName}>{item.name} page :</span>
                            <CheckerIcon mark={ item.access }/>
                        </div>
                        <div>
                            <span className={s.pageName}>{item.name} permission :</span>
                            <CheckerText mark={groupPermissions.find(elem => elem.name === item.name).access} />
                        </div>
                    </li>
                ))
            }
            </ul>
        </>
    )
}
