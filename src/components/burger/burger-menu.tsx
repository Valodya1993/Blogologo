import { useState } from "react";
import styled from "styled-components";
import { User } from "../user/user";
import { Button } from "../button/button";
import { useTheme } from "../../context/themeContext/theme-context";
import { Link, useNavigate } from "react-router-dom";
import { userLogOut } from "../../helpers/LocalStorage";
import { Switch } from "../switch/switch";
import { Search } from "../../assets/search";

export const HambMenu = () => {
    const activeUser = localStorage.getItem("active-user");
    const [isOpen, setIsOpen] = useState(false);
    const { theme } = useTheme();
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const logOut = () => {
        userLogOut();
        setIsOpen(!isOpen);
    }

    const handleSearch = () => {
        navigate(`/search/${encodeURIComponent(search)}`);
        setSearch('');
        setIsOpen(false);
    }

    const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.toggle("open");
        setIsOpen(!isOpen);
    };

    return (<>
        <MenuBtn onClick={toggleMenu} className={isOpen ? 'open' : ''}>
            <MenuSpan style={{ background: theme.colors.text }}></MenuSpan>
            <MenuSpan style={{ background: theme.colors.text }}></MenuSpan>
            <MenuSpan style={{ background: theme.colors.text }}></MenuSpan>
        </MenuBtn>
        {isOpen && <Overlay onClick={() => { setIsOpen(!isOpen) }} />}
        <Sidebar style={{
            background: theme.colors.bg_header,
            color: theme.colors.text, transform: isOpen ? 'translateX(0%)' : 'translateX(100%)'
        }}>
            <div>
                <BlueBlock />
                {activeUser !== null && <><SeparatorHor />
                    <div style={{ padding: '0 24px' }}><User name={activeUser} /></div></>}
                <SeparatorHor />
                <div style={{ position: 'relative', }}>
                    <SearchInput value={search} style={{
                        background: theme.colors.bg_header,
                        color: theme.colors.text }} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            navigate(`/search/${encodeURIComponent(search)}`);
                            setSearch('');
                            setIsOpen(false);
                        }
                    }} placeholder="Search..." />
                    <button style={{ position: 'absolute', top: '18px', right: '24px' }} onClick={handleSearch} ><Search /></button>
                </div>
                <SeparatorHor />
                <Link to={'/'}><Button style="secondary" content="Home" /></Link>
                <SeparatorHor />
            </div>
            <div>
                <ThemeIcons>
                    <p>DarkTheme</p>
                    <Switch />
                </ThemeIcons>
                <SeparatorHor />
                {activeUser !== null && <Button style="secondary" content="Log out" onClick={logOut} />}
                {activeUser === null && <Link to='/signin' >
                    <Button style="secondary" content="Sign In" /> </Link>}
            </div>
        </Sidebar >
    </>
    );
}

const SeparatorHor = styled.div`
    width: 100%;
    height: 1px;
    background-color: #E8E8E8;
`;

const SeparatorVert = styled.div`
    width: 1px;
    height: 100%;
    background-color: #E8E8E8;
`;

const BlueBlock = styled.div`
    background-color: transparent;
    height: 80px;
`;

const ThemeIcons = styled.div`
    display: flex;
    gap: 20px;
    padding: 30px 24px;
    justify-content: space-between;
`;

const SearchInput = styled.input`
    padding: 21px 24px;
    font-size: 16px;
    width: 100%;

    &::placeholder{
        font-size: 16px;
    }
`;

const Overlay = styled.div`
        position: fixed;
        top: 0px;
        left: 0px;
        overflow: hidden;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 1000;
        backdrop-filter: blur(3px);
        animation: backdrop-filter-animation 0.3s ease;

        @keyframes backdrop-filter-animation{
            from{
                backdrop-filter:blur(0px);
            }  
            to{
                backdrop-filter:blur(3px);
            }
        }
        `;

const Sidebar = styled.div`
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        background: #ffffff;
        color: red;
        box-sizing: border-box;
        transition: transform 0.3s ease;
        z-index: 1001;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        `;



const MenuBtn = styled.button`
        height: 60px;
        width: 60px;
        margin: 10px 0;
        border: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 6px;
        align-items: center;
        cursor: pointer;
        z-index: 10000;

        &.open span:nth-child(1) {
            width: 20px;
        transform: translateY(7px) rotate(45deg);
    }

        &.open span:nth-child(2) {
            opacity: 0;
    }

        &.open span:nth-child(3) {
            width: 20px;
        transform: translateY(-9px) rotate(-45deg);
    }
        `;
const MenuSpan = styled.span`
        height: 2px;
        width: 16px;
        border-radius: 3px;
        transition: 0.3s ease;
        `;

const ThemeBtn = styled.button`
    width: 100%;
    height: 80px;
`;