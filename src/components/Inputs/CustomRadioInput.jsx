const CustomRadioInput = ({ id, handleRadio, disabled }) => {
  return (
    <div className="custom-radio">
      <input
        type="radio"
        name="pledge"
        id={id}
        onChange={handleRadio}
        className="hidden"
        disabled={disabled}
      />
      <span className="checkmark"></span>
    </div>
  );
};

export default CustomRadioInput;
