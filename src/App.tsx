import './App.css';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//@ts-ignore
import { eventSchema } from './Schemas/formSchema';

import InputText from './Components/InputText/Index';
import InputSelect from './Components/InputSelect/Index';
import InputNumber from './Components/InputNumber/Index';

function App() {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(eventSchema) });

  const handleInfo = (data: any) => {
    console.log(data);
  };

  return (
    <main className="mainStyles">
      <h1 className="title">Registro de Eventos</h1>
      <form
        className="formStyles"
        onSubmit={handleSubmit((data) => handleInfo(data))}
      >
        <InputText
          id="nome"
          labelName="Nome Completo/Razão Social"
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
          errors={errors}
        />

        <InputText id="tipOutro" labelName="Especifique" errors={errors} />

        <div>
          <p className="text">Quantidade de Pessoas</p>

          <InputNumber
            id="quantidadeMin"
            labelName="Mínimo"
            min={0}
            errors={errors}
          />

          <InputNumber
            id="quantidadeMax"
            labelName="Máximo"
            min={0}
            errors={errors}
          />
        </div>

        <InputText id="email" labelName="Email" errors={errors} />

        <InputNumber
          id="cpfCnpj"
          labelName="CPF/CNPJ"
          min={0}
          errors={errors}
        />

        <InputText id="tema" labelName="Tema da Festa" errors={errors} />

        <InputNumber
          id="idade"
          labelName="Idade do Aniversariante"
          min={0}
          errors={errors}
        />

        <InputSelect
          id="genero"
          labelName="Gênero do Aniversariante"
          options={['Masculino', 'Feminino', 'Outro']}
          errors={errors}
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
          errors={errors}
        />

        <InputText id="conheceuOutro" labelName="Especifique" errors={errors} />

        <input type="submit" value="Enviar" className="text button" />
      </form>
    </main>
  );
}

export default App;
