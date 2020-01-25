import React, { Component } from "react";
import AddUserButton from "./addUser";

import './core.scss';
import { connect } from "react-redux";

class Core extends Component{
    contructor(props) {
        // super(props);
        this.setState({});
    }

    render() {
        let recipientList
        if (this.props.recipients.length === 0){
            recipientList = <div>Nobody here</div>
        } else {
            recipientList = this.props.recipients.map(recipient => <div key={recipient.uuid}>{recipient.name}</div>);
        }
        return (
            <main>
                <nav>
                    <button>2019</button>
                    <div>This Year</div>
                    <button>2021</button>
                </nav>
                <div>
                    {recipientList}
                    <AddUserButton></AddUserButton>
                </div>
            </main>
        )
    }
}


function mapStateToProps(state) {
    return { 
        recipients: state.recipients
    }
  }

export default connect(mapStateToProps)(Core)