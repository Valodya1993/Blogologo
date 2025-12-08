import { useState, useRef, useEffect } from "react";
import "./CustomSelect.css";
import { useTheme } from "../../context/themeContext/theme-context";

interface Option {
    label: string;
    value: string;
}

interface Props {
    value: string;
    onChange: (value: string) => void;
    options: Option[];
}

export const CustomSelect = ({ value, onChange, options }: Props) => {
    const [open, setOpen] = useState(false);
    const { theme } = useTheme();
    const selectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const selected = options.find(o => o.value === value);

    return (
        <div className="select-wrapper" ref={selectRef}>
            <div
                className={`select-box ${open ? "active" : ""}`}
                onClick={() => setOpen(prev => !prev)}
                style={{
                    background: theme.colors.bg_header,
                    color: theme.colors.text
                }}
            >
                <span className="select-label">Sort:</span>
                <span className="select-value">{selected?.label}</span>

                <span className={`arrow ${open ? "up" : "down"}`} />
            </div>

            {open && (
                <div className="select-dropdown" style={{
                    background: theme.colors.bg_header,
                    color: theme.colors.text
                }}>
                    {options.map(opt => (
                        <div
                            key={opt.value}
                            className={`option ${value === opt.value ? "selected" : ""}`}
                            onClick={() => {
                                onChange(opt.value);
                                setOpen(false);
                            }}
                        >
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
