import React, { Component } from "react";
// import AddUserButton from "./addUser";

import './recipientCard.scss';
// import { connect } from "react-redux";

class RecipientCard extends Component{
    constructor(props) {
        super(props);
        this.state = {expanded: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => {
            return {expanded: !this.state.expanded}
        });
    }

    render() {
        let classes = this.state.expanded ? "recipient-card expanding-card expanded" : "recipient-card expanding-card";
        let percentage = Math.random() * 100;
        return (
            <div className={classes} onClick={this.handleClick}>
                <div className="recipient-name">{this.props.recipient.name}</div>
                <div>{this.props.recipient.budget}</div>
                <div className="progress-container" style={{maxWidth: `${percentage}%`}}>
                    <div className="progress-value"></div>
                </div>
                <div className="expandable">TEST TEXT<br />TEST TEXT<br />TEST TEXT<br />TEST TEXT<br />TEST TEXT<br /></div>
            </div>
        )
    }
}

export default RecipientCard
