import "./ToggleButtonGroup.css";
import { useTheme } from "../../context/themeContext/theme-context";

interface Props {
    value: string;
    onChange: (v: string) => void;
}

export const ToggleButtons = ({ value, onChange }: Props) => {
    const { theme } = useTheme();

    const buttons = [
        { id: "all", label: "All" },
        { id: "day", label: "Day" },
        { id: "week", label: "Week" },
        { id: "month", label: "Month" },
        { id: "year", label: "Year" },
    ];

    return (
        <div className="toggle-container">
            {buttons.map((btn) => (
                <button
                    key={btn.id}
                    className={`toggle-btn ${value === btn.id ? "active" : ""}`}
                    onClick={() => onChange(btn.id)}
                    style={{
                        background: theme.colors.bg_header,
                        color: theme.colors.text
                    }}
                >
                    {btn.label}
                </button>
            ))}
        </div>
    );
};
