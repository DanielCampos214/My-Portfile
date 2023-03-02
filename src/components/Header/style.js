import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: #0F1116;
  box-shadow: 0 0 20px 3px;
  font-size: 30px;
  font-weight: 400;
  font-style: normal;
  padding: 30px;
  >svg{
  
    
    color: #FFFFFF;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
      @media (max-width: 450px){
       width: 40px;
    }
`