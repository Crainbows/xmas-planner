import React, { Component } from "react"
import AddUserButton from "./AddUser"

import TopBar from './TopBar'

import './core.scss';
import RecipientList from "./RecipientList";

class Core extends Component{
    render() {
        return (
            <main>
                <TopBar></TopBar>
                <RecipientList></RecipientList>
                <AddUserButton></AddUserButton>
            </main>
        )
    }
}

export default Core
