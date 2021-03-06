import styled from 'styled-components';


export const FatherContainer = styled.div`
text-align: center;
height:100vh;
display: flex;
flex-flow: column wrap;
align-items: center;
color:white;
background:  linear-gradient(#3CBA92, #1F604B)
`;

export const AppDescription = styled.p`
font-family: Assistant;
padding: 0px 40px 0 40px;
line-height: 2;
font-size:20px;
@media (max-width: 650px) {
  font-size: 20px;
}

`;


export const GButton = styled.button`
font-size: 18px;
font-family:'Assistant';
background-color:#1ED390;
padding: 20px 0px;
margin-bottom: 20px;
color:white;
border:none;
font-weight: bold;
width:45%;
text-align:center;
@media (max-width: 650px) {
  font-size: 14px;
}
`;
