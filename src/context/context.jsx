/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext} from "react";

export const ContextJsx = createContext()

export const ContextProvider = ({children}) => {

    const ScrollOut = () => {
        const element = document.getElementById('up-outset');
        element.scrollIntoView({ behavior: 'smooth' });
      };

      const ScrollProject = () => {
        const element = document.getElementById('up-project');
        element.scrollIntoView({ behavior: 'smooth' });
      };

      const ScrollCont= () => {
        const element = document.getElementById('up-contact');
        element.scrollIntoView({ behavior: 'smooth' });
      };

    return <ContextJsx.Provider value={{ScrollOut, ScrollProject, ScrollCont}}>{children}</ContextJsx.Provider>

}