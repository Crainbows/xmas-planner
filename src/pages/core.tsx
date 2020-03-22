import React from "react"
import TopBar from '../components/TopBar'
import RecipientList from "../components/RecipientList";
import './core.scss';
import GiftDrawer from "../components/GiftDrawer";

const Core: React.FC = () => {
    return (
        <main>
            <TopBar></TopBar>
            <GiftDrawer />
            <RecipientList></RecipientList>
        </main>
    )
}

export default Core
