import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Collapse, Button } from '@blueprintjs/core';
import { IconNames } from "@blueprintjs/icons";
import './recipientGiftList.sass';

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(predicate));

const RecipientGiftList = props => {
    const [expanded, setExpanded] = useState(false);
    const gifts = useSelector(state => filterObject(state.gifts, ([key, gift]) => gift.recipientid === props.uuid && gift.year === state.year));
    let names = Object.entries(gifts).map(x => x[1].name);
    let icon = expanded ? IconNames.CHEVRON_UP : IconNames.CHEVRON_DOWN;
    return (
        <div className="giftlist">
            <Collapse isOpen={expanded}>
                {names}
                TEST TEXT<br />
                TEST TEXT<br />
                TEST TEXT<br />
                TEST TEXT<br />
                TEST TEXT<br />
            </Collapse>
            <Button className="expand-gift-list" icon={icon} minimal={true} onClick={() => setExpanded(!expanded)} />
        </div>
    )
}

export default RecipientGiftList