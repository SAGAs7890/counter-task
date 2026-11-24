import "./Button.css";

interface ButtonProps {
  text: string;
  onClick: () => void;
  color?: string; 
}

function Button({ text, onClick, color = "#3b82f6" }: ButtonProps) {
  return (
    <button
      className="custom-btn"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

export default Button;