import React from "react"
import TopBar from '../components/TopBar'
import RecipientList from "../components/RecipientList";
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
