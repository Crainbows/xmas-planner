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

export const GiftDrawer = () => {
  const dispatch = useDispatch();
  const darkmode = useSelector((state: AppState) => state.darkmode);
  const isOpen = useSelector((state: AppState) => state.giftDrawer);
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
          <p>
            Palantir Foundry radically reimagines the way enterprises interact
            with data by amplifying and extending the power of data integration.
            With Foundry, anyone can source, fuse, and transform data into any
            shape they desire. Business analysts become data engineers — and
            leaders in their organization’s data revolution.
          </p>
          <p>
            Foundry’s back end includes a suite of best-in-class data
            integration capabilities: data provenance, git-style versioning
            semantics, granular access controls, branching, transformation
            authoring, and more. But these powers are not limited to the
            back-end IT shop.
          </p>
          <p>
            In Foundry, tables, applications, reports, presentations, and
            spreadsheets operate as data integrations in their own right. Access
            controls, transformation logic, and data quality flow from original
            data source to intermediate analysis to presentation in real time.
            Every end product created in Foundry becomes a new data source that
            other users can build upon. And the enterprise data foundation goes
            where the business drives it.
          </p>
          <p>
            Start the revolution. Unleash the power of data integration with
            Palantir Foundry.
          </p>
        </div>
      </div>
    </Drawer>
  );
};

export default GiftDrawer;
