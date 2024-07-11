import { UseFormRegister, FieldValues } from 'react-hook-form';
import { useFormShowStore } from '../../Flux Core/Store/FormStore';
import { FormActions } from '../../Flux Core/Actions/FormActions';

export interface Props {
  id: string;
  labelName: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const InputSelect = (props: Props) => {
  const dispatch = useFormShowStore((state) => state.dispatch);

  const handleSelecValue = (name: string, fieldValue: string) => {
    dispatch(FormActions.showField(name, fieldValue));
  };

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
          handleSelecValue(event.target.id, event.target.value);
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
