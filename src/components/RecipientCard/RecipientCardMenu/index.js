import React, { Component } from "react";
import { Popover, Menu, Button, Position, Intent } from '@blueprintjs/core';
import { IconNames } from "@blueprintjs/icons";
import { deleteRecipient } from "../../../actions/recipient";
import { connect } from "react-redux";


class RecipientCardMenu extends Component{
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete() {
        this.props.deleteRecipient(this.props.uuid);
    }
    render() {
        let menu = (
            <Menu>
                <Menu.Item icon={IconNames.EDIT} onClick={this.handleClick} text="Edit" />
                <Menu.Item icon={IconNames.TRASH} onClick={this.handleDelete} text="Delete" intent={Intent.DANGER} />
            </Menu>
        )
        return (
            <Popover content={menu} position={Position.RIGHT_TOP}>
                <Button minimal={true} icon={IconNames.MORE} className="cardmenu" />
            </Popover>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
            deleteRecipient: (uuid) => dispatch(deleteRecipient(uuid)),
        };
  };

export default connect(null, mapDispatchToProps)(RecipientCardMenu)