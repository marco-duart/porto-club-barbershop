import Home from "../../pages/home";
import Footer from "../footer";
import Header from "../header";
import * as S from "./styles";

const BaseLayout = () => {
  return (
    <S.Container>
      <div>
        <Header />
      </div>
      <Home />
      <div>
        <Footer />
      </div>
    </S.Container>
  );
};

export default BaseLayout;
