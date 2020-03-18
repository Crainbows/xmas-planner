import React from "react"
import TopBar from './TopBar'
import RecipientList from "./RecipientList";
import './core.scss';

const Core: React.FC = () => {
    return (
        <main>
            <TopBar></TopBar>
            <RecipientList></RecipientList>
        </main>
    )
}

export default Core
