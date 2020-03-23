import React from "react";
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

export const GiftDrawer = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector((state: AppState) => state.darkmode);
  const isOpen = useSelector((state: AppState) => state.giftDrawer);
  const giftList = useSelector((state: AppState) =>
    state.gifts.filter((gift: Gift) => gift.recipientid === "")
  );

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
      usePortal={true}
    >
      <div className={Classes.DRAWER_BODY}>
        <div className={Classes.DIALOG_BODY}>
          <ControlGroup fill={true}>
            <InputGroup
              large={true}
              // onChange={this.handleFilterChange}
              placeholder="New Gift..."
              // rightElement={<Spinner size={Icon.SIZE_STANDARD} />}
              // value={filterValue}
            />
            <InputGroup
              large={true}
              // onChange={this.handleFilterChange}
              placeholder="New Gift..."
              // rightElement={<Spinner size={Icon.SIZE_STANDARD} />}
              // value={filterValue}
            />
            <Button text="Add" />
          </ControlGroup>
          {giftList.map((gift: Gift) => (
            <GiftItem key={gift.uuid} gift={gift} />
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default GiftDrawer;
