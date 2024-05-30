import { useForm } from 'react-hook-form';

export interface Props {
  id: string;
  labelName: string;
  min?: number;
  max?: number;
  errors: any;
}

const InputNumber = (props: Props) => {
  const { register } = useForm();

  return (
    <div>
      <label htmlFor={props.id} className="text">
        {props.labelName}
      </label>
      <input
        type="number"
        id={props.id}
        min={props.min}
        max={props.max}
        {...register(`${props.id}`)}
        className="text__input"
      />

      <p className="text">{props.errors[props.id]?.message}</p>
    </div>
  );
};

export default InputNumber;
