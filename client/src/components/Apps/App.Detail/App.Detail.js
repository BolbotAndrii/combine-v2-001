import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getApp} from "../../../utils/api";
import {AppDetailElement} from "./App.Detail.Element/App.Detail.Element";

export const ApplicationDetail = () => {
    const [app, setApp] = useState(null)
    const { id } = useParams()


    useEffect(() => {
        getApp(id)
            .then(data => setApp(data.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div>
            {app && <AppDetailElement app={app}/>}
        </div>
    )
}

