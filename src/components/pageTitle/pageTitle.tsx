import type { FC } from "react";
import styled from "styled-components";
import { Title } from "../title/title";

interface IPageTitle {
    title: string;
    button: string;
}

export const PageTitle: FC<IPageTitle> = ({title, button}) => {
    return (
        <div>
            <BtnBack2Home>{button.charAt(0).toUpperCase() + button.slice(1)}</BtnBack2Home>
            <Title title={title}/>
        </div>
    );
};

const BtnBack2Home = styled.button`
    margin-bottom: 32px;
    font-size: 16px;
    font-weight: 400;
`;