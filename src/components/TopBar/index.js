import React, { Component } from 'react';
import './topbar.scss';
import { incrementYear, decrementYear } from '../../actions/year';
import { Button } from '@blueprintjs/core';
import { connect } from 'react-redux';

class TopBar extends Component {
    constructor(props) {
        super(props);
        this.incrementYear = this.props.incrementYear.bind(this);
        this.decrementYear = this.props.decrementYear.bind(this);
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
        return (
            <nav>
                {/* <button onClick={this.decrementYear}>{this.props.year-1}</button> */}
                <Button icon="arrow-left" text={this.props.year-1} onClick={this.decrementYear} />
                <div>{centerBar}</div>
                {/* <button onClick={this.incrementYear}>{this.props.year+1}</button> */}
                <Button rightIcon="arrow-right" text={this.props.year+1} onClick={this.incrementYear} />
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return { 
        year: state.year
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
            incrementYear: () => dispatch(incrementYear()),
            decrementYear: () => dispatch(decrementYear()),
        };
  };

export default connect(mapStateToProps, mapDispatchToProps)(TopBar)