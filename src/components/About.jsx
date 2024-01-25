import pledges from "../data/pledges.json";
import TriggerModalButton from "../components/Buttons/TriggerModalButton";

const About = () => {
  return (
    <div className="flex flex-col items-center px-8 rounded-xl shadow-xl w-[90%] relative py-6 bg-white gap-6 mx-auto">
      <div className=" flex flex-col gap-3">
        <h1 className="text-xl font-semibold text-Black">About this project</h1>
        <div className="space-y-4 text-Darkgray leading-7">
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        {pledges.map((pledge, index) => (
          <div key={pledge.id}>
            <div
              className={`mb-[1.6rem] rounded-lg border border-slate-300 px-[1.4rem] pb-1 pt-5 lg:px-[1.9rem] lg:pb-6 lg:pt-8 ${
                index === 2 ? "opacity-50" : ""
              }`}
            >
              <div className="md:flex md:items-center md:justify-between">
                <h3 className="md:text-lg">{pledge.heading}</h3>
                <p className="py-1.5 font-medium text-Moderatecyan lg:py-1 lg:text-[0.95rem]">
                  Pledge ${pledge.amount} or more
                </p>
              </div>
              <p className="py-4 leading-6 lg:pt-5 lg:leading-[1.8rem]">
                {pledge.text}
              </p>
              <div className="md:flex md:justify-between md:pt-1">
                <div className="flex items-center py-0 5">
                  <strong className="text-[2rem]">{pledge.numbersLeft}</strong>
                  <span className="ml-2">left</span>
                </div>
                <div className="py-[1.1rem] lg:py-1.5">
                  {pledge.left === true ? (
                    <TriggerModalButton
                      text="Select Reward"
                      className="bg-Moderatecyan px-[1.8rem] py-3.5 hover:bg-Darkcyan lg:py-3"
                    />
                  ) : (
                    <TriggerModalButton
                      text="Out of Stock"
                      disabled={true}
                      className="mt-0.5 bg-Darkgray px-[2.1rem] py-3.5 lg:mt-0 lg:py-3"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
