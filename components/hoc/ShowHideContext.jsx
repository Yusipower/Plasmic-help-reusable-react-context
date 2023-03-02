import { createContext } from "react";

export const ShowHideContext = createContext({
  show: true,
  setShow: () => {},
});
