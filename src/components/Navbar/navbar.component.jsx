import React from "react";
import { Nav, NavbarContainer, Span, NavLogo } from "./navbar.styles";
import { TbSquareRoundedLetterM } from "react-icons/tb";

const Navbar = () => {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="#">
          <a
            href="/"
            translate="no"
            style={{
              display: "flex",
              alignItems: "center",
              color: "black",
              textDecoration: "none",
            }}
          >
            <TbSquareRoundedLetterM size={"3rem"} />{" "}
            <Span translate="no">Moejr</Span>
          </a>
        </NavLogo>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
