export interface Props {
  id: string;
  labelName: string;
  options: string[];
}

const InputSelect = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id} className="text">
        {props.labelName}
      </label>
      <select name={props.id} id={props.id} className="text__input">
        {props.options.map((element, index) => {
          return (
            <option key={index} value={element}>
              {element}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputSelect;
