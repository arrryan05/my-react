import Accordion from "../../Components/Accordion.jsx";
import Blogs from "../../Components/Blogs.jsx";
import Carousel from "../../Components/Carousel.jsx";
import Challenges from "../../Components/Challenges.jsx";
import ContactForm from "../../Components/ContactForm.jsx";
import CustomButton from "../../Components/CustomButton.jsx";
import Difference from "../../Components/Difference.jsx";
import Footer from "../../Components/Footer.jsx";
import Header from "../../Components/Header.jsx";
import Header2 from "../../Components/Header2.jsx";
import Hero from "../../Components/Hero.jsx";
import { Text1, Text2, Text3, Text4 } from "../../Components/Texts.jsx";

const Home = () => {
  return (
    <div className="relative">
      <Header />
      <Header2 />
      <Hero />
      <Challenges />
      <Text1 />
      <Difference />
      <div className="w-full flex justify-center py-8">
        <CustomButton buttonText="Meet Acacia" />
      </div>
      <Text2 />
      <Accordion />
      <Carousel />
      <Text3 />
      <div className="w-full flex justify-center pt-8">
        <CustomButton buttonText="Explore Our AI Practice" />
      </div>
      <Text4 />
      <Blogs />
      <div className="w-full flex justify-center py-2">
        <CustomButton buttonText="View All Resources" />
      </div>
      <ContactForm />
      <Footer />
      <div className="container-fluid flex justify-center text-sm p-2">
        Acacia Advisors © 2024 All rights reserved
      </div>
    </div>
  );
};
export default Home;
