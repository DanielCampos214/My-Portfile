import styled from "styled-components"

export const Container = styled.div`
    background-color: #0A0A0A;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    div{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 400px;
        height: 600px;
    }

`
export const MyImage = styled.img`
    max-width: 400px;
    object-fit: contain;
    border-radius: 100%;
    box-shadow: 0.1rem 0.1rem 1rem 0.1rem #00e7f9;
    margin-right: 50px;
    @media (max-width: 1100px){
        max-width: 300px;
    }
    @media (max-width: 974px){
        max-width: 200px;
    }
`
export const H2 = styled.h2`
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: #FAFAFA;
    text-align: start;
    margin: 10px;
        @media (max-width: 1040px){
        font-size: 20px;
    }
`
export const P = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-align: start;
    color: #CCCCCC;
    display: flex;
    gap: 8px;
    margin: 10px;
`

export const Section = styled.section`
    background-color: #0F1116;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: center;
    min-height: 172px;
    margin-top: 100px;
    padding-bottom: 50px;
`
export const Link = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(175px, auto));
    margin: 30px;
    width: 187px;
    height: 72px;
    p{
        color: #B5B5B5;
        font-weight: 600;
        font-size: 17px;
        line-height: 20px;
        width: 180px;
    }
    h1{

        color: #FAFAFA;
        font-style: normal;
        font-weight: 900;
        font-size: 60px;
        line-height: 73px;
    }
`