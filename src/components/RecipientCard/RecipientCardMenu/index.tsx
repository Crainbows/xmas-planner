import React, { useState } from "react";
import {
  Alert,
  Classes,
  Popover,
  Menu,
  Button,
  Dialog,
  Position,
  Intent,
  FormGroup,
  InputGroup,
} from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { deleteRecipient, updateRecipient } from "../../../actions/recipient";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../reducer";
import { Recipient } from "../../../types";

interface IRecipientCardMenuProps {
  uuid: string;
}

type IEditUser = Partial<Recipient>;

const RecipientCardMenu = (props: IRecipientCardMenuProps) => {
  const darkmode = useSelector((state: AppState) => state.darkmode);
  const stateRecipient = useSelector(
    (state: AppState) =>
      state.recipients.filter((person) => person.uuid === props.uuid)[0]
  );
  const dispatch = useDispatch();
  const [deleteAlertOpen, setdeleteAlertOpen] = useState(false);
  const [editDialogOpen, seteditDialogOpen] = useState(false);
  const [recipient, setRecipient] = useState<IEditUser>(stateRecipient);

  const menu = (
    <Menu>
      <Menu.Item
        icon={IconNames.EDIT}
        onClick={() => seteditDialogOpen(true)}
        text="Edit"
      />
      <Menu.Item
        icon={IconNames.TRASH}
        onClick={() => setdeleteAlertOpen(true)}
        text="Delete"
        intent={Intent.DANGER}
      />
    </Menu>
  );
  return (
    <>
      <Popover content={menu} position={Position.RIGHT_TOP}>
        <Button minimal={true} icon={IconNames.MORE} className="cardmenu" />
      </Popover>
      <Alert
        className={darkmode ? "bp3-dark" : "bp3-light"}
        cancelButtonText="Cancel"
        confirmButtonText="Delete"
        icon="trash"
        intent={Intent.DANGER}
        isOpen={deleteAlertOpen}
        onCancel={() => setdeleteAlertOpen(false)}
        onConfirm={() => {
          dispatch(deleteRecipient(props.uuid));
          setdeleteAlertOpen(false);
        }}
      >
        <p>
          Are you sure you want to delete?
          <br />
          This change cannot be undone!
        </p>
      </Alert>
      <Dialog
        isOpen={editDialogOpen}
        onClose={() => seteditDialogOpen(false)}
        className={darkmode ? "bp3-dark" : "bp3-light"}
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
          <FormGroup label="Name" labelFor="recipient-name" inline={true}>
            <InputGroup
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setRecipient({ ...recipient, name: event.target.value });
              }}
              defaultValue={recipient.name}
              id="recipient-name"
              placeholder="Joe Bloggs"
            />
          </FormGroup>
          <FormGroup label="Budget" labelFor="recipient-budget" inline={true}>
            <InputGroup
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setRecipient({
                  ...recipient,
                  budget: Number(event.target.value),
                });
              }}
              defaultValue={String(recipient.budget)}
              id="recipient-budget"
              placeholder="20"
              leftIcon={IconNames.DOLLAR}
            />
          </FormGroup>
          <Button
            intent={Intent.PRIMARY}
            onClick={() => {
              dispatch(updateRecipient(recipient));
              seteditDialogOpen(false);
            }}
          >
            Save
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default RecipientCardMenu;
