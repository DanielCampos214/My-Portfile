import styled from "styled-components"

export const Container = styled.div`
    background-color: #0A0A0A;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const Main = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 300px;
    @media (max-width: 450px){
        margin-top: 100px;
    }
`
export const H2 = styled.h2`
    color: #FAFAFA;
    font-style: normal;
    display: flex;
    justify-content: center;
    font-weight: 200;
    font-size: 50px;
    line-height: 75px;
    text-align: center;

    @media (max-width: 450px){
        font-size: 25px;
    }

    h2{
        color: #00E7F9;
        font-style: normal;
        font-weight: 200;
        font-size: 50px;
        line-height: 75px;

        @media (max-width: 450px){
        font-size: 25px;
    }

    }
`
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 600;
    font-size: 75px;
    line-height: 91px;
    text-align: center;
    letter-spacing: 1px;

    color: #FAFAFA;
    @media (max-width: 450px){
        font-size: 55px;
    }
`
export const P = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    color: #CCCCCC;
    @media (max-width: 350px){
        font-size: 10px;
    }

`
export const Button = styled.a`
    width: 270px;
    height: 40px;
    margin: 55px auto;
    padding-top: 15px;
    background: #00E7F9;
    border-radius: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #0A0A0A;
    transition: 0.9s;

    cursor: pointer;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.6;
    }
`
export const Container2 = styled.div`
    display: flex;
    color: #FAFAFA;
    justify-content: center;
    gap: 15px;
`
export const Link = styled.a`
    font-size: 20px;
    line-height: 21px;
    text-align: center;
    color: #FAFAFA;
    &:hover{
        color: #00E7F9;
    }
    &:active{
        color: #00E7F9;
    }
`

