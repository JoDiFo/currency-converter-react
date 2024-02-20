interface IProps {
  title: string;
}

function SelectForm({ title }: IProps) {
  return (
    <div className="form-select">
      <label htmlFor="from">{title}</label>
      <select className="select" name="from" id="from" required>
        <option value="" disabled selected hidden>
          Choose currency
        </option>
      </select>
    </div>
  );
}

export default SelectForm;
