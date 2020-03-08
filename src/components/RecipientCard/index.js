import React, { Component } from "react";
// import AddUserButton from "./addUser";
import { Card, Elevation, Intent, ProgressBar, Button } from "@blueprintjs/core";

import './recipientCard.scss';
import RecipientGiftList from "../RecipientGiftList";
import { IconNames } from "@blueprintjs/icons";
// import { connect } from "react-redux";

class RecipientCard extends Component{


    render() {
        let percentage = Math.random()
        let status = percentage < 0.5 ? Intent.DANGER : percentage < 0.85 ? Intent.WARNING : Intent.SUCCESS;
        return (
            <Card interactive={true} elevation={Elevation.TWO} className="recipient-card" onClick={this.handleClick}>
                <h4>{this.props.recipient.name}</h4>
                <div>{this.props.recipient.budget}</div>
                <Button minimal={true} icon={IconNames.MORE} className="cardmenu" />
                <ProgressBar animate={false} stripes={false} intent={status} value={percentage} />
                <RecipientGiftList uuid={this.props.uuid}></RecipientGiftList>
            </Card>
        )
    }
}

export default RecipientCard
