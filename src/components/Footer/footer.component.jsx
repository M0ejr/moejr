import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import {
  FooterContainer,
  FooterWrapper,
  NavLink,
  SocialMediaIcons,
  SocialMediaIcon,
  Copyright,
} from "./footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <NavLink href="#">
          <KeyboardArrowUpIcon style={{ fontSize: "35px" }} />
        </NavLink>
        <SocialMediaIcons>
          <SocialMediaIcon href="https://x.com/m0ejr" target="display">
            <XIcon />
          </SocialMediaIcon>
          <SocialMediaIcon
            href="https://www.linkedin.com/in/mohammed-638623219/"
            target="display"
          >
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://github.com/m0ejr" target="display">
            <GitHub />
          </SocialMediaIcon>
          <SocialMediaIcon href="mailto:mo3jrr@gmail.com" target="display">
            <EmailIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>Built and designed by me</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
