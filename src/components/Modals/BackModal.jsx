import { FaTimes } from "react-icons/fa";
import { useContext } from "react";
import PledgeCard from "../PledgeCard";
import { AppContext } from "../../contexts/AppContext";

const BackModal = () => {
  const { setBackModal } = useContext(AppContext);
  return (
    <div className="px-7 py-6 flex flex-col rounded-lg shadow-xl max-w-[90%]  md:max-w-[680px] absolute top-[20%] bg-white z-50 ">
      <div className="flex justify-between">
        <h1 className="text-black font-bold font-primary text-xl">
          Back this project
        </h1>
        <FaTimes
          size={24}
          onClick={() => setBackModal(false)}
          className="text-[var(--Dark-gray)] cursor-pointer hover:text-black"
        />
      </div>
      <p className="text-[var(--Dark-gray)] mt-4">
        Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
        the world?
      </p>
      <PledgeCard />
    </div>
  );
};

export default BackModal;
