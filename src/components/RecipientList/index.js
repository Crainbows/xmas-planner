import React, { Component } from "react";
import { connect } from "react-redux";

import RecipientCard from "../RecipientCard"
import './RecipientList.scss';

class RecipientList extends Component {
    constructor(props) {
        super(props);
        this.setState({});
    }

    render() {
        let recipientList
        if (this.props.recipients.length === 0){
            recipientList = <div className="no-recipients">Nobody here</div>
        } else {
            recipientList = this.props.recipients.map(recipient => <RecipientCard key={recipient.uuid} recipient={recipient}></RecipientCard>);
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

export default connect(mapStateToProps)(RecipientList)
