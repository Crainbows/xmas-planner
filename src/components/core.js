import React, { Component } from "react"
import TopBar from './TopBar'
import RecipientList from "./RecipientList";
import './core.scss';

class Core extends Component{
    render() {
        return (
            <main>
                <TopBar></TopBar>
                <RecipientList></RecipientList>
            </main>
        )
    }
}

export default Core
