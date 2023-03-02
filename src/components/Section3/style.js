import styled from "styled-components"

export const Container = styled.div`
    background-color: #0A0A0A;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`
export const SectionHeader = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
export const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 51px;
    width: 382px;
    height: 100px;
    background-color: transparent;
    border: none;
    color: #FAFAFA;

    @media (max-width:480px){
      font-size: 28px;
      width: 100%;
      text-align: center;
    };
`
export const P = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #CCCCCC;
    margin-left: 10px;
    margin-top: 45px;

    @media (max-width:480px){
      font-size: 20px;
      width: 100%;
      padding: 10px;
      text-align: center;
      margin-left: 0;
    };
`
export const Section = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`
export const Map = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 2px solid #2D2D2D;
    border-radius: 5px;
    width: 370px;
    height: 250px;
    gap: 30px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media (max-width:450px){
        width: 100%;
    };
`
export const H2 = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    padding: 10px;

    color: #CCCCCC;
    @media (max-width:450px){
        font-size: 18px;
    };

`
export const P1 = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    padding: 10px;
    color: #818181;
    @media (max-width:450px){
        font-size: 14px;
    };

`
export const H3 = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    padding: 10px;
    text-align: center;
    color: #00E7F9;
    margin-bottom: 50px;
`


export const Section2 = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    div{
        width: 90%;
    height: 100%;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    }
`
export const Map2 = styled.button`
    width: 297px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    border-radius: 0.5rem;
    background-color: #0D0D0D;
    margin: 5px;
    border: none;

    p{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;

        color: #CCCCCC;
    }
    .icon{
        background: transparent;
        color: #00E7F9;
        font-size: 30px;
    }
`