const CustomButton = ({ label, type, onclick, color }) => {
  return (
    <button type={type} className={`btn ${color}`} onClick={onclick}>
      {label}
    </button>
  );
};

export default CustomButton;
