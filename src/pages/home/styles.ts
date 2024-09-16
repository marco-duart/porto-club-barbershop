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
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
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
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  overflow: hidden;
  padding: 2rem 0;
`;

export const PricesTable = styled.table`
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  border-collapse: collapse;
  background: rgba(34, 34, 34, 0.8);
  border: 2px solid #DAA520;
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
  color: #DAA520;
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
