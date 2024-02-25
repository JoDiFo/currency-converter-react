import { memo } from "react";

interface IProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputForm({ handleChange }: IProps) {
  return (
    <input
      type="number"
      name="amount"
      id="amount"
      required
      placeholder="1.00"
      onChange={(e) => handleChange(e)}
    />
  );
}

export default memo(InputForm);
