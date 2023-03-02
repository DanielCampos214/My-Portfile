import styled from "styled-components"

export const Section = styled.div`
    width: 100%;
    height: 100%;
    background-color: #0A0A0A;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
    padding: 20px 60px;
    width: 80%;
    background-color: #0A0A0A;

    @media (max-width:560px)
    {
        padding: 20px;
    };
    @media (max-width:400px){
        padding: 10px;
    };


    .react-multi-carousel-list{
        background-color: #0D0D0D;
        border: 1px solid #00E7F9;
        backdrop-filter: blur(10px);
        border-radius: 24px;

        & li{
            display: flex;
            padding: 8px;
            align-items: center;
            justify-content: center;
        }
    }
`
export const Text = styled.a`
    font-weight: 600px;
    font-size: 20px;
    line-height: 30px;
    color: #ffffff;
    margin: 12px 8px;
`
    

export const Movie = styled.img`
    max-width: 200px;
    max-height: 290px;
    cursor: pointer;
    border-radius: 20px;
    transform: scale(0.9);
    transition: 0.3s;

    &:hover{
        transform: scale(1);
    };

    @media (max-width:715px)
    {
        max-width: 100px;
        max-height: 200px,
    };
`

export const Title = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;
    margin: 20px;
    color: #00E7F9;
`

export const Map2 = styled.a`
    background-color: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    a{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #CCCCCC;
        &:hover{
        color: #00E7F9;
    }
    }

`
