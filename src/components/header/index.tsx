import { useState, useEffect } from "react";
import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants"

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.HeaderContainer scrollPosition={scrollPosition}>
      <S.Logo src={CONSTANTS.IMAGES.logo} alt="Logo" />
      <S.Nav>
        <S.NavLink href="#home">HOME</S.NavLink>
        <S.NavLink href="#about">SOBRE NÓS</S.NavLink>
        <S.NavLink href="#services">TABELA DE PREÇOS</S.NavLink>
        <S.NavLink href="#contact">CONTATO</S.NavLink>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
