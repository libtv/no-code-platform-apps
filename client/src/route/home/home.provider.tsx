import React, { createContext, useCallback, useState, useMemo, useEffect } from "react";
import { home_api } from "./home.service";
import { APP_IMG_LIST } from "../../const/common";
import { useNavigate } from "react-router-dom";

export const HomeContext = createContext(null as any);
export const HomeProvider = ({ children }: any) => {
  const navigate = useNavigate();

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
    if (home_api.post)
      home_api.post(
        () => {
          setRefresh();
        },
        { APP_UUID: uuid, APP_NAME: appName, APP_IMG: APP_IMG_LIST.items[1].src }
      );
  }, [appName, refresh, open, appList]);

  const onClick2 = useCallback((url: string) => {
    navigate(`apps/${url}`);
  }, []);

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
    if (home_api.get)
      home_api.get((data: any) => {
        setStates({
          ...states,
          appList: data,
        });
      });
  }, [appList]);

  useEffect(() => {
    createAppList();
  }, [refresh]);

  return <HomeContext.Provider value={{ states, handleOpen, handleClose, onClick, onChange, uuid, createAppList, onClick2 }}>{children}</HomeContext.Provider>;
};
