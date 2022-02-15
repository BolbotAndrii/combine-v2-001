import React from 'react'
import { Sidebar } from '../components/Sidebar/Sidebar'
import { Header } from '../components/Header/Header'
import s from './MainLayout.module.css'

export const WithoutBCLayout = ({ children }) => {
    return (
        <div className={ s.container }>
            <Sidebar />
            <Header />
            <div className={ s.rightContainer }>
                { children }
            </div>
        </div>
    )
}

