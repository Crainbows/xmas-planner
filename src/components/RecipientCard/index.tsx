import React from "react";
import { Card, Elevation, Intent, ProgressBar } from "@blueprintjs/core";
import RecipientGiftList from "../RecipientGiftList";
import RecipientCardMenu from "./RecipientCardMenu";
import { useDrop } from "react-dnd";
import "./recipientCard.scss";
import { Recipient, Gift } from "../../types";
import { useSelector } from "react-redux";
import { AppState } from "../../reducer";

interface IRecipientCardProps {
  recipient: Recipient;
  uuid: string;
}

const RecipientCard = (props: IRecipientCardProps) => {
  const gifts = useSelector((state: AppState) =>
    state.gifts.filter(
      (gift: Gift) =>
        gift.recipientid === props.uuid && gift.year === state.year
    )
  );

  const totalGifts = gifts.reduce(
    (acc: number, gift: Gift) => acc + gift.price,
    0
  );

  const [, dropRef] = useDrop({
    accept: "GiftItem",
    drop: () => ({ name: "RecipientCard", uuid: props.recipient.uuid }),
  });

  let percentage =
    totalGifts < props.recipient.budget
      ? totalGifts / props.recipient.budget
      : 1;

  let status =
    percentage < 0.5
      ? Intent.DANGER
      : percentage < 0.85
      ? Intent.WARNING
      : Intent.SUCCESS;

  return (
    <div ref={dropRef} className="recipient-card">
      <Card elevation={Elevation.TWO}>
        <div className="card-header">
          <h4>{props.recipient.name}</h4>
          <div>
            {totalGifts}&nbsp;/&nbsp;{props.recipient.budget}
          </div>
          <RecipientCardMenu uuid={props.uuid}></RecipientCardMenu>
        </div>
        <ProgressBar
          animate={false}
          stripes={false}
          intent={status}
          value={percentage}
        />
        <RecipientGiftList uuid={props.uuid}></RecipientGiftList>
      </Card>
    </div>
  );
};

export default RecipientCard;
