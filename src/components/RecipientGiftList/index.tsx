import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Collapse, Button } from "@blueprintjs/core";
import { IconNames, IconName } from "@blueprintjs/icons";
import "./recipientGiftList.sass";
import { AppState } from "../../reducer";
import { Gift } from "../../types";
import GiftItem from "../GiftItem";
// import { findAllIndexes } from '../../utils/array'

interface IRecipientGiftListProps {
  uuid: string;
}

const RecipientGiftList = (props: IRecipientGiftListProps) => {
  const [expanded, setExpanded] = useState(false);
  const gifts = useSelector((state: AppState) =>
    state.gifts.filter(
      (gift: Gift) =>
        gift.recipientid === props.uuid && gift.year === state.year
    )
  );
  let names = gifts.map((gift: Gift) => <GiftItem gift={gift} />);
  let icon: IconName = expanded ? IconNames.CHEVRON_UP : IconNames.CHEVRON_DOWN;
  return (
    <div className="giftlist">
      <Collapse isOpen={expanded}>{names}</Collapse>
      <Button
        className="expand-gift-list"
        icon={icon}
        minimal={true}
        onClick={() => setExpanded(!expanded)}
      />
    </div>
  );
};

export default RecipientGiftList;
