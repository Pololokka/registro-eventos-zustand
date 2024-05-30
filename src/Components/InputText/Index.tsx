import { useForm } from 'react-hook-form';

export interface Props {
  id: string;
  labelName: string;
  errors: any;
}

const InputText = (props: Props) => {
  const {
    register,
    // unregister,
  } = useForm();

  return (
    <div>
      <label htmlFor={props.id} className="text">
        {props.labelName}
      </label>
      <input
        type="text"
        id={props.id}
        {...register(`${props.id}`)}
        className="text__input"
      />

      <p className="text">{props.errors[props.id]?.message}</p>
    </div>
  );
};

export default InputText;
