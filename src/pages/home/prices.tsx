import * as S from "./styles";

const Prices = () => {
  return (
    <S.PricesContainer id="prices">
      <S.PricesTable>
        <S.TableHeader>
          <S.TableRow>
            <S.TableHeading>Serviço</S.TableHeading>
            <S.TableHeading>Descrição</S.TableHeading>
            <S.TableHeading>Preço</S.TableHeading>
          </S.TableRow>
        </S.TableHeader>
        <S.TableBody>
          <S.TableRow>
            <S.TableData>Corte</S.TableData>
            <S.TableData>Corte basico</S.TableData>
            <S.TableData>R$ 20,00</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>Corte</S.TableData>
            <S.TableData>Corte basico</S.TableData>
            <S.TableData>R$ 20,00</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>Corte</S.TableData>
            <S.TableData>Corte basico</S.TableData>
            <S.TableData>R$ 20,00</S.TableData>
          </S.TableRow>
        </S.TableBody>
      </S.PricesTable>
    </S.PricesContainer>
  );
};

export default Prices;
