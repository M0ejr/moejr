import React from "react";
import { Nav, NavbarContainer, Span, NavLogo} from "./NavbarStyledComponent";
import { TbSquareRoundedLetterM } from "react-icons/tb";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="#">
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              textDecoration: "none"
            }}
          >
            <TbSquareRoundedLetterM size={"3rem"} /> <Span>Moejr</Span>
          </a>
        </NavLogo>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
