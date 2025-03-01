import HeroPhoto from "../images/hero-photo.avif";

const Home = () => {
  return (
    <div className="pt-[75px]">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${HeroPhoto})` }}
      >
        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Hero text */}
        <div className="relative text-center text-white px-4">
          <h1 className="text-4xl font-bold">AI-Driven Food Discoveries</h1>
          <p className="mt-4 text-xl">
          Dive into a new era of culinary experiences where cutting-edge AI redefines food reviews.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
