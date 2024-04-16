import Carousel from "../../Components/Carousel.jsx";
import Challenges from "../../Components/Challenges.jsx";
import CustomButton from "../../Components/CustomButton.jsx";
import Difference from "../../Components/Difference.jsx";
import Header from "../../Components/Header.jsx";
import Hero from "../../Components/Hero.jsx";
import { Text1, Text2, Text3, Text4 } from "../../Components/Texts.jsx";

const Home = () => {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <Challenges />
      <Text1 />
      <Difference />
      <div className="w-full flex justify-center py-8">
        <CustomButton buttonText="Meet Acacia" />
      </div>
      <Text2 />
      <Carousel />
      <Text3 />
      <div className="w-full flex justify-center pt-8">
        <CustomButton buttonText="Explore Our AI Practice" />
      </div>
      <Text4 />
    </div>
  );
};
export default Home;
