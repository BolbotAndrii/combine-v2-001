import React from 'react';
import {MainLayout} from "../../layouts/MainLayout";
import {ApplicationDetail} from "../../components/Apps/App.Detail/App.Detail";

const ApplicationsDetailPage = () => {
    return (
        <MainLayout >
            <ApplicationDetail />
        </MainLayout>
    );
};

export default ApplicationsDetailPage;
