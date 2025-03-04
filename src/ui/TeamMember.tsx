interface ITeam {
  imgsrc: string;
  name: string;
  position: string;
  message: string;
  imageOnLeft?: boolean;
}

const TeamMember = ({ imgsrc, name, position, message, imageOnLeft }: ITeam) => {
  return (
    <div className="text-gray-800 sm:my-4 p-6 w-full transform transition-all hover:scale-105">
      {/* For mobile: Items stack vertically regardless of position */}
      <div className="block sm:hidden">
        <div className="flex justify-center mb-6">
          <img
            src={imgsrc}
            alt={`photo of ${name}`}
            className="w-24 h-24 rounded-full border-2 border-[#fe262d] transform scale-105 object-cover"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-center mb-2">{name}</h1>
          <h2 className="text-md text-center font-medium text-[#fe262d] mb-4">
            {position}
          </h2>
          <p className="text-center text-md text-black opacity-80">{message}</p>
        </div>
      </div>

      {/* For tablet and above: Layout based on imageOnLeft prop */}
      {imageOnLeft ? (
        // Image on left, content on right
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:w-full sm:gap-10">
          <div className="w-1/3 flex justify-center">
            <img
              src={imgsrc}
              alt={`photo of ${name}`}
              className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-[#fe262d] transform scale-105 object-cover"
            />
          </div>
          <div className="w-2/3 text-right">
            <h1 className="text-2xl font-semibold mb-2">{name}</h1>
            <h2 className="text-md font-medium text-[#fe262d] mb-4">
              {position}
            </h2>
            <p className="text-md text-black opacity-80 md:text-lg">{message}</p>
          </div>
        </div>
      ) : (
        // Content on left, image on right
        <div className="hidden sm:flex sm:items-center sm:justify-between sm:w-full sm:gap-10">
          <div className="w-2/3 text-left">
            <h1 className="text-2xl font-semibold mb-2">{name}</h1>
            <h2 className="text-md font-medium text-[#fe262d] mb-4">
              {position}
            </h2>
            <p className="text-md text-black opacity-80 md:text-lg">{message}</p>
          </div>
          <div className="w-1/3 flex justify-center">
            <img
              src={imgsrc}
              alt={`photo of ${name}`}
              className="w-32 h-32 md:w-36 md:h-36 rounded-full border-2 border-[#fe262d] transform scale-105 object-cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamMember;