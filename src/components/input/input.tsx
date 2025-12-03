import type { ChangeEvent, FC } from "react";
import styled from "styled-components";

interface IInput {
    title: string;
    type: string;
    id?: string | undefined;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void; 
}

export const Input: FC<IInput> = ({ title, type, id, value, onChange}) => {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', width: '100%'
        }}>
            <Label>{title.charAt(0).toUpperCase() + title.slice(1)}
                <TitleStyle type={type} placeholder={title === 'confirm password' ? ("Confirm password") : ("Your " + title)}
                    value={value}
                    onChange={onChange} />
            </Label>
        </div >
    );
};

const Label = styled.label`
    margin: 15px 15px 0;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 600;
`;
const TitleStyle = styled.input`
    margin: 5px 0 15px;
    padding: 20px;
    width: 100%;
    height: 56px;
    outline: none;
    border-radius: 4px;
    font-size: 16px;
    color: #313037;
    border: 1px solid #3130371A;
    font-weight: 400;
    &:focus, &:hover{
        border: 1px solid #6C1BDB;
    }
    &::placeholder{
        color: #31303780;
    }
`;