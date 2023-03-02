import React, {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
} from "react";

/**
  Добавьте реквизит имени для обоих компонентов, и вы сможете сопоставлять имена экземпляров, которые хотите связать вместе. Сделайте так, чтобы контекст сохранял объект {string, boolean}, что означает, что компонент со строкой имени должен быть открыт или нет. А для setShow он должен получить и имя, и значение, чтобы установить правильно
 */

export const ShowHideContext = createContext({
  name: "",
  show: true,
  setShow: () => {},
});

export function ShowHideAction({ children, name, ...props }) {
  const ctx = useContext(ShowHideContext);
  return cloneElement(React.Children.toArray(children)[0], {
    onClick: () => {
      ctx.setShow(!ctx.show);
    },
  });
}

export function ShowHideContent({ children, name }) {
  const ctx = useContext(ShowHideContext);
  return <>{ctx.show ? children : null}</>;
}
