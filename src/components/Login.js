import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    yow just click on login 
                </Description>
                <CTALogTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login
const Container = styled.div`
        
    padding: 95px 10px;
    position: relative;
    display: flex;
    align-items: top;
    justify-content: center;
        
    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
        
    }

`
const CTA = styled.div`
    align-self: center;

`
const CTALogoOne = styled.img`
    max-width :650px;
    padding: 40px 0px;
    display: flex;
    flex-direction: coloumn;
    margin-top: 10px;
    align-items: center;


`
const SignUp = styled.a`
    
    display: flex;
    background-color: #0063e5;
    font-weight: bold;
    padding: 10px 250px;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
   
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    align-self:center;
    text-transform: uppercase;

`
const CTALogTwo = styled.img`
    max-width :650px;
    padding: 0px 140px;
    

`




