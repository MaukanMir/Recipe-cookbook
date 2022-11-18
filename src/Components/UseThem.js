import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";



export const useTheme = () => {

    const context = useContext(ThemeContext)
    if(context === undefined){
        throw new Error("Use Them() must be used inside a ThemeProvider");
    }
    return context;
}
