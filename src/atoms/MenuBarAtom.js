import { atom } from "recoil";

export const menuState = atom({
  key: "menuState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
