import SocalMedia from "./socal-media";
import MyName from "./myName";
import HeroImage from "./heroimage";

function Hero() {
  return (
    <div id="home" className="hero h-screen pt-40 flex flex-row">
      <SocalMedia />
      <MyName />
      <HeroImage />
    </div>
  );
}
export default Hero;
