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
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSignIn = () => {
        setError(false);
        console.log("Name:", name);
        console.log("Password:", password);

        if(checkUserLogIn(name, password)){
            userLogIn(name);
            navigate('/');
        } else {
            setError(true);
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
                    <Input title="name" type="text" value={name} onChange={(e) => setName(e.target.value)} error={error}/>
                    <Input title="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} error={error}
                    />
                    {error && <ErrorMessage>Incorrect login or password</ErrorMessage>}
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

const ErrorMessage = styled.p`
    color: red;
    margin-left: 15px;
    margin-bottom: 15px;
`;