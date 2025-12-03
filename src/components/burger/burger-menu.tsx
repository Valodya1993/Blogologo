import { useState } from "react";
import styled from "styled-components";
import { User } from "../user/user";
import { Button } from "../button/button";
import { useTheme } from "../../context/themeContext/theme-context";

export const HambMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { theme } = useTheme();


    const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.currentTarget.classList.toggle("open");
        setIsOpen(!isOpen);
    };

    return (<>
        <MenuBtn onClick={toggleMenu} className={isOpen ? 'open' : ''}>
            <MenuSpan style={{ background:theme.colors.text }}></MenuSpan>
            <MenuSpan style={{ background:theme.colors.text }}></MenuSpan>
            <MenuSpan style={{ background:theme.colors.text }}></MenuSpan>
        </MenuBtn>
        {/* {isOpen && <Overlay onClick={() => {setIsOpen(!isOpen)}} />}
        <Sidebar style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
            <div>
                <BlueBlock />
                <SeparatorHor />
                <User name='Uladzimir Muliarchyk' />
                <SeparatorHor />
                <Button style="secondary" content="Home" />
                <SeparatorHor />
            </div>
            <div>
                <SeparatorHor/>
                <ThemeIcons>
                    <ThemeBtn><Sun color='#000'/></ThemeBtn>
                    <SeparatorVert/>
                    <ThemeBtn><Moon color='#000'/></ThemeBtn>
                </ThemeIcons>
                <Button style="secondary" content="Log out" />
            </div>
        </Sidebar > */}
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
    background-color: #2231AA;
    height: 80px;
`;

const ThemeIcons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
`;

const Overlay = styled.div`
        position: fixed;
        top: 0px;
        left: 0px;
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
        width: fit-content;
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
        height: 80px;
        width: 80px;
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