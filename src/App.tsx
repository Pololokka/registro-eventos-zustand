import './App.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//@ts-ignore
import { eventSchema } from './Schemas/formSchema';

import InputText from './Components/InputText/Index';
import InputSelect from './Components/InputSelect/Index';
import InputNumber from './Components/InputNumber/Index';

import { useFormShowStore } from './Store/FormStore';

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventSchema) });

  const extraConheceu = useFormShowStore((state) => state.conheceu);
  const extraTipoFesta = useFormShowStore((state) => state.tipoFesta);

  const handleInfo = (data: any) => {
    console.log(data);
  };

  return (
    <main className="mainStyles">
      <h1 className="title">Registro de Eventos</h1>
      <form className="formStyles" onSubmit={handleSubmit(handleInfo)}>
        <InputText
          id="nome"
          labelName="Nome Completo/Razão Social"
          errors={errors}
          register={register}
        />
        <InputSelect
          id="tipoFesta"
          labelName="Tipo de Evento/Festa"
          options={[
            '',
            'Aniversário',
            'Reunião de Empresa/Workshop',
            'Coffee and Meet',
            'Outro',
          ]}
          errors={errors}
          register={register}
        />
        <div>
          <p className="text">Quantidade de Pessoas</p>

          <InputNumber
            id="quantidadeMin"
            labelName="Mínimo"
            min={0}
            errors={errors}
            register={register}
          />

          <InputNumber
            id="quantidadeMax"
            labelName="Máximo"
            min={0}
            errors={errors}
            register={register}
          />
        </div>
        <InputText
          id="email"
          labelName="Email"
          errors={errors}
          register={register}
        />
        <InputNumber
          id="cpfCnpj"
          labelName="CPF/CNPJ"
          min={0}
          errors={errors}
          register={register}
        />

        <InputSelect
          id="genero"
          labelName="Gênero do Aniversariante"
          options={['', 'Masculino', 'Feminino', 'Outro']}
          errors={errors}
          register={register}
        />
        <InputSelect
          id="conheceu"
          labelName="Como nos Conheceu?"
          options={[
            '',
            'Recomendação',
            'Facebook',
            'Instagram',
            'Anúncio',
            'Outro',
          ]}
          errors={errors}
          register={register}
        />
        <h2 className="title">Campos Adicionais</h2>

        {extraTipoFesta == 'Aniversário' ? (
          <>
            <InputText
              id="tema"
              labelName="Tema da Festa de Aniversário"
              errors={errors}
              register={register}
            />

            <InputNumber
              id="idade"
              labelName="Idade do Aniversariante"
              min={0}
              errors={errors}
              register={register}
            />
          </>
        ) : null}

        {extraTipoFesta == 'Outro' ? (
          <InputText
            id="tipOutro"
            labelName="Especifique o tipo de festa!"
            errors={errors}
            register={register}
          />
        ) : null}

        {extraConheceu == 'Outro' ? (
          <InputText
            id="conheceuOutro"
            labelName="Especifique como nos conheceu!"
            errors={errors}
            register={register}
          />
        ) : null}

        <input type="submit" value="Enviar" className="text button" />
      </form>
    </main>
  );
}

export default App;
