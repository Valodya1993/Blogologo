import type { FC } from "react";
import styled from "styled-components";
import { Title } from "../title/title";
import { useTheme } from "../../context/themeContext/theme-context";
import { Link } from "react-router-dom";
import './pageTitle.css';

interface IPageTitle {
    title: string;
    button: string;
}

export const PageTitle: FC<IPageTitle> = ({ title, button }) => {
    const { theme } = useTheme();

    return (
        <div>
            <Link to='/' className="back2home" style={{ color: theme.colors.text }}>{button.charAt(0).toUpperCase() + button.slice(1)}</Link>
            <Title title={title} />
        </div>
    );
};
