import { FiLogIn } from "react-icons/fi";

const ButtonWrapper = ({ children }: { children: string }) => {
  return (
    <div className="flex min-h-[100px] items-center justify-center">
      <RoundedSlideButton text={children} />
    </div>
  );
};

const RoundedSlideButton = ({ text }: { text: string }) => {
  const handleRegisterClick = () => {
    window.location.href = "/register";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleRegisterClick}
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        border-[#fe262d] px-4 py-2 font-semibold
        uppercase text-[#fe262d] transition-all duration-500
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-[#fe262d]
        before:transition-transform before:duration-1000
        before:content-[""]

        hover:scale-105 hover:text-white
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-95`}
    >
      <FiLogIn />
      <span>{text}</span>
    </button>
  );
};

export default ButtonWrapper;
