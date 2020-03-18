import React, { Component } from "react";
import { Alert,
         Classes,
         Popover,
         Menu,
         Button,
         Dialog,
         Position,
         Intent,
         FormGroup,
        InputGroup } from '@blueprintjs/core';
import { IconNames } from "@blueprintjs/icons";
import { deleteRecipient, updateRecipient } from "../../../actions/recipient";
import { connect } from "react-redux";


class RecipientCardMenu extends Component{
    constructor(props) {
        super(props);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleDeleteCancel = this.handleDeleteCancel.bind(this);
        this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.handleEditClose = this.handleEditClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveChanges = this.saveChanges.bind(this);

        this.state = {
            deleteAlertOpen: false,
            editDialogOpen: false,
            ...this.props.recipient,
        }
    }
    handleDeleteClick() {
        this.setState({deleteAlertOpen: true});
    }
    handleDeleteConfirm() {
        this.props.deleteRecipient(this.props.uuid);
        this.setState({deleteAlertOpen: false});
    }
    handleDeleteCancel() {
        this.setState({deleteAlertOpen: false});
    }
    handleEditClick() {
        this.setState({editDialogOpen: true});
    }
    handleEditClose() {
        this.setState({editDialogOpen: false});
    }
    handleChange(event) {
        switch(event.target.id){
            case "recipient-name":
                this.setState({name: event.target.value});
                break;
            case "recipient-budget":
                this.setState({budget: event.target.value});
                break;
            default:
                break;
        }
    }
    saveChanges() {
        this.props.updateRecipient(this.state);
        this.handleEditClose();
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item icon={IconNames.EDIT} onClick={this.handleEditClick} text="Edit" />
                <Menu.Item icon={IconNames.TRASH} onClick={this.handleDeleteClick} text="Delete" intent={Intent.DANGER} />
            </Menu>
        )
        return (
            <>
                <Popover content={menu} position={Position.RIGHT_TOP}>
                    <Button minimal={true} icon={IconNames.MORE} className="cardmenu" />
                </Popover>
                <Alert
                    className={this.props.darkmode ? "bp3-dark" : "bp3-light"}
                    cancelButtonText="Cancel"
                    confirmButtonText="Delete"
                    icon="trash"
                    intent={Intent.DANGER}
                    isOpen={this.state.deleteAlertOpen}
                    onCancel={this.handleDeleteCancel}
                    onConfirm={this.handleDeleteConfirm}
                    >
                    <p>
                        Are you sure you want to delete?<br />
                        This change cannot be undone!
                    </p>
                </Alert>
                <Dialog
                    isOpen={this.state.editDialogOpen}
                    onClose={this.handleEditClose}
                    className={this.props.darkmode ? "bp3-dark" : "bp3-light"}
                    autoFocus={true}
                    canEscapeKeyClose={true}
                    canOutsideClickClose={true}
                    enforceFocus={true}
                    hasBackdrop={true}
                    usePortal={true}
                    title="Edit Recipient"
                    icon={IconNames.EDIT}
                    >
                    <div className={Classes.DIALOG_BODY}>
                        <FormGroup
                            label="Name"
                            labelFor="recipient-name"
                            inline={true}
                        >
                            <InputGroup onChange={this.handleChange} defaultValue={this.state.name} id="recipient-name" placeholder="Joe Bloggs" />
                        </FormGroup>
                        <FormGroup
                            label="Budget"
                            labelFor="recipient-budget"
                            inline={true}
                        >
                            <InputGroup onChange={this.handleChange} defaultValue={this.state.budget} id="recipient-budget" placeholder="20" leftIcon={IconNames.DOLLAR} />
                        </FormGroup>
                        <Button intent={Intent.PRIMARY} onClick={this.saveChanges}>Save</Button>
                    </div>
                </Dialog>
            </>
        )
    }
}

const mapStateToProps = (state, props) => {
    return { 
        darkmode: state.darkmode,
        recipient: state.recipients.filter(person => person.uuid === props.uuid)[0],
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
            deleteRecipient: (uuid) => dispatch(deleteRecipient(uuid)),
            updateRecipient: (uuid) => dispatch(updateRecipient(uuid)),
        };
  };

export default connect(mapStateToProps, mapDispatchToProps)(RecipientCardMenu)