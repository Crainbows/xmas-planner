import React, { Component } from "react";
import { connect } from "react-redux";

import RecipientCard from "../RecipientCard"
import './RecipientList.scss';
import { Button, NonIdealState, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { addNewRecipient } from '../../actions/recipient';


class RecipientList extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.addRecipient();
    }

    render() {
        let recipientList;
        if (this.props.recipients.length === 0){
            let action = <Button icon={IconNames.NEW_PERSON} intent={Intent.PRIMARY} text="Add Someone" onClick={this.handleClick} />
            recipientList = (<NonIdealState
            icon={IconNames.ISSUE}
            title="Nobody here&hellip;"
            action={action}
        />)
        } else {
            recipientList = Object.keys(this.props.recipients).map(key => {
                return <RecipientCard key={key} uuid={this.props.recipients[key].uuid} recipient={this.props.recipients[key]}></RecipientCard>;
            });
        }
        return (
            <div className="recipient-list">
                {recipientList}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { 
        recipients: state.recipients
    }
  }

const mapDispatchToProps = (dispatch) => {
return {
            addRecipient: () => dispatch(addNewRecipient()),
        };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipientList)
