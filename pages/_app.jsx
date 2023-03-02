import { useState } from "react";
import { ShowHideContext } from "../components/ShowHide";

export default function MyApp({ Component, pageProps }) {
  const [info, setInfo] = useState({});
  const setShow = (name, value) => {
    setInfo({ ...info, [name]: value });
  };
  return (
    <ShowHideContext.Provider value={{ info, setShow }}>
      <Component {...pageProps} />
    </ShowHideContext.Provider>
  );
}
