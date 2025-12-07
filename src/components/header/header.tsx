import styled from "styled-components";
import { Logo } from "../../assets/logo"
import { Search } from "../../assets/search"
import { useTheme } from "../../context/themeContext/theme-context";
import { HambMenu } from "../burger/burger-menu";
import { User } from "../user/user"
import './header.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Cancel } from "../../assets/cancel";

export const Header = () => {
    const { theme } = useTheme();
    const activeUser = localStorage.getItem("active-user");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

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
                <button onClick={() => { setIsSearchOpen(!isSearchOpen)}} style={{ marginRight: '32px' }}>
                    {!isSearchOpen && <Search />}
                    {isSearchOpen && <Cancel />}
                </button>
            </div>
            <div className="right_block">
                <SeparatorVert />
                {activeUser !== null && <User name={activeUser} />}
                {activeUser === null && <Link to='/signin' ><User name='Sign In' /></Link>}

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