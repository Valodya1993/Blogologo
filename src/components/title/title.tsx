import type { FC } from "react";
import styled from "styled-components";

interface ITitle {
    title: string;
}

export const Title: FC<ITitle> = ({title}) => {
    return (
        <TitleStyle>
            {title}
        </TitleStyle>
    );
};

const TitleStyle = styled.div`
    font-size: 56px;
    font-weight: 700;
`;