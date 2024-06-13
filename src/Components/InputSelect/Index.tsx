import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface Props {
  id: string;
  labelName: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const InputSelect = (props: Props) => {
  return (
    <div>
      <label htmlFor={props.id} className="text">
        {props.labelName}
      </label>
      <select
        id={props.id}
        {...props.register(`${props.id}`)}
        className="text__input"
      >
        {props.options.map((element, index) => {
          return (
            <option key={index} value={`${props.id + element}`}>
              {element}
            </option>
          );
        })}
      </select>

      <p className="text">{props.errors[props.id]?.message}</p>
    </div>
  );
};

export default InputSelect;
