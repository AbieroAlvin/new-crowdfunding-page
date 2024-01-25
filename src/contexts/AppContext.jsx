import { createContext, useState } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  // Progress bar states
  const [backers, setBackers] = useState(5007);
  const [money, setMoney] = useState(89914);

  // Modal States
  const [backModal, setBackModal] = useState(false);
  const [thankModal, setThankModal] = useState(false);

  //    Function for toggling the modals
  const toggleModal = (modal) => {
    if (modal === "pledge") {
      setBackModal(!backModal);
      window.scrollTo({ top: 75, behavior: "smooth" });
    } else if (modal === "success") {
      setThankModal(!thankModal);
    }
  };

  const values = {
    backers,
    setBackers,
    money,
    setMoney,
    backModal,
    thankModal,
    setBackModal,
    setThankModal,
    toggleModal,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppContext, AppContextProvider };
