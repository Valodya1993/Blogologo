import styled from "styled-components";
import { Button } from "../../components/button/button";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Input } from "../../components/input/input";
import { Container, InputContainer } from "../../components/layout/wrapper";
import { PageTitle } from "../../components/pageTitle/pageTitle";
import { useTheme } from "../../context/themeContext/theme-context";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { checkUserLogIn, userLogIn } from "../../helpers/LocalStorage";

export const SignIn = () => {
    const { theme } = useTheme();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSignIn = () => {
        console.log("Name:", name);
        console.log("Email:", email);

        if(!checkUserLogIn(name, email)){
            userLogIn(name);
            navigate('/');
        }
    };

    return (
        <>
            <Header />
            <Container style={{ flexDirection: 'column' }}>
                <PageTitle title='Sign In' button='Back to home' />
                <InputContainer style={{
                    background: theme.colors.bg_header,
                    color: theme.colors.text
                }}>
                    <Input title="email" type="email" value={name} onChange={(e) => setName(e.target.value)} />
                    <Input title="password" type="password" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <Button style="primary" content="Sign In" onClick={handleSignIn}/>
                    <Text>Don't have an account? <Link to='/signup' style={{
                        color: '#6C1BDB',
                        fontWeight: 'bold'
                    }}>Sign Up</Link></Text>
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
    color: #6C1BDB;
    font-weight: bold;
`;