import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const TriggerModalButton = ({ text, className, disabled }) => {
  const { toggleModal } = useContext(AppContext);
  return (
    <button
      onClick={() => toggleModal("pledge")}
      disabled={disabled}
      className={`${className} rounded-full text-[0.88rem] font-bold tracking-[0.04em] text-white`}
    >
      {text}
    </button>
  );
};

export default TriggerModalButton;
