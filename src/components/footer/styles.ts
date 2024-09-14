import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
`;

export const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    width: 30px;
    height: 30px;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  padding: 10px 0;
  background: linear-gradient(145deg, #f7d54e, #c7971e);;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
`;
