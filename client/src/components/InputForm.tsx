import { useDispatch } from "react-redux";
import { setAmount } from "../redux/currenciesSlice";

interface IProps {
  title: string;
}

function InputForm({ title }: IProps) {
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAmount(Number(e.target.value)));
  };

  return (
    <div className="form-group">
      <label htmlFor="amount">{title}</label>
      <input
        type="number"
        name="amount"
        id="amount"
        required
        placeholder="1.00"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default InputForm;
