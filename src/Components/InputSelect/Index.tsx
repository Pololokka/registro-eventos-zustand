import { useState } from 'react';
import { UseFormRegister, FieldValues } from 'react-hook-form';

export interface Props {
  id: string;
  labelName: string;
  options: string[];
  register: UseFormRegister<FieldValues>;
  errors: any;
}

const showInitialValues = {
  tipoFestaOutro: false,
  tipoFestaAniversário: false,
  conheceuOutro: false,
};

const InputSelect = (props: Props) => {
  const [show, setShow] = useState(showInitialValues);
  // const handleShow = (inputValue: string, fieldToShow: string) => {
  //   if (inputValue == 'Outro' || inputValue == 'Aniversário') {
  //     console.log('foi hein');
  //   }
  // };

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
