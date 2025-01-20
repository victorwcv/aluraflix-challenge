const CustomButton = ({ label, type, onclick, color, active }) => {
  return (
    <button type={type} className={`btn ${color} ${active ? "active" : ""}`} onClick={onclick}>
      {label}
    </button>
  );
};

export default CustomButton;
