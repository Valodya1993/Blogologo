import type { FC } from "react";
import styled from "styled-components";
import { useTheme } from "../../context/themeContext/theme-context";
import { UserLogo } from "../../assets/user";

interface IUser {
    name: string;
}

export const User: FC<IUser> = ({ name }) => {
    function StartLetter(word: string): string {
        let result: string = '';
        word.split(' ').forEach((elem) => result += elem[0]);
        return result.toUpperCase();
    }

    const { theme } = useTheme();

    return (
        <WrapperBTN >
            <UserBTN style={{
                background: theme.colors.bg_header,
                color: theme.colors.text
            }}>
                <UserBTNInside>
                    {name !== 'Sign In' && StartLetter(name) }
                    {name === 'Sign In' && <UserLogo/> }
                </UserBTNInside>
                {name}
            </UserBTN>
        </WrapperBTN>
    );
};

const WrapperBTN = styled.button`
    border: none;
    cursor: pointer;
    width: 100%
`;

const UserBTN = styled.div`
    display: flex;
    height: 60px;
    gap: 10px;
    align-items: center;
    border: none;
    font-size: 18px;
    padding-left: 32px;

    &:active {
        background-color: #5463CA;
    }
`;

const UserBTNInside = styled.div`
    background: linear-gradient(#4d0ac7, #912ef2);
    padding: 10px;
    color: #ffffff;
    border-radius: 3px;
`;