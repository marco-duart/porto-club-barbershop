import About from "./about";
import Contact from "./contact";
import Presentation from "./presentation";
import Prices from "./prices";
import * as S from "./styles";

const Home = () => {
  return (
    <>
      <Presentation />
      <About />
      <Prices />
      <Contact />
    </>
  );
};

export default Home;