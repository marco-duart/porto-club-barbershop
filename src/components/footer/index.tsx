import * as S from "./style";
import { Facebook, Instagram, Twitter } from "styled-icons/boxicons-logos";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterTop>
        <S.SocialIcons>
          <S.SocialLink href="https://facebook.com" target="_blank">
            <Facebook />
          </S.SocialLink>
          <S.SocialLink href="https://instagram.com" target="_blank">
            <Instagram />
          </S.SocialLink>
          <S.SocialLink href="https://twitter.com" target="_blank">
            <Twitter />
          </S.SocialLink>
        </S.SocialIcons>
      </S.FooterTop>
      <S.FooterBottom>
        <p>
          &copy; {new Date().getFullYear()} Porto Club Barbearia. Todos os
          direitos reservados.
        </p>
      </S.FooterBottom>
    </S.FooterContainer>
  );
};

export default Footer;
