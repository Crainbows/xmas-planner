import React, { Component } from "react";
import { ADD_RECIPIENT } from "../actions/recipient";

import './addUser.scss';
import { connect } from "react-redux";

class AddUserButton extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.props.addRecipient();
    }

    render() {
        return (
            <button className="add-recipient" onClick={this.handleClick}>+</button>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
           addRecipient: () => dispatch({ type: ADD_RECIPIENT }),
           };
  };

export default connect(null, mapDispatchToProps)(AddUserButton)
