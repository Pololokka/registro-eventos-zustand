export interface Props {
  id: string;
  labelName: string;
}

const InputText = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id} className="text">
        {props.labelName}
      </label>
      <input
        type="text"
        name={props.id}
        id={props.id}
        className="text__input"
      />
    </div>
  );
};

export default InputText;
