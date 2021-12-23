import React from 'react';
import { Link } from 'react-router';
import {NavbarContainer,
     LeftContainer,
     RightContainer, 
     NavbarInnerContainer,
     NavbarExtendedContainer,
     NavbarLinkContainer,

} from "../components/Navbar.styles";




function Navbar (){
    return (
         <NavbarContainer> 

            <NavbarInnerContainer>

                 <LeftContainer>
                 
                 <NavbarLinkContainer >
                hello world sam !!
                <Link to="/"> home </Link>
                </NavbarLinkContainer>

                 </LeftContainer>

                <RightContainer>

                </RightContainer>
           </NavbarInnerContainer>

            <NavbarExtendedContainer> </NavbarExtendedContainer>

            </NavbarContainer>

    );
}

export default Navbar;
