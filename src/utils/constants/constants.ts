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
