import styled from "styled-components";
import * as CONSTANTS from "../../utils/constants/constants";
import { motion } from "framer-motion";

export const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-family: ${(props) => props.theme.fonts.title};
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1rem;
  text-align: center;
  letter-spacing: 0.1rem;
  opacity: 0.9;
`;

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
  height: 88vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  overflow: hidden;
  padding: 2rem 0;
`;

// PRICES
export const PricesContainer = styled(motion.div)`
  height: 88vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  background-image: url(${CONSTANTS.IMAGES.background1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 0;
  overflow: hidden;
  position: relative;
`;

export const PricesTable = styled(motion.table)`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  border-collapse: collapse;
  background: rgba(34, 34, 34, 0.8);
  border: 2px solid #daa520;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const TableHeader = styled.thead`
  background-color: rgba(0, 0, 0, 0.6);
  color: #daa520;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: rgba(50, 50, 50, 0.6);
  }

  &:hover {
    background-color: rgba(218, 165, 32, 0.3);
    cursor: pointer;
  }
`;

export const TableHeading = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textLight || "#DAA520"};
  border-bottom: 2px solid ${(props) => props.theme.colors.border || "#DAA520"};
`;

export const TableBody = styled.tbody`
  color: ${(props) => props.theme.colors.text || "#FFFFFF"};
`;

export const TableData = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border || "#DAA520"};
  color: ${(props) => props.theme.colors.textLight || "#FFFFFF"};
  font-size: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

// CONTACT
export const ContactContainer = styled(motion.div)`
  height: 88vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 2rem 0;
  overflow: hidden;
`;

export const ContactContent = styled(motion.div)`
  flex-grow: 1;
  width: 80%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 1rem;
  background: rgba(50, 50, 50, 0.8);
  border: 2px solid #daa520;
  box-shadow: 0 12px 18px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 4rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.textLight};

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const ContactItem = styled.p`
  margin: 0.5rem 0;
`;

export const ContactIcons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const ContactLink = styled.a`
  color: ${(props) => props.theme.colors.secondary};
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${(props) => props.theme.colors.tertiary};
    transform: scale(1.1);
    transition: all 0.3s ease;
  }

  svg {
    width: 40px;
    height: 40px;
  }
`;

export const MapContainer = styled.div`
  flex: 1;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  iframe {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
  }
`;
