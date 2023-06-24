import React, { createContext, useEffect, useState, useCallback, useRef, useContext } from "react";
import { DefaultContext } from "../../const/common";
import { api } from "../../api/home/home.assembly";

export const MyAppContext = createContext(null as any);

export const MyAppProvider = ({ children }: any) => {
  const { location } = useContext(DefaultContext);

  const [states, setStates] = useState({
    myapp_header_modal: false,
    appList: [],
    refresh: false,
    open: false,
  });

  const { myapp_header_modal, appList, refresh } = states;

  const myAppModalOpen = useCallback(() => {
    setStates({
      ...states,
      myapp_header_modal: true,
    });
  }, [states]);

  const myAppModalClose = useCallback(() => {
    setStates({
      ...states,
      myapp_header_modal: false,
    });
  }, [states]);

  useEffect(() => {
    createAppList();
  }, [refresh]);

  const createAppList = useCallback(() => {
    api.get((data: any) => {
      setStates({
        ...states,
        appList: data.filter((v: any) => {
          return location.pathname.includes(v.APP_UUID);
        }),
      });
    });
  }, [states]);

  const handleOpen = useCallback(() => {
    setStates({
      ...states,
      open: true,
    });
  }, [states]);

  const handleClose = useCallback(() => {
    setStates({
      ...states,
      open: false,
    });
  }, [states]);

  console.log("call");

  const f0Click = useCallback((e: any) => {
    e.preventDefault();
    let target = document.querySelectorAll(".myapp-modal-body > p");
    let target2 = document.querySelectorAll("#my-app-modal-options");
    let target_class = target[0].getAttribute("class");

    target[0].removeAttribute("class");
    target2[0].removeAttribute("class");
    if (target_class === "off") {
      target[0].setAttribute("class", "on");
      target2[0].setAttribute("class", "on");
    } else {
      target[0].setAttribute("class", "off");
      target2[0].setAttribute("class", "off");
    }
  }, []);

  return <MyAppContext.Provider value={{ myAppModalOpen, states, myAppModalClose, handleOpen, handleClose, f0Click }}>{children}</MyAppContext.Provider>;
};
