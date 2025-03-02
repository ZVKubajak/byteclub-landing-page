interface ITeam {
  imgsrc: string;
  name: string;
  position: string;
  message: string;
}

const TeamMember = ({ imgsrc, name, position, message }: ITeam) => {
  return (
    <div className=" text-gray-800 p-6 w-80 transform transition-all hover:scale-105">
      <div className="flex justify-center mb-6">
        <img
          src={imgsrc}
          alt={`photo of ${name}`}
          className="w-24 h-24 rounded-full border-2 border-[#fe262d] transform scale-105 object-cover"
        />
      </div>
      <h1 className="text-2xl font-semibold text-center mb-2">{name}</h1>
      <h2 className="text-md text-center font-medium text-[#fe262d] mb-4">
        {position}
      </h2>
      <p className="text-center text-md text-black opacity-80">{message}</p>
    </div>
  );
};

export default TeamMember;
