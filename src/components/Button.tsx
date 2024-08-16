interface IGenerateDish {
  generateDish: () => void;
}

export const Button = ({ generateDish }: IGenerateDish) => {
  return (
    <button type="button" onClick={generateDish}>
      <span className="button_text">Generate dish</span>
    </button>
  );
};
