import React from "react";
import { Card, Icon, Button } from "@blueprintjs/core";
import { Gift } from "../../types";
import { IconNames } from "@blueprintjs/icons";

export interface IGiftItem {
  gift: Gift;
}

const GiftItem = (props: IGiftItem) => {
  return (
    <Card>
      {props.gift.name}
      <Button minimal={true}>TEST</Button>
      <Icon icon={IconNames.DOLLAR} />
      <Icon icon={IconNames.COMPRESSED} />
      <Icon icon={IconNames.BOX} />
      <Icon icon={IconNames.BUILD} />
    </Card>
  );
};

export default GiftItem;
