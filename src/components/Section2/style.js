import styled from "styled-components"

export const Container = styled.div`
    background-color: #0A0A0A;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .div{
        display: flex;
        align-items: center;
        justify-content: center;
    
    }
`
export const ContainerQualificações = styled.div`
    width: 100%;
    height: 100%;
`
export const Button = styled.button`
    border: none;
    height: 60px;
    min-width: 150px;
    background-color: #0A0A0A;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    color:#00E7F9;
    border-bottom: 1px solid #CCCCCC;
`
export const Button1 = styled.button`
    border: none;
    color: #CCCCCC;
    height: 60px;
    min-width: 150px;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    background-color: #0A0A0A;
    border-bottom: 1px solid #CCCCCC;
`
export const Ul = styled.ul`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const LiLeft = styled.div`
    width: 300px;
    height: 320px;
    transition: 0.8s;
    border-left: 1px solid #474747;
    &:hover{
        border-left: 1px solid #00E7F9;
    }
    img{
        width: 40px;
    }
`
export const LiRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 320px;
    transition: 0.8s;
    padding: 8px ;
    border-top: 1px solid #474747;
    border-right: 1px solid #474747;

    &:hover{
        border-right: 1px solid #00E7F9;
        border-top: 1px solid #00E7F9;
    }

    img{
        width: 40px;
    }

`
export const Title = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 42px;
    color: #FAFAFA;
    text-align: center;
    margin-top: 50px;
`
export const Title1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 42px;
    color: #FAFAFA;
    text-align: left;
    margin: 5px;
`
export const SubTitle = styled.p`
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    text-align: left;
    color: #FAFAFA;
    opacity: .8;
    display: flex;
    gap: 8px;
    margin: 5px;
`
export const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    text-align: left;
    color: #CCCCCC;
    width: 400;
    margin: 5px;
`