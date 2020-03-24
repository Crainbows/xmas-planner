import { AppState } from "../../reducer";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
} from "@blueprintjs/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_DARK_MODE } from "../../actions/darkmode";
import { IconNames, IconName } from "@blueprintjs/icons";

const AppTopBar = () => {
  const dispatch = useDispatch();
  const DARKMODE = useSelector((state: AppState) => state.darkmode);
  let themeIcon: IconName = DARKMODE ? IconNames.FLASH : IconNames.MOON;
  return (
    <Navbar>
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Xmas Planner</NavbarHeading>
        <NavbarDivider />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button
          className={Classes.MINIMAL}
          icon={themeIcon}
          onClick={() => dispatch({ type: TOGGLE_DARK_MODE })}
        />
        <NavbarDivider />
        <Button className={Classes.MINIMAL} icon="user" text="My Account" />
      </NavbarGroup>
    </Navbar>
  );
};

export default AppTopBar;
