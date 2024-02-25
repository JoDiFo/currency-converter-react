import { memo } from "react";

interface IProps {
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ placeholder, handleChange }: IProps) {
  return (
    <input
      type="number"
      required
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default memo(Input);
