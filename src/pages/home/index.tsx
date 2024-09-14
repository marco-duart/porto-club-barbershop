import About from "./about";
import Contact from "./contact";
import Presentation from "./presentation";
import Prices from "./prices";

const Home = () => {
  return (
    <>
      <Presentation />
      <hr />
      <About />
      <hr />
      <Prices />
      <hr />
      <Contact />
    </>
  );
};

export default Home;