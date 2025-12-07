import { styled } from "styled-components";


//контейнер для ширины страниц
export const Container = styled.div`
    margin: 72px auto;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    flex: 1;
    padding: 0 24px;
    gap: 32px;

    @media (min-width: 500px){
        margin: 72px auto;
        padding: 0 40px;
        gap: 40px 32px;
    }

    @media (min-width: 900px){
        max-width: 1120px;
        padding: 0;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
    margin: auto;
    padding: 24px;
    border-radius: 16px;
    background-color: #ffffff;

    @media (min-width: 500px){
        padding: 40px;
    }

    @media (min-width: 900px){
        max-width: 624px;
    }
`;

//контейнер для инпутов на страницах регистрации входа и тд.
export const WrapperInput = styled.div`
    margin: 56px auto;
    padding: 40px;
    border: 1px solid #dadada;

    @media (min-width: 500px){
        margin: 72px auto;
    }

    @media (min-width: 900px){
        width: 624px;
    }
`;

// флекс контейнер
export const Flex = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Border = styled.div`
    border: 1px solid red;
    width: 100%;
`;