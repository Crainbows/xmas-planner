import React, { useState } from "react";
import { Card, Button, Intent, ButtonGroup } from "@blueprintjs/core";
import { Gift } from "../../types";
import { IconNames } from "@blueprintjs/icons";

export interface IGiftItem {
  gift: Gift;
}

const GiftItem = (props: IGiftItem) => {
  const [isPurchased, setisPurchased] = useState(false);
  const [isDelivered, setisDelivered] = useState(false);
  const [isWrapped, setisWrapped] = useState(false);
  const [isMade, setisMade] = useState(false);
  return (
    <Card>
      <h4>{props.gift.name}</h4>
      <ButtonGroup>
        <Button
          minimal={true}
          intent={isPurchased ? Intent.SUCCESS : Intent.DANGER}
          onClick={() => setisPurchased(!isPurchased)}
          icon={IconNames.DOLLAR}
        />
        <Button
          minimal={true}
          intent={isDelivered ? Intent.SUCCESS : Intent.DANGER}
          onClick={() => setisDelivered(!isDelivered)}
          icon={IconNames.COMPRESSED}
        />
        <Button
          minimal={true}
          intent={isWrapped ? Intent.SUCCESS : Intent.DANGER}
          onClick={() => setisWrapped(!isWrapped)}
          icon={IconNames.BOX}
        />
        <Button
          minimal={true}
          intent={isMade ? Intent.SUCCESS : Intent.DANGER}
          onClick={() => setisMade(!isMade)}
          icon={IconNames.BUILD}
        />
      </ButtonGroup>
    </Card>
  );
};

export default GiftItem;
