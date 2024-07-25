import { createContext, useState } from "react";

let myVar: any;

export const ContextTsx = createContext(myVar);                //criando  context

type TitleProps = {
  children: any;
}

export const ContextProvider: any = ({ children }: TitleProps) => {

  const [width, setWidth] = useState("0%");

  return (
    <ContextTsx.Provider value={{ width,setWidth   }}>{children}</ContextTsx.Provider>
  );
};
