import React, { Component } from "react";
// import AddUserButton from "./addUser";
import { Card, Elevation, Intent, ProgressBar } from "@blueprintjs/core";

import './recipientCard.scss';
import RecipientGiftList from "../RecipientGiftList";
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
        let percentage = Math.random()
        let status = percentage < 0.5 ? Intent.DANGER : percentage < 0.85 ? Intent.WARNING : Intent.SUCCESS;
        return (
            <Card interactive={true} elevation={Elevation.TWO} className={classes} onClick={this.handleClick}>
                <h4>{this.props.recipient.name}</h4>
                <div>{this.props.recipient.budget}</div>
                <ProgressBar animate={false} stripes={false} intent={status} value={percentage} />
                <RecipientGiftList uuid={this.props.uuid} expanded={this.state.expanded}></RecipientGiftList>
            </Card>
        )
    }
}

export default RecipientCard
