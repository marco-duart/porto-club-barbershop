import * as S from "./styles";
import { Facebook, Instagram, Linkedin } from "styled-icons/boxicons-logos";
import * as CONSTANTS from "../../utils/constants/constants";

const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterTop>
        <S.SocialIcons>
          <S.SocialLink href={CONSTANTS.LINKS.facebook} target="_blank">
            <Facebook />
          </S.SocialLink>
          <S.SocialLink href={CONSTANTS.LINKS.instagram} target="_blank">
            <Instagram />
          </S.SocialLink>
          <S.SocialLink href={CONSTANTS.LINKS.linkedin} target="_blank">
            <Linkedin />
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
