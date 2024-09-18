import * as S from "./styles";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import * as CONSTANTS from "../../utils/constants/constants"

const Presentation = () => {
  const logoControls = useAnimation();
  const sloganControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    logoControls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1.5 },
    });
    sloganControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 0.5 },
    });
    buttonControls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, delay: 1 },
    });
  }, [logoControls, sloganControls, buttonControls]);

  return (
    <S.PresentationContainer id="home">
      <S.Logo
        initial={{ opacity: 0, scale: 0.5 }}
        animate={logoControls}
        src={CONSTANTS.IMAGES.logo}
        alt="Logo"
      />
      <S.Slogan initial={{ opacity: 0, y: 50 }} animate={sloganControls}>
        "Onde estilo encontra atitude"
      </S.Slogan>
      <S.CallToActionButton
        initial={{ opacity: 0, y: 50 }}
        animate={buttonControls}
      >
        <a href={CONSTANTS.LINKS.whatsapp}>Agende agora</a>
      </S.CallToActionButton>
    </S.PresentationContainer>
  );
};

export default Presentation;
