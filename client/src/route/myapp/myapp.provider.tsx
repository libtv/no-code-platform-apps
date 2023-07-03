import React, { createContext, useEffect, useState, useCallback, useRef, useContext, useMemo } from "react";
import { DefaultContext } from "../../const/common";
import { myapp_api } from "../../api/myapp/myapp.assembly";
import { api } from "../../api/home/home.assembly";

export const MyAppContext = createContext(null as any);

export const MyAppProvider = ({ children }: any) => {
  const { location } = useContext(DefaultContext);

  const [states, setStates] = useState({
    myapp_header_modal: false,
    appList: [],
    refresh: false,
    open: false,
    myapp_modal_table_name: crypto.randomUUID(),
    myapp_modal_filed_name: "TEST",
    myapp_modal_key_name: "TEST",
    myapp_modal_form_name: "",
  });

  const { myapp_header_modal, appList, refresh, myapp_modal_table_name, myapp_modal_filed_name, myapp_modal_key_name, myapp_modal_form_name } = states;

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
    console.log("gddgd");
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

  const onChange = useCallback(
    (e: any) => {
      let { value, id } = e.target;
      setStates({
        ...states,
        [id]: value,
      });
    },
    [states]
  );

  const setRefresh = useCallback(() => {
    setStates({
      ...states,
      refresh: !refresh,
    });
  }, []);

  const postClick = useCallback(() => {
    myapp_api.post(
      () => {
        setRefresh();
      },
      { FORM_NAME: myapp_modal_form_name, TABLE_NAME: myapp_modal_table_name, FILED_NAME: myapp_modal_filed_name, KEY_NAME: myapp_modal_key_name }
    );
  }, [states]);

  return <MyAppContext.Provider value={{ myAppModalOpen, states, myAppModalClose, handleOpen, handleClose, f0Click, onChange, postClick }}>{children}</MyAppContext.Provider>;
};
