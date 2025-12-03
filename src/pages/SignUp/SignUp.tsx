import styled from "styled-components";
import { Button } from "../../components/button/button";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Container, InputContainer } from "../../components/layout/wrapper";
import { PageTitle } from "../../components/pageTitle/pageTitle";
import { colors } from "../../styles/colors";

export const SignUp = () => {
    return (
        <>
            <Header />
            <Container style={{ flexDirection: 'column' }}>
                <PageTitle title='Sign Up' button='Back to home' />
                <InputContainer>
                    <Input title="name" type="text" />
                    <Input title="email" type="email" />
                    <Input title="password" type="password" />
                    <Input title="confirm password" type="password" />
                    <Button style="primary" content="Sign Up" />
                    <Text>Already have an account? <SignIn>Sign In</SignIn></Text>
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
    // background-color: ${colors.secondary};
`;

const SignIn = styled.button`
    color: blue;
`;