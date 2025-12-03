import type { FC } from "react";
import styled, { css } from "styled-components";

interface IButton {
    content: string;
    state?: boolean;
    onClick?: () => void;
    style: 'primary' | 'secondary';
}

export const Button: FC<IButton> = ({ content, state, onClick, style }) => {
    return (
        <StyledButton styleType={style} onClick={onClick} disabled={state}>
            {content}
        </StyledButton>
    );
};

const StyledButton = styled.button<{ styleType: "primary" | "secondary" }>`
    padding: 15px;
    border: none;
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    width: -webkit-fill-available;

    ${({ styleType }) =>
        styleType === "primary" &&
        css`
        background-color: #6C1BDB;
        color: #ffffff;

        &:active {
            background-color: #912EF2;
        }

        &:disabled {
            background-color: #3130371A;
            color: #31303780;
        }
    `}

    ${({ styleType }) =>
        styleType === "secondary" &&
        css`
        background-color: #3130371A;
        color: #313037;

        &:active {
            background-color: #3130374D;
        }

        &:disabled {
            background-color: #3130371A;
            color: #31303780;
        }
    `}
`;