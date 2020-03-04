import React, { Component } from "react";
import { connect } from "react-redux";

import RecipientCard from "../RecipientCard"
import './RecipientList.scss';

class RecipientList extends Component {
    render() {
        let recipientList;
        if (this.props.recipients.length === 0){
            recipientList = <div className="no-recipients">Nobody here</div>
        } else {
            recipientList = Object.keys(this.props.recipients).map(key => {
                return <RecipientCard key={key} uuid={key} recipient={this.props.recipients[key]}></RecipientCard>;
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

export default connect(mapStateToProps)(RecipientList)
