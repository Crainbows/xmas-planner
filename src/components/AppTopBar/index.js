import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
} from "@blueprintjs/core";
import React from "react"

const AppTopBar = () => {
    return (
    <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
            <NavbarHeading>Xmas Planner</NavbarHeading>
            <NavbarDivider />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
            <Button className={Classes.MINIMAL} icon="user" text="My Account" />
        </NavbarGroup>
    </Navbar>
    );
}

export default AppTopBar;