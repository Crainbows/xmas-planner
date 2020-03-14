import React, { Component } from 'react';
import './topbar.scss';
import { incrementYear, decrementYear } from '../../actions/year';
import { Button, ButtonGroup } from '@blueprintjs/core';
import { connect } from 'react-redux';
import { IconNames } from '@blueprintjs/icons';
import { addNewRecipient } from "../../actions/recipient";
import { toggleGiftDrawer } from "../../actions/giftDrawer";
import GiftDrawer from '../GiftDrawer'

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.incrementYear = this.props.incrementYear.bind(this);
        this.decrementYear = this.props.decrementYear.bind(this);
        this.addRecipient = this.props.addRecipient.bind(this);
        this.toggleGiftDrawer = this.props.toggleGiftDrawer.bind(this);
        this.state = {
            drawerStatus: false
        };
    }

    render() {
        const thisYear = new Date().getFullYear()
        let centerBar;
        switch(this.props.year){
            case thisYear:
                centerBar = "This Year"
                break;
            case thisYear-1:
                centerBar = "Last Year"
                break;
            case thisYear+1:
                centerBar = "Next Year"
                break;
            default:
                centerBar = this.props.year;
                break;
        }
        let controls = (<ButtonGroup>
            <Button text="Add Recipient" icon={IconNames.NEW_PERSON} onClick={this.addRecipient}/>
            <Button text="Gift List" icon={IconNames.LIST_DETAIL_VIEW} onClick={this.toggleGiftDrawer}/>
        </ButtonGroup>)
        return (
            <nav className="topbar">
                <Button icon="arrow-left" text={this.props.year-1} onClick={this.decrementYear} />
                <div>
                    <span>
                        {centerBar}
                    </span>
                    {(Object.keys(this.props.people).length === 0 && this.props.people.constructor === Object) ? "" : controls}
                </div>
                <Button rightIcon="arrow-right" text={this.props.year+1} onClick={this.incrementYear} />
                <GiftDrawer />
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { 
        year: state.year,
        people: state.recipients,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
            incrementYear: () => dispatch(incrementYear()),
            decrementYear: () => dispatch(decrementYear()),
            addRecipient: () => dispatch(addNewRecipient()),
            toggleGiftDrawer: () => dispatch(toggleGiftDrawer()),
        };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)