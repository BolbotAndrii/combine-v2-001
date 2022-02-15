import React from 'react';
import { MainLayout } from '../../layouts/MainLayout'
import { KeitaroCampaing } from "../../components/Keitaro/Keitaro.Campaings/Keitaro.Campaings";


const KeitaroCampaingsPage = () => {
    return (
            <MainLayout>
                <KeitaroCampaing />
            </MainLayout>
    )
}

export default KeitaroCampaingsPage;
