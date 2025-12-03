import type { FC } from "react";
import styled from "styled-components";
import { Title } from "../title/title";
import { useTheme } from "../../context/themeContext/theme-context";

interface IPageTitle {
    title: string;
    button: string;
}

export const PageTitle: FC<IPageTitle> = ({ title, button }) => {
    const { theme } = useTheme();

    return (
        <div>
            <BtnBack2Home style={{ color: theme.colors.text }}>{button.charAt(0).toUpperCase() + button.slice(1)}</BtnBack2Home>
            <Title title={title} />
        </div>
    );
};

const BtnBack2Home = styled.button`
    margin-bottom: 32px;
    font-size: 16px;
    font-weight: 400;
`;