import styled from "styled-components";
import * as CONSTANTS from "../../utils/constants/constants";

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
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;
  padding: 2rem 0;
`;

export const PricesContainer = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${CONSTANTS.IMAGES.background1});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem 0;
`;

export const ContactContainer = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
  overflow: hidden;
  padding: 2rem 0;
`;

export const PricesTable = styled.table`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  border-collapse: collapse;
  background: #F0E68C;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const TableHeader = styled.thead`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #EEE8AA;
  }
`;

export const TableHeading = styled.th`
  padding: 1rem;
  text-align: left;
  font-weight: bold;
  font-size: 1.2rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.textLight};
  border-bottom: 2px solid ${(props) => props.theme.colors.border};
`;

export const TableBody = styled.tbody`
  color: ${(props) => props.theme.colors.text};
`;

export const TableData = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.textDark};
  font-size: 1rem;
  text-align: left;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;
