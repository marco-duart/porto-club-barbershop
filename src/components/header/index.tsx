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
        <S.NavLink href="#home">Home</S.NavLink>
        <S.NavLink href="#about">Sobre Nós</S.NavLink>
        <S.NavLink href="#services">Tabela de preços</S.NavLink>
        <S.NavLink href="#contact">Contato</S.NavLink>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
