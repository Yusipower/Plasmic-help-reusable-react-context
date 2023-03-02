import { useState } from "react";
import { ShowHideContext } from "../components/ShowHide";

export default function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState("name", true);
  return (
    <ShowHideContext.Provider value={{ show, setShow }}>
      <Component {...pageProps} />
    </ShowHideContext.Provider>
  );
}
