import './App.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import eventSchema from './Schemas/eventSchema';

import InputText from './Components/InputText/Index';
import InputSelect from './Components/InputSelect/Index';
import InputNumber from './Components/InputNumber/Index';

function App() {
  const {
    register,
    unregister,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventSchema) });

  return (
    <main className="mainStyles">
      <h1 className="title">Registro de Eventos</h1>
      <form className="formStyles">
        <InputText
          id="nome"
          labelName="Nome Completo/Razão Social"
          register={register}
          errors={errors}
        />

        <InputSelect
          id="tipoFesta"
          labelName="Tipo de Evento/Festa"
          options={[
            'Aniversário',
            'Reunião de Empresa/Workshop',
            'Coffee and Meet',
            'Outro',
          ]}
        />

        <InputText
          id="tipOutro"
          labelName="Especifique"
          register={register}
          errors={errors}
        />

        <div>
          <p className="text">Quantidade de Pessoas</p>

          <InputNumber id="quantidadeMin" labelName="Mínimo" min={0} />

          <InputNumber id="quantidadeMax" labelName="Máximo" min={0} />
        </div>

        <InputText
          id="email"
          labelName="Email"
          register={register}
          errors={errors}
        />

        <InputNumber
          id="cpfCnpj"
          labelName="CPF/CNPJ"
          min={0}
          register={register}
          errors={errors}
        />

        <InputText
          id="tema"
          labelName="Tema da Festa"
          register={register}
          errors={errors}
        />

        <InputNumber id="idade" labelName="Idade do Aniversariante" min={0} />

        <InputSelect
          id="genero"
          labelName="Gênero do Aniversariante"
          options={['Masculino', 'Feminino', 'Outro']}
        />

        <InputSelect
          id="conheceu"
          labelName="Como nos Conheceu?"
          options={[
            'Recomendação',
            'Facebook',
            'Instagram',
            'Anúncio',
            'Outro',
          ]}
        />

        <InputText
          id="conheceuOutro"
          labelName="Especifique"
          register={register}
          errors={errors}
        />
      </form>
    </main>
  );
}

export default App;
