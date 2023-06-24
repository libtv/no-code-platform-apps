import React, { createContext } from "react";
import { useLocation } from "react-router-dom";

export const APP_IMG_LIST = {
  width: "800px",
  height: "500px",
  items: [
    { src: "https://mui.com/static/images/buttons/breakfast.jpg", title: "sdfsd", width: "150px", height: "300" },
    { src: "https://cdn.appspeed.net:8444/repository/attaches//public/studio/20211214/a1f28a5ae746948c4b8018cd31034c301.svg", title: "sdfsd", width: "150px", height: "300" },
    { src: "https://cdn.appspeed.net:8444/repository/attaches//public/studio/20211214/a1f28a5ae746948c4b8018cd31034c301.svg", title: "sdfsd", width: "150px", height: "300" },
    { src: "https://cdn.appspeed.net:8444/repository/attaches//public/studio/20211214/a1f28a5ae746948c4b8018cd31034c301.svg", title: "sdfsd", width: "150px", height: "300" },
    { src: "https://cdn.appspeed.net:8444/repository/attaches//public/studio/20211214/a1f28a5ae746948c4b8018cd31034c301.svg", title: "sdfsd", width: "150px", height: "300" },
    { src: "https://cdn.appspeed.net:8444/repository/attaches//public/studio/20211214/a1f28a5ae746948c4b8018cd31034c301.svg", title: "sdfsd", width: "150px", height: "300" },
    { src: "https://cdn.appspeed.net:8444/repository/attaches//public/studio/20211214/a1f28a5ae746948c4b8018cd31034c301.svg", title: "sdfsd", width: "150px", height: "300" },
    { src: "https://cdn.appspeed.net:8444/repository/attaches//public/studio/20211214/a1f28a5ae746948c4b8018cd31034c301.svg", title: "sdfsd", width: "150px", height: "300" },
    { src: "https://cdn.appspeed.net:8444/repository/attaches//public/studio/20211214/a1f28a5ae746948c4b8018cd31034c301.svg", title: "sdfsd", width: "150px", height: "300" },
    { src: "https://cdn.appspeed.net:8444/repository/attaches//public/studio/20211214/a1f28a5ae746948c4b8018cd31034c301.svg", title: "sdfsd", width: "150px", height: "300" },
  ],
};

export const SERVER_URL = process.env.SERVER_URL || "http://localhost:3939/api";

export const DefaultContext = createContext(null as any);
export const DefaultProvider = ({ children }: any) => {
  const location = useLocation();
  return <DefaultContext.Provider value={{ location }}>{children}</DefaultContext.Provider>;
};
