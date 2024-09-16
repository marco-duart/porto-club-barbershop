import styled from "styled-components";
import * as CONSTANTS from "../../utils/constants/constants";

export const HeaderContainer = styled.header<{ scrollPosition: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background-color: ${(props) =>
    props.scrollPosition > 50
      ? `rgba(31, 31, 31, 0.8)` 
      : "transparent"};
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 85%;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: .8rem;
  font-weight: 700;
  transition: color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 223, 0, 1), 0 0 40px rgba(255, 223, 0, 0.7);
  }

  @media (${CONSTANTS.DEVICE.tablet}) {
    font-size: 1.2rem;
  }
`;
