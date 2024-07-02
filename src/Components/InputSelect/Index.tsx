import { UseFormRegister, FieldValues } from 'react-hook-form';
import { useFormShowStore } from '../../Store/FormStore';

export interface Props {
  id: string;
  labelName: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const InputSelect = (props: Props) => {
  const changeFormShow = useFormShowStore((state) => state.showField);

  return (
    <div>
      <label htmlFor={props.id} className="text">
        {props.labelName}
      </label>
      <select
        id={props.id}
        {...props.register(`${props.id}`)}
        className="text__input"
        onChange={(event) => {
          changeFormShow(event.target.id, event.target.value);
        }}
      >
        {props.options.map((element, index) => {
          return (
            <option key={index} value={element}>
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
