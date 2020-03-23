import React from "react";
import { Card, Elevation, Intent, ProgressBar } from "@blueprintjs/core";
import RecipientGiftList from "../RecipientGiftList";
import RecipientCardMenu from "./RecipientCardMenu";

import "./recipientCard.scss";
import { Recipient } from "../../types";

interface IRecipientCardProps {
  recipient: Recipient;
  uuid: string;
}

const RecipientCard = (props: IRecipientCardProps) => {
  let percentage = Math.random();
  let status =
    percentage < 0.5
      ? Intent.DANGER
      : percentage < 0.85
      ? Intent.WARNING
      : Intent.SUCCESS;
  return (
    <Card
      interactive={true}
      elevation={Elevation.TWO}
      className="recipient-card"
    >
      <h4>{props.recipient.name}</h4>
      <div>{props.recipient.budget}</div>
      <RecipientCardMenu uuid={props.uuid}></RecipientCardMenu>
      <ProgressBar
        animate={false}
        stripes={false}
        intent={status}
        value={percentage}
      />
      <RecipientGiftList uuid={props.uuid}></RecipientGiftList>
    </Card>
  );
};

export default RecipientCard;
