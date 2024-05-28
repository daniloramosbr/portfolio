import { createContext, useState } from "react";

export const ContextJsx = createContext()

export const ContextProvider = ({children}) => {

    const [width, setWidth] = useState("0%");

    const ScrollOut = () => {
        const element = document.getElementById('up-header');
        element.scrollIntoView({ behavior: 'smooth' });
        setWidth("0%")
      };
      const ScrollTec= () => {
        const element = document.getElementById('up-skill');
        element.scrollIntoView({ behavior: 'smooth' });
        setWidth("0%")
      };
    
      const ScrollProject = () => {
        const element = document.getElementById('up-project');
        element.scrollIntoView({ behavior: 'smooth' });
        setWidth("0%")
      };
    
      const ScrollCont= () => {
        const element = document.getElementById('up-contact');
        element.scrollIntoView({ behavior: 'smooth' });
        setWidth("0%")
      };
    
    return <ContextJsx.Provider value={{ScrollOut, ScrollCont, ScrollTec, ScrollProject, setWidth, width}}>{children}</ContextJsx.Provider>;

}