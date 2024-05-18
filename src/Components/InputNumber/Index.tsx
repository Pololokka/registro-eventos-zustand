export interface Props {
  id: string;
  labelName: string;
  min?: number;
  max?: number;
}

const InputNumber = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id} className="text">
        {props.labelName}
      </label>
      <input
        type="number"
        name={props.id}
        id={props.id}
        min={props.min}
        max={props.max}
        className="text__input"
      />
    </div>
  );
};

export default InputNumber;
