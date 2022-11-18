import "./ThemeSelector.css";
import {BsSunFill} from "react-icons/bs"

import {useTheme} from "./UseThem";

const themeColors = ["#58249c","#249c6b","#b70233"];


const ThemeSelector = () => {

    const {changeColor, changeMode, mode} = useTheme();

    const toggleMode =()=>{

        changeMode(mode === "dark" ? "light":"dark");
    }

  return (
    <div className="theme-selector">
        <div className="mode-toggle">
            <BsSunFill
            className ={mode === "dark" ? "dark":"light"}
            onClick ={toggleMode}
            />
        </div>
        <div className="theme-buttons">

            {themeColors.map(color=>(
                <div
                key={color}
                onClick={()=> changeColor(color)}
                style={{background:color}}
                />
            ))}

        </div>
    </div>
  )
}

export default ThemeSelector