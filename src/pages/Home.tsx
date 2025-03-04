import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroPhoto from "../images/hero-photo.avif";
import { Link } from "react-router-dom";
import TeamMember from "../ui/TeamMember";
import Mike from "../images/mike.jpg";
import Zander from "../images/zander.jpg";
import Bryce from "../images/IMG_0240.jpg";
import Phone from "../ui/3dPhone";
import ButtonWrapper from "../ui/RegisterButton";
import ContactForm from "../ui/ContactForm";
import BrandLogo from "../images/image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.substring(1);
        const targetElement = document.getElementById(id);
        if (targetElement) {
          const headerOffset = 90;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="pt-[75px]">
      {/* Hero Section */}
      <div
        className="relative h-[550px] bg-cover bg-center flex justify-center"
        style={{ backgroundImage: `url(${HeroPhoto})` }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Hero text */}
        <div className="relative text-left text-white mt-10 sm:mt-16">
          <div className="pl-4 pr-10 sm:pl-10 xl:pl-44 xl:pr-40">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Introducing Byte Club: Your AI-Powered Culinary Companion
            </h1>
          </div>
          <div className="pl-4 pr-10 sm:pl-10 lg:pr-60 xl:pl-44 xl:pr-80">
            <p className="mt-4 sm:mt-6 sm:text-lg md:text-xl">
              {" "}
              We integrate advanced AI to uncover exceptional culinary
              experiences beyond mainstream media. Enjoy early insights into
              emerging food trends and rewards that enrich your dining journey.
            </p>
          </div>
          <div className="pl-4 pr-10 sm:pl-10 xl:pl-44">
            <Link
              to="/register"
              className="inline-flex items-center bg-[#fe262d] text-white mt-5 py-2 px-3 rounded-xl text-md font-medium hover:bg-red-700 transition-colors duration-300 md:text-lg gap-1"
            >
              Register Now
              <FiArrowRight className="text-xl transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
      {/* our mission text */}
      <div
        id="mission"
        className="absolute top-[525px] left-0 right-0 mx-4 py-5 bg-[#fe262d] flex flex-col items-center rounded-xl text-center sm:mx-10 md:mx-20 xl:mx-44"
      >
        <h1 className="text-white text-xl font-semibold px-14 mb-2 sm:text-2xl sm:px-40 md:text-3xl">
          AI Driven Reviews at your finger tips
        </h1>
        <p className="text-white text-sm sm:text-md md:text-lg">
          INTRODUCING BYTE CLUB
        </p>
        <p className="text-white text-lg">
          <img
            src={BrandLogo}
            className="my-5 md:w-[225px]"
            width={200}
            alt="brand logo"
          />
        </p>
      </div>
      {/* info section */}
      <div className="pt-[260px] md:pt-[310px] px-5 text-left">
        <p className="text-lg mb-8 sm:mx-7 md:text-xl md:mx-10 lg:mx-20 xl:mx-40">
          Experience a revolutionary dining companion designed to transform your
          food journey. Our innovative platform empowers you to review your
          favorite meals, earn exclusive rewards, and explore curated restaurant
          recommendations tailored to your tastes.
        </p>
        <p className="text-lg mb-8 sm:mx-7 md:text-xl md:mx-10 lg:mx-20 xl:mx-40">
          With a sophisticated AI chatbot that intuitively connects you to the
          finest local culinary spots, discovering exceptional dining
          experiences is now easier than ever. Whether you're seeking hidden
          gems or popular favorites, our AI guides you effortlessly to the
          perfect meal, tailored to your tastes and preferences.
        </p>
        <p className="text-lg mb-8 sm:mx-7 md:text-xl md:mx-10 lg:mx-20 xl:mx-40">
          Join a vibrant and growing community where real-time reviews,
          insightful recommendations, and shared experiences come together to
          inspire your next gastronomic adventure. Connect with fellow food
          enthusiasts and discover hidden culinary treasures, all while enjoying
          the collective wisdom of a community passionate about great food.
        </p>
        <ButtonWrapper>get notified</ButtonWrapper>
      </div>
      {/* meet the team section */}
      <div id="meet-team" className="text-center mt-9 px-8">
        <h1 className="text-[#fe262d] text-lg md:text-xl">
          MEET THE BYTE TEAM
        </h1>
        <div className="mt-10 flex flex-col items-center">
          <TeamMember
            imgsrc={Mike}
            position="CEO @ Byte Club"
            message="We're thrilled to launch our venture, leveraging AI to enhance how people discover, experience, and enjoy dining like never before."
            name="Mike Little"
            imageOnLeft={true}
          />
          <TeamMember
            imgsrc={Zander}
            position="Lead Developer @ Byte Club"
            message="Our goal in developing this is to improve the dining experience, ensuring a more enjoyable and seamless time for everyone."
            name="Zander Kubajak"
          />
          <TeamMember
            imgsrc={Bryce}
            position="Lead Developer @ Byte Club"
            message="Our goal is to leverage AI to revolutionize the dining experience, helping people effortlessly discover and enjoy the best food around."
            name="Bryce Berczik"
            imageOnLeft={true}
          />
        </div>
      </div>
      {/* our vision section */}
      <div id="vision" className="text-center mt-9 px-5">
        <h1 className="text-[#fe262d] text-lg md:text-xl">OUR VISION</h1>
        <div>
          <Phone />
          <div>
            <p className="text-lg text-left my-8 sm:mx-7 md:text-xl lg:mx-20 xl:mx-44">
              Byte Club is revolutionizing the way people discover and review
              food, making dining decisions easier than ever. With cutting-edge
              AI technology, we help users see it before they eat it, providing
              visual previews of dishes alongside trusted reviews. No more
              guessing what's on the menu—Byte Club empowers users to make
              confident choices for every meal.
            </p>
            <p className="text-lg text-left mb-8 sm:mx-7 md:text-xl lg:mx-20 xl:mx-44">
              Our vision is to become the #1 source for food reviews nationwide,
              bringing innovation to every household. Through AI validation, we
              ensure reviews are authentic, unbiased, and tailored to each
              user’s preferences. By combining community-driven insights with
              smart technology, we’re creating a platform where everyone can
              dine with confidence.
            </p>
            <p className="text-lg text-left mb-8 sm:mx-7 md:text-xl lg:mx-20 xl:mx-44">
              The future of dining is seamless, interactive, and powered by
              AI—and Byte Club is leading the way. Whether it's a family night
              out or discovering the hottest trending meals, Byte Club makes
              finding great food simple and stress-free. Join us now and be part
              of the movement that's transforming the way the world eats.
            </p>
          </div>
        </div>

        <ButtonWrapper>join the club</ButtonWrapper>
      </div>
      {/* contact us form */}
      <div id="contact" className="mb-16">
        <ContactForm />
      </div>
    </div>
  );
};

export default Home;
