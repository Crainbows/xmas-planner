import React from "react";
import { useDispatch, useSelector } from "react-redux";

import RecipientCard from "../RecipientCard";
import "./RecipientList.scss";
import { Button, NonIdealState, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { addNewRecipient } from "../../actions/recipient";
import { AppState } from "../../reducer";
import { Recipient } from "../../types";
import { openGiftDrawer } from "../../actions/giftDrawer";
import { useDrop } from "react-dnd";

const RecipientList = () => {
  const dispatch = useDispatch();
  const recipients = useSelector((state: AppState) => state.recipients);
  const [, dropRef] = useDrop({
    accept: "GiftItem",
    hover: (item) => {
      dispatch(openGiftDrawer());
    },
  });
  let recipientList;
  if (recipients.length === 0) {
    let action = (
      <Button
        icon={IconNames.NEW_PERSON}
        intent={Intent.PRIMARY}
        text="Add Someone"
        onClick={() => dispatch(addNewRecipient())}
      />
    );
    recipientList = (
      <NonIdealState
        icon={IconNames.ISSUE}
        title="Nobody here&hellip;"
        action={action}
      />
    );
  } else {
    recipientList = recipients.map((recipient: Recipient, key: number) => {
      return (
        <RecipientCard
          key={key}
          uuid={recipient.uuid}
          recipient={recipient}
        ></RecipientCard>
      );
    });
  }

  return (
    <>
      <div className="recipient-list">{recipientList}</div>
      <div ref={dropRef} className="trigger-drawer"></div>
    </>
  );
};

export default RecipientList;
