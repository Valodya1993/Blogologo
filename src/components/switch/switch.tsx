import "./switch.css";
import { useTheme } from "../../context/themeContext/theme-context";

export const Switch = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <label className="switch">
            <input
                type="checkbox"
                checked={theme.name === "dark"}
                onChange={toggleTheme}
            />
            <span className="slider round"></span>
        </label>
    );
};