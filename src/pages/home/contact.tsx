import * as S from "./styles";
import { Instagram } from "styled-icons/fa-brands";
import { Whatsapp } from "@styled-icons/remix-line";
import { MapPin2 } from "@styled-icons/remix-line";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as CONSTANTS from "../../utils/constants/constants";
import { formatContactLink } from "../../utils/helpers/format-contact-link";

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <S.ContactContainer
      id="contact"
      ref={ref}
      animate={controls}
      initial="hidden"
    >
      <S.Title
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
      >
        Contato
      </S.Title>
      <S.ContactContent
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1, delay: 0.2 },
          },
        }}
      >
        <S.ContactInfo>
          <S.ContactItem>
            <b>Endereço: </b>
            {CONSTANTS.LINKS.address}
          </S.ContactItem>
          <S.ContactItem>
            <b>Telefone: </b>
            {formatContactLink(CONSTANTS.LINKS.whatsapp)}
          </S.ContactItem>
          <S.ContactItem>
            <b>Instagram: </b>
            {formatContactLink(CONSTANTS.LINKS.instagram)}
          </S.ContactItem>
          <S.ContactItem>
            <b>Email: </b>
            {CONSTANTS.LINKS.email}
          </S.ContactItem>
          <S.ContactIcons
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.4 },
              },
            }}
          >
            <S.ContactLink href={CONSTANTS.LINKS.whatsapp} target="_blank">
              <Whatsapp size="40" />
            </S.ContactLink>
            <S.ContactLink href={CONSTANTS.LINKS.instagram} target="_blank">
              <Instagram size="40" />
            </S.ContactLink>
            <S.ContactLink href={CONSTANTS.LINKS.maps} target="_blank">
              <MapPin2 size="40" />
            </S.ContactLink>
          </S.ContactIcons>
        </S.ContactInfo>
        <S.MapContainer>
          <iframe
            title="Google Maps"
            src={CONSTANTS.LINKS.mapHtml}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          />
        </S.MapContainer>
      </S.ContactContent>
    </S.ContactContainer>
  );
};

export default Contact;
