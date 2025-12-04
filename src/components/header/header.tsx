import styled from "styled-components";
import { Logo } from "../../assets/logo"
import { Search } from "../../assets/search"
import { useTheme } from "../../context/themeContext/theme-context";
import { HambMenu } from "../burger/burger-menu";
import { User } from "../user/user"
import './header.css';

export const Header = () => {
    const { theme } = useTheme();

    return (
        <div className="header"
            style={{
                background: theme.colors.bg_header,
                color: theme.colors.text
            }}>
            <button><Logo /></button>
            <div className="right_block">
                <button><Search /></button>
                <SeparatorVert />
                <User name='Vova master'></User>
            </div>
            <div className="burger">
                <HambMenu />
            </div>
        </div >
    )
}

const SeparatorVert = styled.div`
    width: 1px;
    height: 100%;
    background-color: #E8E8E8;
`;