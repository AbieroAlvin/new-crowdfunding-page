import iconCheck from "../../images/icon-check.svg";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const ThankModal = () => {
  const { setThankModal } = useContext(AppContext);
  return (
    <div className="px-7 py-6 flex flex-col rounded-lg shadow-xl max-w-[90%] md:max-w-[560px]  absolute top-[40%]  bg-white z-50 items-center justify-center space-y-4">
      <div className="flex items-center">
        <img src={iconCheck} alt="/" />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-bold text-black text-center">
          Thanks for your support!
        </h2>
        <p className="leading-8 text-Darkgray text-center text-[14px]">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
      </div>
      <button
        className="px-6 py-3 text-white rounded-full cursor-pointer bg-Moderatecyan"
        onClick={() => setThankModal(false)}
      >
        Got it!
      </button>
    </div>
  );
};

export default ThankModal;
