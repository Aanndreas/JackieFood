interface IGenerateDish {
  generateDish: () => void;
}

export const Button = ({ generateDish }: IGenerateDish) => {
  return (
    <button type="button" onClick={generateDish}>
      Generate dish
    </button>
  );
};
