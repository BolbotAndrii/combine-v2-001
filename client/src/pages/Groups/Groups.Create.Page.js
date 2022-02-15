import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'
import { GroupCreate } from '../../components/Groups/Groups.Create/Groups.Create'

const GroupsCreatePage = () => {
    return (
        <MainLayout>
            <GroupCreate />
        </MainLayout>
    )
}

export default GroupsCreatePage
