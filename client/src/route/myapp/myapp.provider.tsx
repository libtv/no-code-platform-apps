import React, { createContext, useCallback, useState, useMemo, useEffect } from "react";
import { myapp_api } from "./myapp.service";
import { APP_IMG_LIST } from "../../const/common";

export const MyAppContext = createContext(null as any);
export const MyAppProvider = ({ children }: any) => {
  const [states, setStates] = useState({
    open: false,
    refresh: false,
    appName: "",
    appList: [],
  });

  const { open, refresh, appName, appList } = states;

  const handleOpen = useCallback(() => {
    setStates({
      ...states,
      open: true,
    });
  }, [open, refresh, appName, appList]);

  const handleClose = useCallback(() => {
    setStates({
      ...states,
      open: false,
    });
  }, [open, refresh, appName, appList]);

  const setRefresh = useCallback(() => {
    setStates({
      ...states,
      refresh: !refresh,
      open: false,
    });
  }, [open, refresh, appName, appList]);

  const onClick = useCallback(() => {
    if (myapp_api.post)
      myapp_api.post(
        () => {
          setRefresh();
        },
        { APP_UUID: uuid, APP_NAME: appName, APP_IMG: APP_IMG_LIST.items[1].src }
      );
  }, [appName, refresh, open, appList]);

  const onChange = useCallback(
    (e: any) => {
      e.preventDefault();
      let { value } = e.target;
      setStates({
        ...states,
        appName: value,
      });
    },
    [open, refresh, appName, appList]
  );

  const uuid = useMemo(() => {
    return crypto.randomUUID();
  }, [refresh]);

  const createAppList = useCallback(() => {
    console.log("dd");
    if (myapp_api.get)
      myapp_api.get((data: any) => {
        setStates({
          ...states,
          appList: data,
        });
      });
  }, [appList]);

  useEffect(() => {
    createAppList();
  }, []);

  return <MyAppContext.Provider value={{ states, handleOpen, handleClose, onClick, onChange, uuid, createAppList }}>{children}</MyAppContext.Provider>;
};
