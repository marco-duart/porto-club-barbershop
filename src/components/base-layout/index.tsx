import Footer from "../footer";
import Header from "../header";
import * as S from "./styles";

const BaseLayout = () => {
  return (
    <S.Container>
      <div>
        <Header />
        <hr />
      </div>
      <S.ContentSection>

        <hr />
      </S.ContentSection>
      <div>
        <Footer />
      </div>
    </S.Container>
  );
};

export default BaseLayout;
