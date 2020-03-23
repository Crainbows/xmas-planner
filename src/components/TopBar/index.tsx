import React from "react";
import "./topbar.scss";
import { incrementYear, decrementYear } from "../../actions/year";
import { Button, ButtonGroup } from "@blueprintjs/core";
import { useDispatch, useSelector } from "react-redux";
import { IconNames } from "@blueprintjs/icons";
import { addNewRecipient } from "../../actions/recipient";
import { toggleGiftDrawer } from "../../actions/giftDrawer";
import { AppState } from "../../reducer";

const TopBar = () => {
  const dispatch = useDispatch();
  const year = useSelector((state: AppState) => state.year);
  const numberOfRecipients = useSelector(
    (state: AppState) => state.recipients.length
  );
  const thisYear = new Date().getFullYear();
  let centerBar;
  switch (year) {
    case thisYear:
      centerBar = "This Year";
      break;
    case thisYear - 1:
      centerBar = "Last Year";
      break;
    case thisYear + 1:
      centerBar = "Next Year";
      break;
    default:
      centerBar = year;
      break;
  }
  let controls = (
    <ButtonGroup>
      <Button
        text="Add Recipient"
        icon={IconNames.NEW_PERSON}
        onClick={() => dispatch(addNewRecipient())}
      />
      <Button
        text="Gift List"
        icon={IconNames.LIST_DETAIL_VIEW}
        onClick={() => dispatch(toggleGiftDrawer())}
      />
    </ButtonGroup>
  );
  return (
    <nav className="topbar">
      <Button
        icon="arrow-left"
        text={year - 1}
        onClick={() => dispatch(decrementYear())}
      />
      <div>
        <span>{centerBar}</span>
        {numberOfRecipients === 0 ? "" : controls}
      </div>
      <Button
        rightIcon="arrow-right"
        text={year + 1}
        onClick={() => dispatch(incrementYear())}
      />
    </nav>
  );
};

export default TopBar;
