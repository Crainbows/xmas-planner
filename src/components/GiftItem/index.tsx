import React from "react";
import { Card, Button, Intent, ButtonGroup, Icon } from "@blueprintjs/core";
import { Gift } from "../../types";
import { IconNames } from "@blueprintjs/icons";
import "./GiftItem.sass";
import { useDispatch } from "react-redux";
import { updateGift } from "../../actions/gift";

export interface IGiftItem {
  gift: Gift;
}

const GiftItem = (props: IGiftItem) => {
  const dispatch = useDispatch();

  return (
    <Card className="gift-item">
      <Icon icon={IconNames.DRAG_HANDLE_VERTICAL} />
      <h4 className="gift-name">{props.gift.name}</h4>
      <h4 className="gift-price">{props.gift.price}</h4>
      <ButtonGroup>
        <Button
          minimal={true}
          intent={props.gift.isPurchased ? Intent.SUCCESS : Intent.DANGER}
          onClick={() =>
            dispatch(
              updateGift({
                ...props.gift,
                isPurchased: !props.gift.isPurchased,
              })
            )
          }
          icon={IconNames.DOLLAR}
        />
        <Button
          minimal={true}
          intent={props.gift.isDelivered ? Intent.SUCCESS : Intent.DANGER}
          onClick={() =>
            dispatch(
              updateGift({
                ...props.gift,
                isDelivered: !props.gift.isDelivered,
              })
            )
          }
          icon={IconNames.COMPRESSED}
        />
        <Button
          minimal={true}
          intent={props.gift.isWrapped ? Intent.SUCCESS : Intent.DANGER}
          onClick={() =>
            dispatch(
              updateGift({ ...props.gift, isWrapped: !props.gift.isWrapped })
            )
          }
          icon={IconNames.BOX}
        />
        <Button
          minimal={true}
          intent={props.gift.isMade ? Intent.SUCCESS : Intent.DANGER}
          onClick={() =>
            dispatch(updateGift({ ...props.gift, isMade: !props.gift.isMade }))
          }
          icon={IconNames.BUILD}
        />
      </ButtonGroup>
    </Card>
  );
};

export default GiftItem;
