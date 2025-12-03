import { createContext, useState, useContext, type ReactNode } from "react";
import { lightTheme, darkTheme, type Theme } from "./theme"; // ваши типы и темы

type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(lightTheme);

    const toggleTheme = () => {
        setTheme((prev) => (prev.name === "light" ? darkTheme : lightTheme));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div style={{
                background: theme.colors.bg,
                color: theme.colors.text,
                minHeight: "100vh",
                transition: "0.3s"
            }}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
    return ctx;
};
