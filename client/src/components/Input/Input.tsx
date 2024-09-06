import { memo } from "react";

interface IProps {
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default memo(function Input({ placeholder, handleChange }: IProps) {
  return (
    <input
      type="number"
      required
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
    />
  );
});
