const TOGGLE_GIFT_DRAWER = "TOGGLE_GIFT_DRAWER";
const OPEN_GIFT_DRAWER = "OPEN_GIFT_DRAWER";
const CLOSE_GIFT_DRAWER = "CLOSE_GIFT_DRAWER";

const toggleGiftDrawer = () => {
  return {
    type: TOGGLE_GIFT_DRAWER,
  };
};

const closeGiftDrawer = () => {
  return {
    type: CLOSE_GIFT_DRAWER,
  };
};

const openGiftDrawer = () => {
  return {
    type: OPEN_GIFT_DRAWER,
  };
};

export {
  TOGGLE_GIFT_DRAWER,
  OPEN_GIFT_DRAWER,
  CLOSE_GIFT_DRAWER,
  toggleGiftDrawer,
  closeGiftDrawer,
  openGiftDrawer,
};
