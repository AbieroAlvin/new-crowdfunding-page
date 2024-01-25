import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useContext } from "react";

import BackModal from "./Components/Modals/BackModal";
import ThankModal from "./Components/Modals/ThankModal";
import { AppContext } from "./contexts/AppContext";

const Home = () => {
  const { backModal, thankModal } = useContext(AppContext);
  return (
    <div>
      {/* Overlay when modal opens*/}
      {(backModal || thankModal) && (
        <div className="fixed left-0 top-0 z-20 h-full w-full bg-black/60 opacity-50"></div>
      )}
      <div className="h-screen w-full mx-auto relative">
        <section className="md:bg-[url('src/images/image-hero-desktop.jpg')] bg-[url('src/images/image-hero-mobile.jpg')] bg-cover bg-no-repeat md:h-[50vh] h-[40vh]">
          <Navbar />
        </section>
        <section className="relative flex items-center justify-center ">
          <Hero />
        </section>
      </div>

      <section className="flex items-center justify-center">
        {backModal && <BackModal />}
        {thankModal && <ThankModal />}
      </section>
    </div>
  );
};

export default Home;
