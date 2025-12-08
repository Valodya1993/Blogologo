import styled from "styled-components";
import { Logo } from "../../assets/logo"
import { Search } from "../../assets/search"
import { useTheme } from "../../context/themeContext/theme-context";
import { HambMenu } from "../burger/burger-menu";
import { User } from "../user/user"
import './header.css';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Cancel } from "../../assets/cancel";

export const Header = () => {
    const { theme } = useTheme();
    const activeUser = localStorage.getItem("active-user");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setUserMenuOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="header"
            style={{
                background: theme.colors.bg_header,
                color: theme.colors.text
            }}>
            <Link to='/' style={{ margin: 'auto 0' }}><Logo /></Link>
            <div className="central_block" style={{ background: isSearchOpen ? theme.colors.bg : '' }}>

                <SearchInput style={{ background: theme.colors.bg, cursor: isSearchOpen ? 'text' : 'default' }} value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." isSearchOpen={isSearchOpen} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        navigate(`/search/${encodeURIComponent(search)}`);
                        setSearch('');
                        setIsSearchOpen(!isSearchOpen);
                    }
                }} />
                <button onClick={() => { setIsSearchOpen(!isSearchOpen) }} style={{ marginRight: '32px' }}>
                    {!isSearchOpen && <Search />}
                    {isSearchOpen && <Cancel />}
                </button>
            </div>
            <div className="right_block" ref={menuRef}>
                <SeparatorVert />
                {activeUser !== null && <div style={{ position: 'relative', margin: 'auto', background: theme.colors.bg_header, color: theme.colors.text}}>
                    <div onClick={() => setUserMenuOpen(prev => !prev)}>
                        <User name={activeUser} />
                    </div>

                    {userMenuOpen && (
                        <UserMenu
                            onLogout={() => {
                                localStorage.removeItem("active-user");
                                window.location.reload();
                            }}
                        />
                    )}
                </div>}
                {activeUser === null && <Link to='/signin' style={{margin: 'auto'}} ><User name='Sign In' /></Link>}

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

const SearchInput = styled.input<{ isSearchOpen?: boolean }>`
    padding: 21px 24px;
    font-size: 16px;
    width: 100%;
    flex: 1; 
    margin: 0 32px;
    border-radius: 5px;
    opacity: ${(props) => (props.isSearchOpen ? '1' : '0')};

    &::placeholder{
        font-size: 16px;
    }
`;

const MenuBox = styled.div`
    position: absolute;
    top: 48px;
    right: 0;
    background: white;
    border-radius: 8px;
    padding: 12px;
    width: 150px;
    box-shadow: 0 3px 12px rgba(0,0,0,0.15);
    z-index: 20;

    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const MenuButton = styled.button`
    background: transparent;
    border: none;
    padding: 8px;
    text-align: left;
    cursor: pointer;
    font-size: 15px;
    border-radius: 5px;
    transition: 0.2s;

    &:hover {
        background: #6C1BDB;
        color: #ffffff !important;
    }
`;

const UserMenu = ({ onLogout }: { onLogout: () => void }) => {
    const { theme } = useTheme();

    return (
        <MenuBox style={{
            background: theme.colors.bg_header,
            color: theme.colors.text
        }}>
            <MenuButton onClick={onLogout} style={{
            color: theme.colors.text
        }}>Logout</MenuButton>
        </MenuBox>
    );
};