import React, { Component } from "react";
// import AddUserButton from "./addUser";
import { connect } from "react-redux";
import { Collapse } from '@blueprintjs/core';
// import './recipientCard.scss';
// import { connect } from "react-redux";

class RecipientGiftList extends Component{
    render() {
        let names = Object.entries(this.props.gifts).map(x => x[1].name);
        return (
                <Collapse isOpen={this.props.expanded}>
                    {names}
                    TEST TEXT<br />
                    TEST TEXT<br />
                    TEST TEXT<br />
                    TEST TEXT<br />
                    TEST TEXT<br />
                </Collapse>
        )
    }
}

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));

const mapStateToProps = (state, props) => {
    return { 
        gifts: filterObject(state.gifts, ([key, gift]) => gift.recipientid === props.uuid && gift.year === state.year)
    }
  }

export default connect(mapStateToProps, null)(RecipientGiftList)