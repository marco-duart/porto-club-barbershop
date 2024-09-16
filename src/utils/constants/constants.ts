import logo from "../../assets/image/logo.png";
import logoBlack from "../../assets/image/logo-black.png";
import background0 from "../../assets/image/background-0.jpg";
import background1 from "../../assets/image/background-1.jpg";
import background2 from "../../assets/image/background-2.jpg";
import background3 from "../../assets/image/background-3.jpg";
import background4 from "../../assets/image/background-4.jpg";

const SIZES = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  desktop: "1024px",
  fullHd: "1920px",
};

export const DEVICE = {
  mobileS: `(min-width: ${SIZES.mobileS})`,
  mobileM: `(min-width: ${SIZES.mobileM})`,
  mobileL: `(min-width: ${SIZES.mobileL})`,
  tablet: `(min-width: ${SIZES.tablet})`,
  desktop: `(min-width: ${SIZES.desktop})`,
  fullHd: `(min-width: ${SIZES.fullHd})`,
};

export const IMAGES = {
  logo,
  logoBlack,
  background0,
  background1,
  background2,
  background3,
  background4,
};

export const LINKS = {
  mapHtml: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d275.9066524638976!2d-49.26029657671633!3d-16.731023603225974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef14d6e2ad8b3%3A0x4aee76083b9555c2!2sBarbearia%20Porto%20Club!5e0!3m2!1spt-BR!2sbr!4v1726497688952!5m2!1spt-BR!2sbr",
  maps: "https://maps.app.goo.gl/ur64xeKzsSq6ULBu9",
  instagram: "https://www.instagram.com/portoclubbarbearia2",
  whatsapp: "https://wa.me/5562982450821",
  address: "R. Cuiabá, 2242 - Qd. 34, Lt. 04 - Jardim Esmeraldas, Goiânia - GO, 74830-050",
  email: "",
}
