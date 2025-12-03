import styled from "styled-components";
import { Button } from "../../components/button/button";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Container, InputContainer } from "../../components/layout/wrapper";
import { PageTitle } from "../../components/pageTitle/pageTitle";

export const SignIn = () => {
    return (
        <>
            <Header />
            <Container style={{ flexDirection: 'column' }}>
                <PageTitle title='Sign In' button='Back to home' />
                <InputContainer>
                    <Input title="email" type="email" />
                    <Input title="password" type="password" />
                    <Button style="primary" content="Sign In" />
                    <Text>Don't have an account? <SignUp>Sign up</SignUp></Text>
                </InputContainer>
            </Container>
            <Footer />
        </>
    );
}

const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 24px;
    text-align: center;
`;

const SignUp = styled.button`
    color: blue;
`;