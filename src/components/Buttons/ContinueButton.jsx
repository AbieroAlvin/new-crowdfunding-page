const ContinueButton = ({ onClick }) => {
  return (
    <div>
      <button
        className="btn px-7 py-3 font-medium md:px-6 bg-Moderatecyan rounded-full text-white hover:bg-Darkcyan cursor-pointer"
        onClick={onClick}
        type="button"
      >
        Continue
      </button>
    </div>
  );
};

export default ContinueButton;
