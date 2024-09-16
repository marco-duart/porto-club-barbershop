import * as S from "./styles";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as CONSTANTS from "../../utils/constants/constants";

const About = () => {
  const imageControls = useAnimation();
  const contentControls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      imageControls.start({ opacity: 1, x: 0, transition: { duration: 1.5 } });
      contentControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.5 },
      });
    }
  }, [inView, imageControls, contentControls]);

  return (
    <S.AboutContainer ref={ref} id="about">
      <S.ImageWrapper>
        <S.AboutImage
          initial={{ opacity: 0, x: -50 }}
          animate={imageControls}
          src={CONSTANTS.IMAGES.barbershop}
          alt="About Us"
        />
      </S.ImageWrapper>
      <S.ContentWrapper
        initial={{ opacity: 0, y: 50 }}
        animate={contentControls}
      >
        <S.BioTitle>Sobre Nós</S.BioTitle>
        <S.Bio>
          <p>
            Bem-vindo à Porto Club barbearia, onde o estilo encontra a tradição.
            Oferecemos cortes modernos em um ambiente descontraído para
            proporcionar a melhor experiência para você.
          </p>
        </S.Bio>
      </S.ContentWrapper>
    </S.AboutContainer>
  );
};

export default About;
