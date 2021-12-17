import styled from "styled-components";

export const NavbarContainer = styled.nav`
width: 100%;
height: 80px;
background-color: black;
display: flex;
flex-direction: row;
`;

export const LeftContainer = styled.nav`
flex: 70%;
display: flex;
align-items: center;
padding-left: 5%;
background-color: orange;
`;

export const RightContainer = styled.nav`
flex: 30%;
display: flex;
justify-content: flex-end;
padding-right: 50px;
background-color: darkgreen;
`