import styled from "styled-components";

export const HeaderContainer = styled.header<{ scrollPosition: number }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${(props) =>
    props.scrollPosition > 50 ? props.theme.colors.primary : "transparent"};
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;
`;

export const Logo = styled.img`
  height: 70%;
  cursor: pointer;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
