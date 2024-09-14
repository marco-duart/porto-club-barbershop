import styled from "styled-components";
import * as CONSTANTS from "../../utils/constants/constants"

export const PresentationContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  padding: 2rem 5%;
  background-image: url(${CONSTANTS.IMAGES.background0});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const AboutContainer = styled.div`
  height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;
  padding: 2rem 0;
`;

export const PricesContainer = styled.div`
  height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-image: url(${CONSTANTS.IMAGES.background1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 2rem 0;
`;

export const ContactContainer = styled.div`
  height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;
  padding: 2rem 0;
`;