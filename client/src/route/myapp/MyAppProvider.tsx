import React, { createContext, useCallback, useState, useMemo, useEffect } from "react";

export const MyAppContext = createContext(null as any);

export const MyAppProvider = ({ children }: any) => {
  const [states, setStates] = useState({
    open: false,
    refresh: false,
    appName: "",
  });

  const { open, refresh, appName } = states;

  const handleOpen = useCallback(() => {
    setStates({
      ...states,
      open: true,
    });
  }, [open, refresh, appName]);

  const handleClose = useCallback(() => {
    setStates({
      ...states,
      open: false,
    });
  }, [open, refresh, appName]);

  const setRefresh = useCallback(() => {
    setStates({
      ...states,
      refresh: !refresh,
      open: false,
    });
  }, [open, refresh, appName]);

  const onClick = useCallback(() => {
    console.log(appName);
    console.log(uuid);

    setRefresh();
  }, [appName, refresh, open]);

  const onChange = useCallback(
    (e: any) => {
      e.preventDefault();
      let { value } = e.target;
      setStates({
        ...states,
        appName: value,
      });
    },
    [open, refresh, appName]
  );

  const uuid = useMemo(() => {
    return crypto.randomUUID();
  }, [refresh]);

  useEffect(() => {}, []);

  return <MyAppContext.Provider value={{ states, handleOpen, handleClose, onClick, onChange, uuid }}>{children}</MyAppContext.Provider>;
};
