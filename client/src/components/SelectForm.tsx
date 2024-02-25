import { useSelector, shallowEqual } from "react-redux";
import { RootState } from "../redux/store";
import { memo } from "react";

interface IProps {
  defaultValue: string;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function SelectForm({ defaultValue, handleChange }: IProps) {
  const codeList = useSelector(
    (state: RootState) => state.currenciesReducer.codeList,
    shallowEqual
  );

  return (
    <select className="select" required onChange={(e) => handleChange(e)}>
      <option key={1} value={defaultValue}>
        {defaultValue}
      </option>
      {codeList.length !== 0
        ? codeList.map((item) => (
            <option key={item[1] + item[0]} value={item}>
              {item[0]}
            </option>
          ))
        : null}
    </select>
  );
}

export default memo(SelectForm);
