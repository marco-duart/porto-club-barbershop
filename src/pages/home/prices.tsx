import * as S from "./styles";
import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Prices = () => {
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
    <S.PricesContainer
      id="prices"
      ref={ref}
      animate={controls}
      initial="hidden"
    >
      <S.Title
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
        }}
      >
        Tabela de Preços
      </S.Title>
      <S.PricesTable
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, delay: 0.2 },
          },
        }}
      >
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
            <S.TableData>Corte básico</S.TableData>
            <S.TableData>R$ 20,00</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>Corte</S.TableData>
            <S.TableData>Corte básico</S.TableData>
            <S.TableData>R$ 20,00</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>Corte</S.TableData>
            <S.TableData>Corte básico</S.TableData>
            <S.TableData>R$ 20,00</S.TableData>
          </S.TableRow>
        </S.TableBody>
      </S.PricesTable>
    </S.PricesContainer>
  );
};

export default Prices;
