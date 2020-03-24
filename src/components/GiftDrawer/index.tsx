import React, { useState } from "react";
import { AppState } from "../../reducer/";
import {
  ControlGroup,
  Drawer,
  Classes,
  InputGroup,
  Button,
} from "@blueprintjs/core";
import { toggleGiftDrawer } from "../../actions/giftDrawer";
import { useDispatch, useSelector } from "react-redux";
import { Gift } from "../../types";
import GiftItem from "../GiftItem";
import { useDrop } from "react-dnd";
import "./GiftDrawer.sass";
import { addGift } from "../../actions/gift";

export const GiftDrawer = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector((state: AppState) => state.darkmode);
  const isOpen = useSelector((state: AppState) => state.giftDrawer);
  const giftList = useSelector((state: AppState) =>
    state.gifts.filter((gift: Gift) => gift.recipientid === "")
  );
  const initialnewGift = { name: "", price: 0, recipientid: "" };
  const [newGift, setnewGift] = useState(initialnewGift);

  const [, dropRef] = useDrop({
    accept: "GiftItem",
    drop: () => ({ name: "GiftDrawer" }),
  });
  return (
    <Drawer
      className={darkmode ? "bp3-dark" : "bp3-light"}
      icon="info-sign"
      onClose={() => dispatch(toggleGiftDrawer())}
      title="Gift Drawer"
      isOpen={isOpen}
      autoFocus={true}
      canEscapeKeyClose={true}
      canOutsideClickClose={true}
      enforceFocus={true}
      hasBackdrop={true}
    >
      <div ref={dropRef} className={Classes.DRAWER_BODY}>
        <div className={Classes.DIALOG_BODY}>
          <ControlGroup fill={true} className="new-gift">
            <InputGroup
              large={true}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setnewGift({
                  ...newGift,
                  name: event.target.value,
                });
              }}
              placeholder="New Gift..."
              // rightElement={<Spinner size={Icon.SIZE_STANDARD} />}
            />
            <InputGroup
              large={true}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setnewGift({
                  ...newGift,
                  price: Number(event.target.value),
                });
              }}
              placeholder="£"
              // rightElement={<Spinner size={Icon.SIZE_STANDARD} />}
            />
            <Button
              text="Add"
              onClick={() => {
                dispatch(addGift(newGift));
                setnewGift(initialnewGift);
              }}
            />
          </ControlGroup>
          <div className="available-gifts">
            {giftList.map((gift: Gift) => (
              <GiftItem key={gift.uuid} gift={gift} />
            ))}
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default GiftDrawer;
