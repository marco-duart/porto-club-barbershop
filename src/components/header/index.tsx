import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import * as S from "./styles";
import * as CONSTANTS from "../../utils/constants/constants";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [offsetTop, setOffsetTop] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    const sections = ["home", "about", "prices", "contact"];
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    const updateOffset = () => {
      const offsetInVh = window.innerHeight * 0.12;
      setOffsetTop(offsetInVh);
    };

    updateOffset();
    window.addEventListener("resize", updateOffset);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateOffset);
    };
  }, []);

  return (
    <S.HeaderContainer scrollPosition={scrollPosition}>
      <S.Logo src={CONSTANTS.IMAGES.logo} alt="Logo" />
      <S.Nav>
        <Link to="home" spy={true} smooth={true} duration={500}>
          <S.NavLink isActive={activeSection === "home"}>HOME</S.NavLink>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-offsetTop}
        >
          <S.NavLink isActive={activeSection === "about"}>SOBRE NÓS</S.NavLink>
        </Link>
        <Link
          to="prices"
          spy={true}
          smooth={true}
          duration={500}
          offset={-offsetTop}
        >
          <S.NavLink isActive={activeSection === "prices"}>
            TABELA DE PREÇOS
          </S.NavLink>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-offsetTop}
        >
          <S.NavLink isActive={activeSection === "contact"}>CONTATO</S.NavLink>
        </Link>
      </S.Nav>
    </S.HeaderContainer>
  );
};

export default Header;
