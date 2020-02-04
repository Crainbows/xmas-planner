import React, { Component } from "react";
// import AddUserButton from "./addUser";

import './recipientCard.scss';
// import { connect } from "react-redux";

class RecipientCard extends Component{
    contructor(props) {
        // super(props);
        this.setState({});
    }

    render() {
        return (
            <div className="recipient-card">
                <div className="recipient-name">{this.props.recipient.name}</div>
                <div>{this.props.recipient.budget}</div>
                <div className="progress-value"></div>
            </div>
        )
    }
}

export default RecipientCard
