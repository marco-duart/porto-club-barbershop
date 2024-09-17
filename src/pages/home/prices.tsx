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
            <S.TableData></S.TableData>
            <S.TableData>R$ 25,00</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>Barba</S.TableData>
            <S.TableData></S.TableData>
            <S.TableData>R$ 25,00</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>Alisamento</S.TableData>
            <S.TableData></S.TableData>
            <S.TableData>R$ 25,00</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>Sobrancelha</S.TableData>
            <S.TableData></S.TableData>
            <S.TableData>R$ 5,00</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>Plano Mensal - Corte</S.TableData>
            <S.TableData>
              O plano oferece até 4 cortes, sendo 1 por semana, nas próximas 4
              semanas.
            </S.TableData>
            <S.TableData>R$ 75,00</S.TableData>
          </S.TableRow>
          <S.TableRow>
            <S.TableData>Plano Mensal - Corte + Barba</S.TableData>
            <S.TableData>
              O plano oferece até 4 cortes e 4 barbas, sendo 1 corte+barba por
              semana, nas próximas 4 semanas.
            </S.TableData>
            <S.TableData>R$ 135,00</S.TableData>
          </S.TableRow>
        </S.TableBody>
      </S.PricesTable>
      <S.Observation>
        <p>
          Observação: Para os planos mensais, o corte/barba deve ser feito
          semanalmente, sem intervalos. Caso o cliente não faça o corte/barba em
          uma semana, ele perde o direito ao corte/corte daquela semana.
        </p>
      </S.Observation>
    </S.PricesContainer>
  );
};

export default Prices;
