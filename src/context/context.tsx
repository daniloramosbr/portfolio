import { createContext, useState } from "react";

let myVar: any;

export const ContextJsx = createContext(myVar);

type TitleProps = {
  children: any;
};

export const ContextProvider: any = ({ children }: TitleProps) => {

    const [width, setWidth] = useState("0%");

    const ScrollOut = () => {
      const element = document.getElementById('up-header');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setWidth("0%");
      } else {
        console.error("Element 'up-contact' not found.");
      }
      
      };
      const ScrollTec= () => {
        const element = document.getElementById('up-tech');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setWidth("0%");
        } else {
          console.error("Element 'up-contact' not found.");
        }
        
      };
    
      const ScrollProject = () => {
        const element = document.getElementById('up-project');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setWidth("0%");
        } else {
          console.error("Element 'up-contact' not found.");
        }
        
      }
      const ScrollCont= () => {
        const element = document.getElementById('up-contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setWidth("0%");
        } else {
          console.error("Element 'up-contact' not found.");
        }
      };
      const ScrollSkill= () => {
        const element = document.getElementById('up-skill');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          setWidth("0%");
        } else {
          console.error("Element 'up-contact' not found.");
        }
        
      };
    
     
    
    return <ContextJsx.Provider value={{ScrollOut, ScrollCont, ScrollTec, ScrollProject, ScrollSkill, setWidth, width}}>{children}</ContextJsx.Provider>;

}
