import React, { createContext, useEffect, useState, useCallback, useRef } from "react";

export const MyAppContext = createContext(null as any);
export const MyAppProvider = ({ children }: any) => {
  const [states, setStates] = useState({
    myapp_header_modal: false,
  });

  const { myapp_header_modal } = states;

  const myAppModalOpen = useCallback(() => {
    setStates({
      ...states,
      myapp_header_modal: true,
    });
  }, [myapp_header_modal]);

  const myAppModalClose = useCallback(() => {
    setStates({
      ...states,
      myapp_header_modal: false,
    });
  }, [myapp_header_modal]);

  useEffect(() => {}, [myapp_header_modal]);

  return <MyAppContext.Provider value={{ myAppModalOpen, states, myAppModalClose }}>{children}</MyAppContext.Provider>;
};
