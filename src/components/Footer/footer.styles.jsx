import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  background-color: #fcfcfc;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: #000000;
`;

export const NavLink = styled.a`
  color: #000000;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #1b1b1b;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: #000000;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #1b1b1b;
  }
`;

export const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.8rem;
  color: #000;
  text-align: center;
`;
