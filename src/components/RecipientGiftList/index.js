import React, { Component } from "react";
import { connect } from "react-redux";
import { Collapse, Button } from '@blueprintjs/core';
import { IconNames } from "@blueprintjs/icons";
import './recipientGiftList.sass';

class RecipientGiftList extends Component{
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
        let names = Object.entries(this.props.gifts).map(x => x[1].name);
        let icon = this.state.expanded ? IconNames.CHEVRON_UP : IconNames.CHEVRON_DOWN;
        return (
            <div className="giftlist">
                <Collapse isOpen={this.state.expanded}>
                    {names}
                    TEST TEXT<br />
                    TEST TEXT<br />
                    TEST TEXT<br />
                    TEST TEXT<br />
                    TEST TEXT<br />
                </Collapse>
                <Button className="expand-gift-list" icon={icon} minimal={true} onClick={this.handleClick} />
            </div>
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