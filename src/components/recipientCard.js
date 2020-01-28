import React, { Component } from "react";
// import AddUserButton from "./addUser";

import './recipientCard.scss';
// import { connect } from "react-redux";

class RecipientCard extends Component{
    constructor(props) {
        super(props);
        this.state = Object.assign({},{
            ...props.recipient,
            budgetProgress: 5
        });
        setTimeout(
            function() {
                this.setState({budgetProgress: this.budgetProgress() * 100})
            }.bind(this)
            ,0);
    }

    budgetProgress() {
        return Math.random();
    }

    render() {
        let percent = this.state.budgetProgress;
        return (    
            <div className="recipient-card">
                <div className="recipient-name">{this.props.recipient.name}</div>
                <div>{this.props.recipient.budget}</div>
                <div className="progress">
                    <div className="progress-value" style={{ backgroundColor: percent >= 80 ? "green" : "white", width: percent+'%'}}></div>
                </div>
            </div>
        )
    }
}

export default RecipientCard
