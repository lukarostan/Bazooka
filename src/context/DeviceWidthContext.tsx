import React, { createContext, useContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};
type Context = {
  width: number;
  setWidth: (width: number) => void;
};

const DeviceWidthContext = createContext<Context>({
  width: document.documentElement.clientWidth,
  setWidth: () => {},
});

export const DeviceWidthContextProvider = ({ children }: Props) => {
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  return <DeviceWidthContext.Provider value={{ width, setWidth }}>{children}</DeviceWidthContext.Provider>;
};

export const useDeviceWidthContext = () => {
  const { width, setWidth } = useContext(DeviceWidthContext);

  if (!width) throw new Error('DeviceWidthContext must be called from within the DeviceWidthContextProvider');

  return { width, setWidth };
};
