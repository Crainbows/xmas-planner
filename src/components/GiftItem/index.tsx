import React from "react";
import { Card, Button, Intent, ButtonGroup, Icon } from "@blueprintjs/core";
import { Gift } from "../../types";
import { IconNames } from "@blueprintjs/icons";
import "./GiftItem.sass";
import { useDispatch, useSelector } from "react-redux";
import { updateGift } from "../../actions/gift";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { closeGiftDrawer } from "../../actions/giftDrawer";
import { AppState } from "../../reducer";

export interface IGiftItem {
  gift: Gift;
}

export interface IGiftDragItem {}

const GiftItem = (props: IGiftItem) => {
  const year = useSelector((state: AppState) => state.year);
  const dispatch = useDispatch();
  const [, dragRef, previewRef] = useDrag({
    item: { type: "GiftItem", uuid: props.gift.uuid },
    begin: () => {
      // Dragging from the GiftDrawer doesn't work in Chrome without the timeout. :/
      setTimeout(() => {
        dispatch(closeGiftDrawer());
      }, 0);
    },
    end: (
      item: { name: string; uuid: string } | undefined,
      monitor: DragSourceMonitor
    ) => {
      const dropResult = monitor.getDropResult();
      if (dropResult === null) return;
      if (item && dropResult.name === "RecipientCard") {
        dispatch(
          updateGift({
            uuid: item.uuid,
            recipientid: dropResult.uuid,
            year: year,
          })
        );
      } else if (item && dropResult.name === "GiftDrawer") {
        dispatch(
          updateGift({
            uuid: item.uuid,
            recipientid: "",
            year: 0,
          })
        );
      }
    },
  });

  return (
    <div ref={previewRef}>
      <Card className="gift-item">
        <div ref={dragRef}>
          <Icon icon={IconNames.DRAG_HANDLE_VERTICAL} />
        </div>
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
              dispatch(
                updateGift({ ...props.gift, isMade: !props.gift.isMade })
              )
            }
            icon={IconNames.BUILD}
          />
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default GiftItem;
